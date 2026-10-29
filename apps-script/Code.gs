/**
 * Al-Masar management discovery survey — private answer store.
 * Lives inside a Google Sheet (Extensions > Apps Script). Free.
 *  - doPost: the public survey sends answers here; they are added as a new row.
 *  - doGet : the private dashboard reads all answers, only with the secret key.
 * Run setup() once before deploying (it creates the sheets and the secret key).
 */
// The Google Sheet that stores the answers (works whether or not the script is attached to it).
var SHEET_ID = '1UAonbuXG_2O1dwsMWjh7N1RasLf2IPYYxX2DVinXCis';
var SHEET_NAME = 'Responses';
function book_() { return SpreadsheetApp.openById(SHEET_ID); }
var BASE_HEADERS = ['Received at', 'Submission ID', 'Name', 'Role', 'Language', 'Raw JSON'];

function setup() {
  var props = PropertiesService.getScriptProperties();
  var key = props.getProperty('ADMIN_KEY');
  if (!key) {
    key = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '').slice(0, 8);
    props.setProperty('ADMIN_KEY', key);
  }
  var ss = book_();
  responsesSheet_(ss);
  var ks = ss.getSheetByName('Dashboard key') || ss.insertSheet('Dashboard key');
  ks.getRange('A1').setValue('Private dashboard key (do not share):');
  ks.getRange('B1').setValue(key);
  ks.setColumnWidth(1, 280);
  ks.setColumnWidth(2, 360);
  Logger.log('Dashboard key: ' + key);
}

function responsesSheet_(ss) {
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME, 0);
  if (sh.getLastRow() === 0) {
    sh.appendRow(BASE_HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, BASE_HEADERS.length).setFontWeight('bold');
  }
  return sh;
}

// Stops a typed answer that starts with = + - @ from running as a formula.
function safe_(v) {
  var s = v == null ? '' : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var data = JSON.parse(e.postData.contents);
    if (!data || !data.id || !data.name) return json_({ ok: false, error: 'missing fields' });
    var ss = book_();
    var sh = responsesSheet_(ss);
    var lastRow = sh.getLastRow();
    if (lastRow > 1) {
      var ids = sh.getRange(2, 2, lastRow - 1, 1).getValues().map(function (r) { return String(r[0]); });
      if (ids.indexOf(String(data.id)) !== -1) return json_({ ok: true, duplicate: true });
    }
    var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
    (data.cols || []).forEach(function (c) {
      if (headers.indexOf(String(c[1])) === -1) {
        headers.push(String(c[1]));
        sh.getRange(1, headers.length).setValue(String(c[1])).setFontWeight('bold');
      }
    });
    var row = headers.map(function () { return ''; });
    row[0] = new Date();
    row[1] = safe_(data.id);
    row[2] = safe_(data.name);
    row[3] = safe_(data.role);
    row[4] = safe_(data.lang);
    row[5] = JSON.stringify(data);
    var readable = data.readable || {};
    (data.cols || []).forEach(function (c) {
      row[headers.indexOf(String(c[1]))] = safe_(readable[c[0]]);
    });
    sh.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet(e) {
  var key = PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
  var given = e && e.parameter ? e.parameter.key : '';
  if (!key || !given || given !== key) return json_({ ok: true, service: 'Al-Masar survey' });
  var sh = book_().getSheetByName(SHEET_NAME);
  if (!sh || sh.getLastRow() < 2) return json_({ ok: true, responses: [] });
  var vals = sh.getRange(2, 1, sh.getLastRow() - 1, 6).getValues();
  var out = [];
  vals.forEach(function (r) {
    try {
      var d = JSON.parse(r[5]);
      d.receivedAt = r[0] instanceof Date ? r[0].toISOString() : String(r[0]);
      out.push(d);
    } catch (x) {}
  });
  return json_({ ok: true, responses: out });
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
