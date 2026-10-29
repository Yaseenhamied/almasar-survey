/* Al-Masar management discovery — shared question set (survey + dashboard).
   Every text is [English, Arabic]. Answer storage:
   single -> option index (number) · multi -> array of indexes · text/short -> string
   "comment" adds an optional free-text box stored as <id>_c.            */
window.SURVEY = {
  version: "2026-10-29",
  sections: [
    { k: "A", t: ["Budget and fees", "التكلفة والميزانية"],
      w: ["So we can size a plan that fits your goals and budget.", "حتى نُعدّ خطة تناسب أهدافكم وميزانيتكم."],
      q: [
        { id: "A1", type: "single", label: "Yearly budget",
          t: ["What total yearly marketing investment are you comfortable with in year one (consulting fees, ads and production)?", "ما إجمالي الاستثمار التسويقي السنوي المناسب لكم في السنة الأولى (أتعاب الاستشارة والإعلانات والإنتاج)؟"],
          o: [["300,000 – 400,000 LYD", "300,000 – 400,000 د.ل"], ["400,000 – 500,000 LYD", "400,000 – 500,000 د.ل"], ["500,000 – 750,000 LYD", "500,000 – 750,000 د.ل"], ["750,000 – 1,000,000 LYD", "750,000 – 1,000,000 د.ل"], ["Depends on the plan and goals you propose", "يعتمد على الخطة والأهداف التي تقترحونها"]] },
        { id: "A2", type: "single", label: "Fee payment",
          t: ["How would you prefer to pay the consulting fees?", "ما طريقة الدفع المفضلة لأتعاب الاستشارة؟"],
          o: [["Fixed monthly fee", "أتعاب شهرية ثابتة"], ["One payment at the start", "دفعة واحدة عند البداية"], ["Two payments: at the start and at the end of the plan", "دفعتان: عند البداية وعند نهاية الخطة"], ["We prefer to discuss it", "نفضّل مناقشتها"]] },
        { id: "A3", type: "single", label: "6-month commitment",
          t: ["The agreement starts with a 6-month commitment; after that you can continue or cancel. Does this work for you?", "يبدأ الاتفاق بالتزام لمدة 6 أشهر، وبعدها يمكنكم الاستمرار أو الإلغاء. هل يناسبكم ذلك؟"],
          o: [["Yes, it works", "نعم، يناسبنا"], ["We prefer to commit to the full 12 months", "نفضّل الالتزام بالسنة كاملة من البداية"], ["We need to discuss it", "نحتاج إلى مناقشته"]] },
        { id: "A4", type: "multi", max: 2, label: "Budget priorities",
          t: ["Where should the budget go first? (choose up to 2)", "أين تفضلون توجيه الميزانية أولاً؟ (اختر حتى خيارين)"],
          o: [["Ads and social media", "الإعلانات ووسائل التواصل"], ["Sales team training", "تدريب فريق المبيعات"], ["Visits and presentations to companies", "زيارات وعروض للشركات"], ["Printing and branch branding", "المطبوعات وهوية الفروع"], ["Events and sponsorships", "الفعاليات والرعايات"], ["Website and digital services", "الموقع والخدمات الرقمية"]] }
      ] },
    { k: "B", t: ["Results and timing", "النتائج والتوقيت"],
      w: ["So we agree from the start on what success looks like and when to expect it.", "حتى نتفق من البداية على شكل النجاح ومتى نتوقعه."],
      q: [
        { id: "B1", type: "multi", max: 3, label: "Proof of success",
          t: ["What results would prove to you that marketing is working? (choose up to 3)", "ما النتائج التي تثبت لكم أن التسويق ينجح؟ (اختر حتى 3)"],
          o: [["More calls and inquiries", "زيادة الاتصالات والاستفسارات"], ["More policies sold", "زيادة الوثائق المباعة"], ["More corporate clients", "عملاء أكثر من الشركات"], ["Higher premiums", "أقساط أعلى"], ["A better-known name", "اسم معروف أكثر"], ["More trust and a better reputation", "ثقة وسمعة أفضل"]] },
        { id: "B2", type: "single", label: "Expected first results",
          t: ["When do you expect to see the first clear results?", "متى تتوقعون رؤية أول نتائج واضحة؟"],
          o: [["Within 1 month", "خلال شهر"], ["Within 3 months", "خلال 3 أشهر"], ["Within 6 months", "خلال 6 أشهر"], ["Within a year", "خلال سنة"]] },
        { id: "B3", type: "single", label: "Policies per month today",
          t: ["Roughly how many policies do you issue per month today?", "كم وثيقة تصدرون شهرياً تقريباً اليوم؟"],
          o: [["Under 50", "أقل من 50"], ["50 – 200", "50 – 200"], ["200 – 500", "200 – 500"], ["More than 500", "أكثر من 500"], ["We don't know exactly", "لا نعرف بدقة"]] },
        { id: "B4", type: "multi", label: "What they track today",
          t: ["What do you track today? (choose all that apply)", "ما الذي تتابعونه حالياً؟ (اختر كل ما ينطبق)"],
          o: [["Number of policies", "عدد الوثائق"], ["Premiums", "الأقساط"], ["Calls and inquiries", "الاتصالات والاستفسارات"], ["Where customers heard about us", "من أين عرفنا العملاء"], ["Nothing yet", "لا شيء حالياً"]] },
        { id: "B5", type: "text", label: "12-month ambition",
          t: ["Where do you want Al-Masar to be in 12 months? One sentence is enough.", "أين تريدون أن تكون المسار بعد 12 شهراً؟ تكفي جملة واحدة."] }
      ] },
    { k: "C", t: ["How we will work together", "طريقة العمل معاً"],
      w: ["So the work fits the way you like to run things.", "حتى يتناسب العمل مع طريقة إدارتكم."],
      q: [
        { id: "C1", type: "single", label: "Involvement level",
          t: ["How involved do you want to be in the marketing work?", "ما مستوى مشاركتكم الذي تفضلونه في العمل التسويقي؟"],
          o: [["Approve every post and ad", "اعتماد كل منشور وإعلان"], ["Approve campaigns and major items only", "اعتماد الحملات والبنود الكبيرة فقط"], ["A monthly results meeting only", "اجتماع نتائج شهري فقط"]] },
        { id: "C2", type: "short", label: "Day-to-day contact",
          t: ["Who will be our day-to-day contact person? (name and role)", "من سيكون مسؤول التواصل اليومي معنا؟ (الاسم والمنصب)"] },
        { id: "C3", type: "single", label: "Approval speed",
          t: ["How quickly can content and campaigns be approved?", "ما سرعة اعتماد المحتوى والحملات لديكم؟"],
          o: [["Within 24 hours", "خلال 24 ساعة"], ["Within 48 hours", "خلال 48 ساعة"], ["Within a week", "خلال أسبوع"]] },
        { id: "C4", type: "multi", label: "Reporting format",
          t: ["How would you like to receive results? (choose all that apply)", "كيف تفضلون استلام النتائج؟ (اختر كل ما ينطبق)"],
          o: [["A short weekly update on WhatsApp", "تحديث أسبوعي مختصر عبر واتساب"], ["A monthly written report", "تقرير شهري مكتوب"], ["A monthly meeting", "اجتماع شهري"]] },
        { id: "C5", type: "single", label: "In-house marketing staff",
          t: ["Does anyone work on marketing inside the company today?", "هل يعمل أحد على التسويق داخل الشركة حالياً؟"],
          o: [["No one", "لا أحد"], ["One person", "شخص واحد"], ["Two or more", "شخصان أو أكثر"]] },
        { id: "C6", type: "single", label: "Plan to hire",
          t: ["Do you plan to hire marketing staff this year?", "هل تخططون لتوظيف موظفين للتسويق هذا العام؟"],
          o: [["Yes", "نعم"], ["No", "لا"], ["Not decided yet", "لم يُحسم بعد"]] }
      ] },
    { k: "D", t: ["The company", "الشركة"],
      w: ["The essentials we need to build the right message.", "الأساسيات التي نحتاجها لبناء الرسالة الصحيحة."],
      q: [
        { id: "D1", type: "multi", max: 2, label: "Products to push first",
          t: ["Which products should we push first? (choose up to 2)", "ما المنتجات التي نبدأ بالتركيز عليها؟ (اختر حتى منتجين)"],
          o: [["Motor (compulsory)", "تأمين المركبات (الإجباري)"], ["Motor (comprehensive)", "تأمين المركبات (الشامل)"], ["Medical", "التأمين الطبي"], ["Engineering", "التأمين الهندسي"], ["Marine", "التأمين البحري"], ["Fire and property", "تأمين الحريق والممتلكات"]] },
        { id: "D2", type: "single", label: "Main focus",
          t: ["Who is the main focus?", "من هو التركيز الرئيسي؟"],
          o: [["Corporate clients", "الشركات والمؤسسات"], ["Individuals", "الأفراد"], ["Both equally", "الاثنان بالتساوي"]] },
        { id: "D3", type: "text", label: "What makes Al-Masar better",
          t: ["In one sentence: what makes Al-Masar better than other insurers?", "بجملة واحدة: ما الذي يميز المسار عن شركات التأمين الأخرى؟"] },
        { id: "D4", type: "text", label: "Most worrying competitor",
          t: ["Which competitor worries you most, and why?", "أي منافس يقلقكم أكثر، ولماذا؟"] },
        { id: "D5", type: "multi", comment: true, label: "What we can announce",
          t: ["What can we tell customers publicly? (choose all that apply)", "ما الذي يمكننا إعلانه للعملاء؟ (اختر كل ما ينطبق)"],
          o: [["Fast policy issuance", "سرعة إصدار الوثيقة"], ["A set claim settlement time", "مدة محددة لتسوية المطالبات"], ["Paid-up capital", "رأس المال المدفوع"], ["Reinsurance partner's name", "اسم شريك إعادة التأمين"], ["Board and management names", "أسماء الإدارة ومجلس الإدارة"], ["Nothing yet", "لا شيء حالياً"]],
          c: ["Details, e.g. the claim settlement time", "التفاصيل، مثل مدة تسوية المطالبات"] },
        { id: "D6", type: "short", label: "Sales offices and staff",
          t: ["How many sales offices and sales staff do you have?", "كم عدد مكاتب البيع وموظفي المبيعات لديكم؟"] }
      ] },
    { k: "E", t: ["Final words", "في الختام"],
      w: ["Your honest view helps us get it right the first time.", "رأيكم الصريح يساعدنا على تقديم الخطة الصحيحة من المرة الأولى."],
      q: [
        { id: "E1", type: "text", label: "Main concern",
          t: ["What concerns you most about working with a marketing consulting team?", "ما أكثر ما يقلقكم في العمل مع فريق استشارات تسويقية؟"] },
        { id: "E2", type: "text", label: "Anything else",
          t: ["Anything else you want us to know?", "هل هناك أي شيء آخر تودون أن نعرفه؟"] }
      ] }
  ]
};
