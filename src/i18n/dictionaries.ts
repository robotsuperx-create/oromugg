import type { Locale } from "./config";

export type Pkg = {
  name: string;
  who: string;
  price: string;
  period: string;
  includes: string[];
  /** The tech component every bundle carries (site, page, app, automation). */
  tech?: string;
  featured?: boolean;
};

export type Dict = {
  meta: { title: string; description: string };
  nav: { services: string; tech: string; creators: string; packages: string; work: string; contact: string; cta: string };
  hero: {
    kicker: string;
    title: string[];
    tagline: string;
    text: string;
    primary: string;
    secondary: string;
    reels: { label: string; views: string }[];
  };
  proof: { value: string; label: string }[];
  services: {
    heading: string;
    intro: string;
    items: { title: string; text: string; points: string[] }[];
  };
  tech: {
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
    proof: string;
    cta: string;
  };
  creators: {
    heading: string;
    intro: string;
    note: string;
    join: string;
    joinText: string;
    people: { name: string; niche: string; city: string; reach: string }[];
  };
  packages: {
    heading: string;
    intro: string;
    techNote: string;
    techLabel: string;
    tabs: { business: string; individuals: string; single: string };
    currency: string;
    business: Pkg[];
    individuals: Pkg[];
    single: Pkg[];
    cta: string;
  };
  process: { heading: string; steps: { title: string; text: string }[] };
  work: { heading: string; intro: string; items: { client: string; sector: string; result: string; detail: string }[] };
  contact: {
    heading: string;
    intro: string;
    whatsapp: string;
    form: {
      name: string; phone: string; business: string; need: string; message: string;
      needs: string[]; submit: string; sending: string; sent: string; error: string;
    };
    location: string;
  };
  footer: { tagline: string; rights: string };
};

/* ───────────────────────── العربية الفصحى ───────────────────────── */
const ar: Dict = {
  meta: {
    title: "OROM UGG — وكالة إنتاج وتسويق رقمي وتقنية في الجهة الشرقية",
    description:
      "تصوير سينمائي، شبكة مبدعين محليين، إعلانات ممولة، ومواقع ومتاجر وتطبيقات. نحوّل محلّك أو مشروعك إلى علامة يعرفها الناس في وجدة والجهة الشرقية.",
  },
  nav: { services: "الخدمات", tech: "المواقع والتقنية", creators: "المبدعون", packages: "الباقات", work: "أعمالنا", contact: "تواصل", cta: "اطلب عرضاً" },
  hero: {
    kicker: "وكالة إنتاج وتسويق رقمي وتقنية · وجدة والجهة الشرقية",
    title: ["دورنا التحليق بعملك", "للمستوى الأعلى."],
    tagline: "ربحك أنت، ربحنا نحن.",
    text:
      "من أول لقطة إلى أول زبون يدخل من الباب: فريق واحد يصوّر محتواك بجودة سينمائية، وينشره عبر شبكة مبدعين يتابعهم أكثر من 100 ألف شخص في الجهة الشرقية، ويدير إعلاناتك، ويبني موقعك ومتجرك وتطبيقك حتى تتحول المشاهدات إلى مبيعات.",
    primary: "احجز مكالمة مجانية",
    secondary: "شاهد الباقات",
    reels: [
      { label: "افتتاح مطعم", views: "84K" },
      { label: "عيادة تجميل", views: "121K" },
      { label: "معرض أثاث", views: "67K" },
      { label: "صالون سيارات", views: "95K" },
    ],
  },
  proof: [
    { value: "+100K", label: "متابع محلي تصل إليهم شبكتنا" },
    { value: "48h", label: "من التصوير إلى النشر" },
    { value: "4", label: "ركائز في فريق واحد: إنتاج، مبدعون، إعلانات، تقنية" },
    { value: "100%", label: "من الجهة الشرقية، للجهة الشرقية" },
  ],
  services: {
    heading: "أربع خدمات، نتيجة واحدة: زبائن أكثر",
    intro: "لا نبيع فيديوهات ولا منشورات ولا صفحات. نبيع ما يحدث بعدها.",
    items: [
      {
        title: "إنتاج سينمائي",
        text: "تصوير بكاميرات احترافية، إضاءة، صوت نقي، ومونتاج مبني على ما تحبه الخوارزميات لا على الذوق فقط.",
        points: ["فيديوهات ريلز وتيك توك", "تصوير المنتجات والأماكن", "تغطية الافتتاحات والفعاليات"],
      },
      {
        title: "شبكة المبدعين",
        text: "وجوه محلية يعرفها الناس ويثقون بها. تختار المبدع الأنسب لجمهورك، ونتكفل نحن بالسيناريو والتصوير والنشر.",
        points: ["ظهور في صفحات يتابعها عشرات الآلاف", "تنسيق كامل من الفكرة إلى النشر", "تقرير وصول بعد كل حملة"],
      },
      {
        title: "إعلانات ممولة",
        text: "حملات على فيسبوك وإنستغرام وتيك توك تستهدف مدينتك وحيّك بالضبط، مع تحسين يومي حتى ينخفض سعر كل زبون.",
        points: ["استهداف جغرافي دقيق", "اختبار عدة نسخ من الإعلان", "تقرير شهري بالأرقام"],
      },
      {
        title: "مواقع، متاجر وتطبيقات",
        text: "موقع سريع يظهر في غوغل، متجر إلكتروني، تطبيق حجز أو طلب، وأتمتة تربط واتساب بنظامك. هذا الموقع الذي تتصفحه الآن مثال على ما نبنيه.",
        points: ["مواقع تعريفية ومتاجر إلكترونية", "تطبيقات ويب وهاتف", "أتمتة واتساب ولوحات تحكم"],
      },
    ],
  },
  tech: {
    heading: "التقنية ليست خدمة إضافية، بل نصف عملنا",
    intro:
      "نبني الأدوات الرقمية التي تجعل التسويق يثمر: موقع يظهر في غوغل، متجر يبيع ليلاً، تطبيق يحجز بدلاً عنك، وأتمتة تردّ على زبائنك في ثوانٍ. كل باقة لدينا تتضمن جزءاً تقنياً، ويمكن طلب كل خدمة وحدها.",
    items: [
      { title: "مواقع تعريفية", text: "صفحات سريعة بثلاث لغات، مهيأة لمحركات البحث، تُفتح في أقل من ثانية على الهاتف." },
      { title: "متاجر إلكترونية", text: "كتالوج، سلة، دفع عند الاستلام أو بالبطاقة، وربط مع التوصيل. تبيع وأنت نائم." },
      { title: "تطبيقات ويب وهاتف", text: "حجز مواعيد، طلبات، برامج ولاء، أو أي فكرة تحتاج تطبيقاً خاصاً بمشروعك." },
      { title: "أتمتة واتساب والذكاء الاصطناعي", text: "ردود تلقائية، تأكيد حجوزات، تذكير بالمواعيد، ومتابعة الزبائن دون تدخل يدوي." },
      { title: "لوحات تحكم وتقارير", text: "أرقامك كلها في شاشة واحدة: مبيعات، رسائل، نتائج الحملات، محدّثة لحظياً." },
      { title: "استضافة وصيانة وأمان", text: "نطاق، استضافة سريعة، نسخ احتياطي، تحديثات شهرية. موقعك لا يتوقف." },
    ],
    proof: "هذا الموقع بُني بنفس الأدوات التي نبني بها مواقع عملائنا: Next.js وSupabase وVercel. أربع لغات، نموذج متصل بقاعدة بيانات، وسرعة كاملة على الهاتف.",
    cta: "ناقش مشروعك التقني",
  },
  creators: {
    heading: "اختر الوجه الذي يناسب جمهورك",
    intro:
      "شبكة من المبدعين المحليين في وجدة وبركان والناظور، كل واحد منهم يملك جمهوراً حقيقياً في مجاله. أنت تختار، ونحن نصوّر وننشر ونقيس.",
    note: "الأرقام تقريبية ومحدّثة شهرياً.",
    join: "صانع محتوى؟ انضم إلى الشبكة",
    joinText: "ندفع لك مقابل كل فيديو إعلاني، ونتكفل بالتصوير والمونتاج. أنت تظهر وتتحدث فقط.",
    people: [
      { name: "مريم", niche: "لايف ستايل ومطاعم", city: "وجدة", reach: "100K+" },
      { name: "مبدع ٢", niche: "سيارات وتقنية", city: "وجدة", reach: "قريباً" },
      { name: "مبدعة ٣", niche: "جمال وموضة", city: "بركان", reach: "قريباً" },
      { name: "مبدع ٤", niche: "رياضة وصحة", city: "الناظور", reach: "قريباً" },
    ],
  },
  packages: {
    heading: "باقات واضحة، بلا مفاجآت",
    intro: "اختر ما يناسب حجم مشروعك اليوم. يمكنك الانتقال بين الباقات في أي وقت.",
    techNote: "كل باقة تتضمن جزءاً تقنياً (موقع، صفحة أو تطبيق). وأي خدمة يمكن طلبها وحدها من تبويب «خدمات منفردة».",
    techLabel: "الجزء التقني",
    tabs: { business: "محلات وشركات", individuals: "أفراد ومهن حرة", single: "خدمات منفردة" },
    currency: "درهم",
    business: [
      {
        name: "الإعلان السريع",
        who: "افتتاح، عرض موسمي، فعالية",
        price: "من 3,500",
        period: "لمرة واحدة",
        includes: ["فيديو سينمائي 30–60 ثانية", "ظهور مبدع من الشبكة", "نشر على صفحته وصفحتك", "تقرير وصول"],
        tech: "صفحة هبوط للعرض مع زر واتساب",
      },
      {
        name: "الشهرية المتكاملة",
        who: "مطاعم، محلات، عيادات",
        price: "من 7,500",
        period: "شهرياً",
        featured: true,
        includes: ["4 فيديوهات شهرياً", "إدارة الصفحات والرد على الرسائل", "إعلانات ممولة مُدارة (الميزانية الإعلانية منفصلة)", "ظهور مبدع مرتين شهرياً", "تقرير شهري بالأرقام"],
        tech: "موقع تعريفي + استضافة وصيانة مشمولة",
      },
      {
        name: "التحول الرقمي",
        who: "مشروع جديد أو انتقال أونلاين",
        price: "من 15,000",
        period: "دفعة واحدة",
        includes: ["هوية بصرية للصفحات", "جلسة تصوير إطلاق", "حملة إطلاق لمدة شهر", "تدريب على إدارة المتجر"],
        tech: "موقع أو متجر إلكتروني + أتمتة واتساب للطلبات",
      },
      {
        name: "المؤسسات والفنادق",
        who: "عقود سنوية وحجم أكبر",
        price: "عرض مخصص",
        period: "حسب الحجم",
        includes: ["فريق مخصص", "إنتاج أسبوعي", "عدة مبدعين", "لوحة متابعة للنتائج"],
        tech: "منصة أو تطبيق مخصص (حجز، عضويات، لوحة تحكم)",
      },
    ],
    individuals: [
      {
        name: "استشارة البداية",
        who: "من أين أبدأ؟",
        price: "250",
        period: "جلسة 45 دقيقة",
        includes: ["تشخيص حضورك الرقمي", "خطة من 3 خطوات", "تُخصم من أي باقة لاحقة"],
        tech: "تدقيق سريع لموقعك أو صفحاتك",
      },
      {
        name: "فيديو واحد",
        who: "سيرة مرئية، تقديم مشروع، منتج",
        price: "من 800",
        period: "للجلسة",
        includes: ["جلسة تصوير ساعتين", "مونتاج احترافي", "نسختان: عمودية وأفقية"],
        tech: "صفحة واحدة لعرض الفيديو مع زر تواصل",
      },
      {
        name: "موقع شخصي",
        who: "طبيب، محامٍ، حرفي، مستقل",
        price: "من 2,500",
        period: "دفعة واحدة",
        featured: true,
        includes: ["ظهور في خرائط غوغل", "سنة استضافة ونطاق", "جلسة تصوير صور احترافية"],
        tech: "موقع تعريفي بثلاث لغات + زر حجز عبر واتساب",
      },
      {
        name: "كوتشينغ الظهور",
        who: "علامة شخصية، مؤثر ناشئ",
        price: "من 1,500",
        period: "4 جلسات",
        includes: ["التحدث بثقة أمام الكاميرا", "تصوير نفسك بهاتفك", "خطة محتوى شهرية"],
        tech: "صفحة روابط شخصية (Link in bio) باسمك",
      },
    ],
    single: [
      { name: "موقع تعريفي", who: "محل، عيادة، مكتب، مهنة حرة", price: "من 3,000", period: "دفعة واحدة", includes: ["حتى 5 صفحات، 3 لغات", "مهيأ لغوغل والهاتف", "نموذج تواصل وواتساب"] },
      { name: "متجر إلكتروني", who: "بيع المنتجات أونلاين", price: "من 7,000", period: "دفعة واحدة", includes: ["كتالوج وسلة ودفع", "ربط التوصيل", "تدريب على الإدارة"] },
      { name: "تطبيق ويب أو هاتف", who: "حجز، طلبات، عضويات", price: "من 15,000", period: "حسب المشروع", includes: ["تصميم وتطوير كامل", "لوحة تحكم", "نشر على المتاجر"] },
      { name: "صفحة هبوط", who: "عرض، حملة، إطلاق", price: "من 1,500", period: "دفعة واحدة", includes: ["صفحة واحدة سريعة", "مربوطة بإعلاناتك", "قياس التحويلات"] },
      { name: "أتمتة واتساب", who: "ردود، حجوزات، متابعة", price: "من 2,500", period: "دفعة واحدة", includes: ["ردود تلقائية", "تأكيد وتذكير", "ربط بقاعدة بيانات"] },
      { name: "استضافة وصيانة", who: "أي موقع أو متجر", price: "300", period: "شهرياً", includes: ["نطاق واستضافة", "نسخ احتياطي وتحديثات", "تعديلات صغيرة شهرية"] },
      { name: "فيديو إعلاني", who: "منتج، مكان، عرض", price: "من 2,000", period: "للفيديو", includes: ["تصوير سينمائي", "مونتاج للخوارزميات", "نسختان"] },
      { name: "ظهور مبدع", who: "فيديو واحد مع وجه معروف", price: "من 1,000", period: "للفيديو", includes: ["اختيار المبدع المناسب", "سيناريو وتصوير", "نشر على صفحته"] },
      { name: "إدارة إعلانات", who: "فيسبوك، إنستغرام، تيك توك", price: "من 1,500", period: "شهرياً + الميزانية", includes: ["إعداد واستهداف", "تحسين يومي", "تقرير شهري"] },
      { name: "تصوير منتجات", who: "مطاعم، متاجر، حرفيون", price: "من 1,200", period: "للجلسة", includes: ["حتى 20 منتجاً", "معالجة الصور", "جاهزة للمتجر"] },
      { name: "هوية بصرية", who: "شعار وألوان وقوالب", price: "من 2,500", period: "دفعة واحدة", includes: ["شعار بثلاث صيغ", "دليل ألوان وخطوط", "قوالب منشورات"] },
      { name: "تدريب تقني", who: "فريقك يدير أدواته بنفسه", price: "من 800", period: "للجلسة", includes: ["إدارة الموقع أو المتجر", "الرد عبر الأتمتة", "قراءة التقارير"] },
    ],
    cta: "اطلب هذه الباقة",
  },
  process: {
    heading: "كيف نعمل",
    steps: [
      { title: "مكالمة تشخيص", text: "نفهم مشروعك وجمهورك وهدفك خلال 20 دقيقة. مجاناً." },
      { title: "سيناريو ومبدع", text: "نقترح فكرة الفيديو والوجه الأنسب، وتوافق قبل أن نصوّر." },
      { title: "تصوير ومونتاج", text: "يوم تصوير في مكانك، والفيديو جاهز خلال 48 ساعة." },
      { title: "نشر وإعلان", text: "ننشر عبر الشبكة ونطلق الحملة الممولة ونراقبها يومياً." },
      { title: "تقرير وتحسين", text: "أرقام واضحة: مشاهدات، رسائل، زيارات. ثم نكرر ما نجح." },
    ],
  },
  work: {
    heading: "نتائج من الجهة الشرقية",
    intro: "أول خمسة عملاء يحصلون على سعر الإطلاق مقابل نشر أرقامهم هنا. كن واحداً منهم.",
    items: [
      { client: "مطعم — وجدة", sector: "مطاعم", result: "84K مشاهدة", detail: "فيديو افتتاح واحد، 130 رسالة حجز في 72 ساعة." },
      { client: "عيادة — وجدة", sector: "صحة وتجميل", result: "121K مشاهدة", detail: "سلسلة من 3 فيديوهات، امتلأت مواعيد الشهر." },
      { client: "معرض أثاث — بركان", sector: "تجزئة", result: "67K مشاهدة", detail: "تصوير منتجات + حملة ممولة، 40 زيارة للمعرض." },
    ],
  },
  contact: {
    heading: "لنتحدث عن مشروعك",
    intro: "اترك معلوماتك ونتصل بك خلال 24 ساعة، أو راسلنا مباشرة على واتساب.",
    whatsapp: "واتساب مباشر",
    form: {
      name: "الاسم",
      phone: "الهاتف",
      business: "اسم المشروع أو المحل",
      need: "ما الذي تحتاجه؟",
      message: "أخبرنا أكثر (اختياري)",
      needs: ["فيديو إعلاني", "باقة شهرية", "موقع أو متجر", "تطبيق أو أتمتة", "ظهور مبدع", "لست متأكداً بعد"],
      submit: "أرسل الطلب",
      sending: "جارٍ الإرسال…",
      sent: "وصلنا طلبك. سنتصل بك خلال 24 ساعة.",
      error: "تعذر الإرسال. جرّب واتساب مباشرة.",
    },
    location: "وجدة، الجهة الشرقية، المغرب",
  },
  footer: {
    tagline: "وكالة إنتاج وتسويق رقمي وتقنية من الجهة الشرقية.",
    rights: "جميع الحقوق محفوظة.",
  },
};

/* ───────────────────────── الدارجة المغربية ───────────────────────── */
const ary: Dict = {
  meta: {
    title: "OROM UGG — وكالة ديال الإنتاج والتسويق الرقمي والتقنية فالجهة الشرقية",
    description:
      "تصوير سينمائي، شبكة ديال المبدعين المحليين، إعلانات ممولة، ومواقع ومتاجر وتطبيقات. كنحوّلو محلك ولا مشروعك لعلامة كيعرفوها الناس فوجدة والجهة الشرقية.",
  },
  nav: { services: "الخدمات", tech: "المواقع والتقنية", creators: "المبدعين", packages: "العروض", work: "النتائج", contact: "تواصل معانا", cta: "طلب عرض" },
  hero: {
    kicker: "وكالة ديال الإنتاج والتسويق الرقمي والتقنية · وجدة والجهة الشرقية",
    title: ["دورنا نطلّعو بخدمتك", "لمستوى أعلى."],
    tagline: "ربحك نتا، ربحنا حنا.",
    text:
      "من أول لقطة حتى لأول كليان كيدخل من الباب: فريق واحد كيصوّر ليك المحتوى بجودة سينمائية، كينشرو عبر شبكة ديال المبدعين كيتبعوهم كثر من 100 ألف واحد فالجهة الشرقية، كيدير ليك الإعلانات، وكيبني ليك الموقع والمتجر والتطبيق حتى يتحوّلو المشاهدات لمبيعات.",
    primary: "حجز مكالمة فابور",
    secondary: "شوف العروض",
    reels: [
      { label: "افتتاح ريسطو", views: "84K" },
      { label: "كلينيك ديال التجميل", views: "121K" },
      { label: "معرض ديال الموبيليا", views: "67K" },
      { label: "گاراج ديال الطوموبيلات", views: "95K" },
    ],
  },
  proof: [
    { value: "+100K", label: "متابع محلي كتوصل ليهم الشبكة ديالنا" },
    { value: "48h", label: "من التصوير للنشر" },
    { value: "4", label: "ركائز ففريق واحد: إنتاج، مبدعين، إعلانات، تقنية" },
    { value: "100%", label: "من الجهة الشرقية، للجهة الشرقية" },
  ],
  services: {
    heading: "ربع خدمات، نتيجة وحدة: كليان كثر",
    intro: "ما كنبيعوش فيديوهات ولا بوسطات ولا صفحات. كنبيعو اللي كيوقع من بعد.",
    items: [
      {
        title: "إنتاج سينمائي",
        text: "تصوير بكاميرات احترافية، إضاءة، صوت نقي، ومونطاج مبني على اللي كتبغيه الخوارزميات ماشي غير على الذوق.",
        points: ["ريلز وتيك توك", "تصوير المنتوجات والبلايص", "الافتتاحات والمناسبات"],
      },
      {
        title: "شبكة المبدعين",
        text: "وجوه محلية كيعرفوها الناس وكيتيقو فيها. كتختار المبدع اللي كيناسب الجمهور ديالك، وحنا كنتكلفو بالسيناريو والتصوير والنشر.",
        points: ["ظهور فصفحات كيتبعوها عشرات الآلاف", "تنسيق كامل من الفكرة حتى للنشر", "تقرير ديال الوصول من بعد كل حملة"],
      },
      {
        title: "إعلانات ممولة",
        text: "حملات على فيسبوك وإنستغرام وتيك توك كتستهدف مدينتك وحيّك بالضبط، مع تحسين كل نهار باش ينقص ثمن كل كليان.",
        points: ["استهداف جغرافي دقيق", "تجريب بزاف ديال النسخ ديال الإعلان", "تقرير شهري بالأرقام"],
      },
      {
        title: "مواقع، متاجر وتطبيقات",
        text: "موقع سريع كيبان فگوگل، متجر إلكتروني، تطبيق ديال الحجز ولا الطلب، وأتمتة كتربط واتساب بالنظام ديالك. هاد الموقع اللي كتقرا فيه دابا مثال على اللي كنبنيو.",
        points: ["مواقع تعريفية ومتاجر إلكترونية", "تطبيقات ويب وتيليفون", "أتمتة واتساب ولوحات تحكم"],
      },
    ],
  },
  tech: {
    heading: "التقنية ماشي خدمة زايدة، هي نص الخدمة ديالنا",
    intro:
      "كنبنيو الأدوات الرقمية اللي كتخلي التسويق يجيب نتيجة: موقع كيبان فگوگل، متجر كيبيع بالليل، تطبيق كيحجز بلاصتك، وأتمتة كتجاوب الكليان ديالك فثواني. كل عرض عندنا فيه جزء تقني، وكل خدمة تقدر تطلبها بوحدها.",
    items: [
      { title: "مواقع تعريفية", text: "صفحات سريعة بثلاث لغات، مهيأة لمحركات البحث، كتحل فأقل من ثانية فالتيليفون." },
      { title: "متاجر إلكترونية", text: "كاتالوغ، سلة، خلاص عند التوصيل ولا بالكارط، وربط مع التوصيل. كتبيع ونتا ناعس." },
      { title: "تطبيقات ويب وتيليفون", text: "حجز المواعيد، الطلبات، برامج الوفاء، ولا أي فكرة محتاجة تطبيق خاص بالمشروع ديالك." },
      { title: "أتمتة واتساب والذكاء الاصطناعي", text: "ردود أوتوماتيكية، تأكيد الحجوزات، تذكير بالمواعيد، ومتابعة الكليان بلا تدخل يدوي." },
      { title: "لوحات تحكم وتقارير", text: "الأرقام ديالك كاملين فشاشة وحدة: مبيعات، ميساجات، نتائج الحملات، محدّثة فالوقت." },
      { title: "استضافة وصيانة وأمان", text: "نطاق، استضافة سريعة، نسخ احتياطية، تحديثات شهرية. الموقع ديالك ما كيوقفش." },
    ],
    proof: "هاد الموقع مبني بنفس الأدوات اللي كنبنيو بيها مواقع الكليان ديالنا: Next.js وSupabase وVercel. ربع لغات، فورم مربوط بقاعدة البيانات، وسرعة كاملة فالتيليفون.",
    cta: "هضر معانا على المشروع التقني ديالك",
  },
  creators: {
    heading: "ختار الوجه اللي كيناسب الجمهور ديالك",
    intro:
      "شبكة ديال المبدعين المحليين فوجدة وبركان والناظور، كل واحد فيهم عندو جمهور حقيقي فالمجال ديالو. نتا كتختار، وحنا كنصوّرو وكننشرو وكنقيسو.",
    note: "الأرقام تقريبية وكتتحدث كل شهر.",
    join: "صانع محتوى؟ دخل معانا فالشبكة",
    joinText: "كنخلصوك على كل فيديو إعلاني، وكنتكلفو بالتصوير والمونطاج. نتا غير كتبان وكتهضر.",
    people: [
      { name: "مريم", niche: "لايف ستايل وريسطوهات", city: "وجدة", reach: "100K+" },
      { name: "مبدع 2", niche: "طوموبيلات وتكنولوجيا", city: "وجدة", reach: "قريباً" },
      { name: "مبدعة 3", niche: "جمال وموضة", city: "بركان", reach: "قريباً" },
      { name: "مبدع 4", niche: "رياضة وصحة", city: "الناظور", reach: "قريباً" },
    ],
  },
  packages: {
    heading: "عروض واضحة، بلا مفاجآت",
    intro: "ختار اللي كيناسب حجم المشروع ديالك اليوم. تقدر تبدل العرض فأي وقت.",
    techNote: "كل عرض فيه جزء تقني (موقع، صفحة ولا تطبيق). وأي خدمة تقدر تطلبها بوحدها من تبويب «خدمات بوحدها».",
    techLabel: "الجزء التقني",
    tabs: { business: "محلات وشركات", individuals: "أفراد ومهن حرة", single: "خدمات بوحدها" },
    currency: "درهم",
    business: [
      {
        name: "الإعلان السريع",
        who: "افتتاح، عرض موسمي، مناسبة",
        price: "من 3,500",
        period: "مرة وحدة",
        includes: ["فيديو سينمائي 30–60 ثانية", "ظهور مبدع من الشبكة", "نشر فالصفحة ديالو والصفحة ديالك", "تقرير ديال الوصول"],
        tech: "صفحة هبوط ديال العرض مع بوطونة واتساب",
      },
      {
        name: "الشهرية الكاملة",
        who: "ريسطوهات، محلات، كلينيكات",
        price: "من 7,500",
        period: "كل شهر",
        featured: true,
        includes: ["4 فيديوهات فالشهر", "تسيير الصفحات والرد على الميساجات", "إعلانات ممولة مسيّرة (الميزانية ديال الإعلان منفصلة)", "ظهور مبدع جوج مرات فالشهر", "تقرير شهري بالأرقام"],
        tech: "موقع تعريفي + استضافة وصيانة داخلين",
      },
      {
        name: "التحول الرقمي",
        who: "مشروع جديد ولا انتقال أونلاين",
        price: "من 15,000",
        period: "دفعة وحدة",
        includes: ["هوية بصرية للصفحات", "جلسة تصوير ديال الإطلاق", "حملة إطلاق ديال شهر", "تكوين على تسيير المتجر"],
        tech: "موقع ولا متجر إلكتروني + أتمتة واتساب ديال الطلبات",
      },
      {
        name: "المؤسسات والفنادق",
        who: "عقود سنوية وحجم كبر",
        price: "عرض خاص",
        period: "على حساب الحجم",
        includes: ["فريق مخصص", "إنتاج أسبوعي", "بزاف ديال المبدعين", "لوحة متابعة ديال النتائج"],
        tech: "منصة ولا تطبيق خاص (حجز، اشتراكات، لوحة تحكم)",
      },
    ],
    individuals: [
      {
        name: "استشارة البداية",
        who: "منين نبدا؟",
        price: "250",
        period: "جلسة 45 دقيقة",
        includes: ["تشخيص الحضور الرقمي ديالك", "خطة ب3 خطوات", "كتتخصم من أي عرض من بعد"],
        tech: "تدقيق سريع للموقع ولا الصفحات ديالك",
      },
      {
        name: "فيديو واحد",
        who: "CV فيديو، تقديم مشروع، منتوج",
        price: "من 800",
        period: "للجلسة",
        includes: ["جلسة تصوير ديال ساعتين", "مونطاج احترافي", "جوج نسخ: عمودية وأفقية"],
        tech: "صفحة وحدة باش تعرض الفيديو مع بوطونة ديال التواصل",
      },
      {
        name: "موقع شخصي",
        who: "طبيب، محامي، حرفي، فريلانسر",
        price: "من 2,500",
        period: "دفعة وحدة",
        featured: true,
        includes: ["ظهور فخرائط گوگل", "عام ديال الاستضافة والنطاق", "جلسة تصوير صور احترافية"],
        tech: "موقع تعريفي بثلاث لغات + بوطونة ديال الحجز عبر واتساب",
      },
      {
        name: "كوتشينغ الظهور",
        who: "علامة شخصية، مؤثر جديد",
        price: "من 1,500",
        period: "4 جلسات",
        includes: ["تهضر بثقة قدام الكاميرا", "تصوّر راسك بالتيليفون ديالك", "خطة محتوى شهرية"],
        tech: "صفحة ديال الروابط الشخصية (Link in bio) بسميتك",
      },
    ],
    single: [
      { name: "موقع تعريفي", who: "محل، كلينيك، مكتب، مهنة حرة", price: "من 3,000", period: "دفعة وحدة", includes: ["حتى 5 صفحات، 3 لغات", "مهيأ لگوگل والتيليفون", "فورم ديال التواصل وواتساب"] },
      { name: "متجر إلكتروني", who: "بيع المنتوجات أونلاين", price: "من 7,000", period: "دفعة وحدة", includes: ["كاتالوغ وسلة وخلاص", "ربط التوصيل", "تكوين على التسيير"] },
      { name: "تطبيق ويب ولا تيليفون", who: "حجز، طلبات، اشتراكات", price: "من 15,000", period: "على حساب المشروع", includes: ["تصميم وتطوير كامل", "لوحة تحكم", "نشر فالستورات"] },
      { name: "صفحة هبوط", who: "عرض، حملة، إطلاق", price: "من 1,500", period: "دفعة وحدة", includes: ["صفحة وحدة سريعة", "مربوطة بالإعلانات ديالك", "قياس التحويلات"] },
      { name: "أتمتة واتساب", who: "ردود، حجوزات، متابعة", price: "من 2,500", period: "دفعة وحدة", includes: ["ردود أوتوماتيكية", "تأكيد وتذكير", "ربط بقاعدة البيانات"] },
      { name: "استضافة وصيانة", who: "أي موقع ولا متجر", price: "300", period: "كل شهر", includes: ["نطاق واستضافة", "نسخ احتياطية وتحديثات", "تعديلات صغيرة كل شهر"] },
      { name: "فيديو إعلاني", who: "منتوج، بلاصة، عرض", price: "من 2,000", period: "للفيديو", includes: ["تصوير سينمائي", "مونطاج للخوارزميات", "جوج نسخ"] },
      { name: "ظهور مبدع", who: "فيديو واحد مع وجه معروف", price: "من 1,000", period: "للفيديو", includes: ["اختيار المبدع المناسب", "سيناريو وتصوير", "نشر فالصفحة ديالو"] },
      { name: "تسيير الإعلانات", who: "فيسبوك، إنستغرام، تيك توك", price: "من 1,500", period: "كل شهر + الميزانية", includes: ["إعداد واستهداف", "تحسين كل نهار", "تقرير شهري"] },
      { name: "تصوير المنتوجات", who: "ريسطوهات، متاجر، حرفيين", price: "من 1,200", period: "للجلسة", includes: ["حتى 20 منتوج", "معالجة الصور", "واجدين للمتجر"] },
      { name: "هوية بصرية", who: "لوگو وألوان وقوالب", price: "من 2,500", period: "دفعة وحدة", includes: ["لوگو بثلاث صيغ", "دليل الألوان والخطوط", "قوالب ديال البوسطات"] },
      { name: "تكوين تقني", who: "الفريق ديالك كيسيّر الأدوات ديالو", price: "من 800", period: "للجلسة", includes: ["تسيير الموقع ولا المتجر", "الرد عبر الأتمتة", "قراية التقارير"] },
    ],
    cta: "طلب هاد العرض",
  },
  process: {
    heading: "كيفاش كنخدمو",
    steps: [
      { title: "مكالمة تشخيص", text: "كنفهمو المشروع ديالك والجمهور والهدف ف20 دقيقة. فابور." },
      { title: "سيناريو ومبدع", text: "كنقترحو فكرة الفيديو والوجه المناسب، وكتوافق قبل ما نصوّرو." },
      { title: "تصوير ومونطاج", text: "نهار تصوير عندك فالبلاصة، والفيديو واجد ف48 ساعة." },
      { title: "نشر وإعلان", text: "كننشرو عبر الشبكة وكنطلقو الحملة الممولة وكنراقبوها كل نهار." },
      { title: "تقرير وتحسين", text: "أرقام واضحة: مشاهدات، ميساجات، زيارات. ومن بعد كنعاودو اللي نجح." },
    ],
  },
  work: {
    heading: "نتائج من الجهة الشرقية",
    intro: "أول خمسة ديال الكليان كياخدو ثمن الإطلاق مقابل نشر الأرقام ديالهم هنا. كون واحد منهم.",
    items: [
      { client: "ريسطو — وجدة", sector: "ريسطوهات", result: "84K مشاهدة", detail: "فيديو واحد ديال الافتتاح، 130 ميساج ديال الحجز ف72 ساعة." },
      { client: "كلينيك — وجدة", sector: "صحة وتجميل", result: "121K مشاهدة", detail: "سلسلة ديال 3 فيديوهات، تعمّرو مواعيد الشهر." },
      { client: "معرض موبيليا — بركان", sector: "تجارة", result: "67K مشاهدة", detail: "تصوير المنتوجات + حملة ممولة، 40 زيارة للمعرض." },
    ],
  },
  contact: {
    heading: "نهضرو على المشروع ديالك",
    intro: "خلي المعلومات ديالك وغنعيطو ليك ف24 ساعة، ولا صيفط لينا مباشرة فواتساب.",
    whatsapp: "واتساب مباشر",
    form: {
      name: "السمية",
      phone: "التيليفون",
      business: "سمية المشروع ولا المحل",
      need: "آش محتاج؟",
      message: "قول لينا كثر (اختياري)",
      needs: ["فيديو إعلاني", "عرض شهري", "موقع ولا متجر", "تطبيق ولا أتمتة", "ظهور مبدع", "مازال ما متأكدش"],
      submit: "صيفط الطلب",
      sending: "كيتصيفط…",
      sent: "وصلنا الطلب ديالك. غنعيطو ليك ف24 ساعة.",
      error: "ما قدرناش نصيفطو. جرب واتساب مباشرة.",
    },
    location: "وجدة، الجهة الشرقية، المغرب",
  },
  footer: {
    tagline: "وكالة ديال الإنتاج والتسويق الرقمي والتقنية من الجهة الشرقية.",
    rights: "جميع الحقوق محفوظة.",
  },
};

/* ───────────────────────── Français ───────────────────────── */
const fr: Dict = {
  meta: {
    title: "OROM UGG — Agence de production, marketing digital et tech à l'Oriental",
    description:
      "Vidéo cinématographique, réseau de créateurs locaux, publicité payante, sites, boutiques et applications. Nous transformons votre commerce en marque connue à Oujda et dans l'Oriental.",
  },
  nav: { services: "Services", tech: "Sites & tech", creators: "Créateurs", packages: "Offres", work: "Réalisations", contact: "Contact", cta: "Demander un devis" },
  hero: {
    kicker: "Agence de production, marketing digital & tech · Oujda et l'Oriental",
    title: ["Notre rôle : faire décoller", "votre business."],
    tagline: "Votre gain, c'est le nôtre.",
    text:
      "De la première prise au premier client qui passe la porte : une seule équipe filme votre contenu en qualité cinéma, le diffuse via un réseau de créateurs suivis par plus de 100 000 personnes dans l'Oriental, pilote vos publicités, et construit votre site, votre boutique et votre application jusqu'à ce que les vues deviennent des ventes.",
    primary: "Réserver un appel gratuit",
    secondary: "Voir les offres",
    reels: [
      { label: "Ouverture restaurant", views: "84K" },
      { label: "Clinique esthétique", views: "121K" },
      { label: "Showroom meubles", views: "67K" },
      { label: "Garage auto", views: "95K" },
    ],
  },
  proof: [
    { value: "+100K", label: "abonnés locaux atteints par notre réseau" },
    { value: "48h", label: "du tournage à la publication" },
    { value: "4", label: "piliers dans une équipe : production, créateurs, publicité, tech" },
    { value: "100%", label: "de l'Oriental, pour l'Oriental" },
  ],
  services: {
    heading: "Quatre services, un seul résultat : plus de clients",
    intro: "Nous ne vendons ni vidéos, ni posts, ni pages. Nous vendons ce qui se passe après.",
    items: [
      {
        title: "Production cinéma",
        text: "Caméras pro, lumière, son propre et un montage construit pour les algorithmes, pas seulement pour le goût.",
        points: ["Reels et TikTok", "Produits et lieux", "Ouvertures et événements"],
      },
      {
        title: "Réseau de créateurs",
        text: "Des visages locaux que les gens connaissent et croient. Vous choisissez le créateur adapté à votre public ; nous gérons script, tournage et diffusion.",
        points: ["Présence sur des pages suivies par des dizaines de milliers", "Coordination complète de l'idée à la publication", "Rapport de portée après chaque campagne"],
      },
      {
        title: "Publicité payante",
        text: "Campagnes Facebook, Instagram et TikTok ciblant précisément votre ville et votre quartier, optimisées chaque jour pour faire baisser le coût par client.",
        points: ["Ciblage géographique précis", "Tests de plusieurs versions", "Rapport mensuel chiffré"],
      },
      {
        title: "Sites, boutiques & applications",
        text: "Un site rapide visible sur Google, une boutique en ligne, une application de réservation ou de commande, et des automatisations qui relient WhatsApp à votre système. Le site que vous lisez est un exemple de ce que nous construisons.",
        points: ["Sites vitrine et boutiques en ligne", "Applications web et mobile", "Automatisation WhatsApp et tableaux de bord"],
      },
    ],
  },
  tech: {
    heading: "La tech n'est pas une option : c'est la moitié de notre métier",
    intro:
      "Nous construisons les outils qui font fructifier le marketing : un site visible sur Google, une boutique qui vend la nuit, une application qui réserve à votre place, une automatisation qui répond à vos clients en quelques secondes. Chaque offre inclut une part technique, et chaque service se commande aussi seul.",
    items: [
      { title: "Sites vitrine", text: "Pages rapides en trois langues, optimisées pour les moteurs de recherche, chargées en moins d'une seconde sur mobile." },
      { title: "Boutiques en ligne", text: "Catalogue, panier, paiement à la livraison ou par carte, liaison avec la livraison. Vous vendez en dormant." },
      { title: "Applications web & mobile", text: "Prise de rendez-vous, commandes, programmes de fidélité, ou toute idée qui mérite une application à votre nom." },
      { title: "Automatisation WhatsApp & IA", text: "Réponses automatiques, confirmation de réservations, rappels de rendez-vous, suivi des clients sans intervention manuelle." },
      { title: "Tableaux de bord & rapports", text: "Tous vos chiffres sur un seul écran : ventes, messages, résultats de campagnes, mis à jour en temps réel." },
      { title: "Hébergement, maintenance & sécurité", text: "Domaine, hébergement rapide, sauvegardes, mises à jour mensuelles. Votre site ne s'arrête jamais." },
    ],
    proof: "Ce site est construit avec les mêmes outils que ceux de nos clients : Next.js, Supabase, Vercel. Quatre langues, un formulaire relié à une base de données, et une vitesse totale sur mobile.",
    cta: "Parler de votre projet tech",
  },
  creators: {
    heading: "Choisissez le visage qui parle à votre public",
    intro:
      "Un réseau de créateurs locaux à Oujda, Berkane et Nador, chacun avec une vraie audience dans son domaine. Vous choisissez ; nous filmons, diffusons et mesurons.",
    note: "Chiffres indicatifs, mis à jour chaque mois.",
    join: "Créateur de contenu ? Rejoignez le réseau",
    joinText: "Nous vous payons pour chaque vidéo publicitaire et gérons tournage et montage. Vous n'avez qu'à apparaître et parler.",
    people: [
      { name: "Meryem", niche: "Lifestyle & restaurants", city: "Oujda", reach: "100K+" },
      { name: "Créateur 2", niche: "Auto & tech", city: "Oujda", reach: "Bientôt" },
      { name: "Créatrice 3", niche: "Beauté & mode", city: "Berkane", reach: "Bientôt" },
      { name: "Créateur 4", niche: "Sport & santé", city: "Nador", reach: "Bientôt" },
    ],
  },
  packages: {
    heading: "Des offres claires, sans surprise",
    intro: "Choisissez selon la taille de votre projet aujourd'hui. Vous pouvez changer d'offre à tout moment.",
    techNote: "Chaque offre inclut une part technique (site, page ou application). Tout service peut aussi être commandé seul dans l'onglet « Services à l'unité ».",
    techLabel: "Part technique",
    tabs: { business: "Commerces & entreprises", individuals: "Particuliers & indépendants", single: "Services à l'unité" },
    currency: "MAD",
    business: [
      { name: "Pub express", who: "Ouverture, promo, événement", price: "dès 3 500", period: "une fois", includes: ["Vidéo cinéma 30–60 s", "Un créateur du réseau", "Diffusion sur sa page et la vôtre", "Rapport de portée"], tech: "Page d'atterrissage de l'offre avec bouton WhatsApp" },
      { name: "Mensuelle complète", who: "Restaurants, commerces, cliniques", price: "dès 7 500", period: "par mois", featured: true, includes: ["4 vidéos par mois", "Gestion des pages et des messages", "Publicité gérée (budget média séparé)", "Créateur deux fois par mois", "Rapport mensuel chiffré"], tech: "Site vitrine + hébergement et maintenance inclus" },
      { name: "Transformation digitale", who: "Nouveau projet ou passage en ligne", price: "dès 15 000", period: "une fois", includes: ["Identité visuelle des pages", "Tournage de lancement", "Campagne de lancement d'un mois", "Formation à la gestion de la boutique"], tech: "Site ou boutique en ligne + automatisation WhatsApp des commandes" },
      { name: "Institutions & hôtels", who: "Contrats annuels, gros volumes", price: "Sur devis", period: "selon le volume", includes: ["Équipe dédiée", "Production hebdomadaire", "Plusieurs créateurs", "Tableau de bord des résultats"], tech: "Plateforme ou application sur mesure (réservation, abonnements, tableau de bord)" },
    ],
    individuals: [
      { name: "Consultation de départ", who: "Par où commencer ?", price: "250", period: "séance de 45 min", includes: ["Diagnostic de votre présence en ligne", "Plan en 3 étapes", "Déduite de toute offre ultérieure"], tech: "Audit rapide de votre site ou de vos pages" },
      { name: "Une vidéo", who: "CV vidéo, présentation, produit", price: "dès 800", period: "la séance", includes: ["Tournage de deux heures", "Montage professionnel", "Deux formats : vertical et horizontal"], tech: "Une page pour présenter la vidéo avec bouton de contact" },
      { name: "Site personnel", who: "Médecin, avocat, artisan, freelance", price: "dès 2 500", period: "une fois", featured: true, includes: ["Présence sur Google Maps", "Un an d'hébergement et de domaine", "Séance photo professionnelle"], tech: "Site vitrine en trois langues + bouton de réservation WhatsApp" },
      { name: "Coaching caméra", who: "Marque personnelle, créateur débutant", price: "dès 1 500", period: "4 séances", includes: ["Parler avec assurance face caméra", "Se filmer avec son téléphone", "Plan de contenu mensuel"], tech: "Page de liens personnelle (link in bio) à votre nom" },
    ],
    single: [
      { name: "Site vitrine", who: "Commerce, clinique, cabinet, indépendant", price: "dès 3 000", period: "une fois", includes: ["Jusqu'à 5 pages, 3 langues", "Optimisé Google et mobile", "Formulaire de contact et WhatsApp"] },
      { name: "Boutique en ligne", who: "Vendre des produits en ligne", price: "dès 7 000", period: "une fois", includes: ["Catalogue, panier, paiement", "Liaison livraison", "Formation à la gestion"] },
      { name: "Application web ou mobile", who: "Réservation, commandes, abonnements", price: "dès 15 000", period: "selon le projet", includes: ["Conception et développement complets", "Tableau de bord", "Publication sur les stores"] },
      { name: "Page d'atterrissage", who: "Offre, campagne, lancement", price: "dès 1 500", period: "une fois", includes: ["Une page rapide", "Reliée à vos publicités", "Mesure des conversions"] },
      { name: "Automatisation WhatsApp", who: "Réponses, réservations, suivi", price: "dès 2 500", period: "une fois", includes: ["Réponses automatiques", "Confirmation et rappels", "Liaison base de données"] },
      { name: "Hébergement & maintenance", who: "Tout site ou boutique", price: "300", period: "par mois", includes: ["Domaine et hébergement", "Sauvegardes et mises à jour", "Petites modifications mensuelles"] },
      { name: "Vidéo publicitaire", who: "Produit, lieu, offre", price: "dès 2 000", period: "la vidéo", includes: ["Tournage cinéma", "Montage pour les algorithmes", "Deux formats"] },
      { name: "Créateur", who: "Une vidéo avec un visage connu", price: "dès 1 000", period: "la vidéo", includes: ["Choix du créateur adapté", "Script et tournage", "Diffusion sur sa page"] },
      { name: "Gestion publicitaire", who: "Facebook, Instagram, TikTok", price: "dès 1 500", period: "par mois + budget", includes: ["Paramétrage et ciblage", "Optimisation quotidienne", "Rapport mensuel"] },
      { name: "Photos produits", who: "Restaurants, boutiques, artisans", price: "dès 1 200", period: "la séance", includes: ["Jusqu'à 20 produits", "Retouche", "Prêtes pour la boutique"] },
      { name: "Identité visuelle", who: "Logo, couleurs, gabarits", price: "dès 2 500", period: "une fois", includes: ["Logo en trois versions", "Guide couleurs et typographies", "Gabarits de publications"] },
      { name: "Formation tech", who: "Votre équipe gère ses outils", price: "dès 800", period: "la séance", includes: ["Gestion du site ou de la boutique", "Réponses via l'automatisation", "Lecture des rapports"] },
    ],
    cta: "Demander cette offre",
  },
  process: {
    heading: "Comment nous travaillons",
    steps: [
      { title: "Appel de diagnostic", text: "Votre projet, votre public, votre objectif, en 20 minutes. Gratuit." },
      { title: "Script et créateur", text: "Nous proposons l'idée et le visage adapté ; vous validez avant le tournage." },
      { title: "Tournage et montage", text: "Une journée chez vous, vidéo livrée sous 48 heures." },
      { title: "Diffusion et publicité", text: "Publication via le réseau, lancement de la campagne, suivi quotidien." },
      { title: "Rapport et optimisation", text: "Des chiffres clairs : vues, messages, visites. Puis on répète ce qui marche." },
    ],
  },
  work: {
    heading: "Des résultats dans l'Oriental",
    intro: "Les cinq premiers clients bénéficient du tarif de lancement en échange de la publication de leurs chiffres ici. Soyez l'un d'eux.",
    items: [
      { client: "Restaurant — Oujda", sector: "Restauration", result: "84K vues", detail: "Une vidéo d'ouverture, 130 messages de réservation en 72 h." },
      { client: "Clinique — Oujda", sector: "Santé & beauté", result: "121K vues", detail: "Série de 3 vidéos, agenda du mois complet." },
      { client: "Showroom meubles — Berkane", sector: "Commerce", result: "67K vues", detail: "Photos produits + campagne payante, 40 visites en magasin." },
    ],
  },
  contact: {
    heading: "Parlons de votre projet",
    intro: "Laissez vos coordonnées, nous vous rappelons sous 24 h. Ou écrivez-nous directement sur WhatsApp.",
    whatsapp: "WhatsApp direct",
    form: {
      name: "Nom",
      phone: "Téléphone",
      business: "Nom du projet ou du commerce",
      need: "De quoi avez-vous besoin ?",
      message: "Dites-nous en plus (facultatif)",
      needs: ["Une vidéo publicitaire", "Une offre mensuelle", "Un site ou une boutique", "Une application ou une automatisation", "Un créateur", "Je ne sais pas encore"],
      submit: "Envoyer la demande",
      sending: "Envoi…",
      sent: "Demande reçue. Nous vous rappelons sous 24 h.",
      error: "Envoi impossible. Essayez WhatsApp.",
    },
    location: "Oujda, Oriental, Maroc",
  },
  footer: {
    tagline: "Agence de production, marketing digital et tech, née dans l'Oriental.",
    rights: "Tous droits réservés.",
  },
};

/* ───────────────────────── English ───────────────────────── */
const en: Dict = {
  meta: {
    title: "OROM UGG — Production, digital marketing & tech agency, Eastern Morocco",
    description:
      "Cinematic video, a network of local creators, paid ads, websites, stores and apps. We turn your shop or project into a brand people know in Oujda and the Oriental region.",
  },
  nav: { services: "Services", tech: "Web & tech", creators: "Creators", packages: "Packages", work: "Work", contact: "Contact", cta: "Get a quote" },
  hero: {
    kicker: "Production, digital marketing & tech agency · Oujda and the Oriental",
    title: ["Our role: taking your business", "to the next level."],
    tagline: "Your win is our win.",
    text:
      "From the first frame to the first customer through the door: one team films your content at cinema quality, publishes it through a creator network followed by 100,000+ people in the Oriental, runs your ads, and builds your website, store and app until views become sales.",
    primary: "Book a free call",
    secondary: "See packages",
    reels: [
      { label: "Restaurant opening", views: "84K" },
      { label: "Aesthetic clinic", views: "121K" },
      { label: "Furniture showroom", views: "67K" },
      { label: "Car garage", views: "95K" },
    ],
  },
  proof: [
    { value: "+100K", label: "local followers reached by our network" },
    { value: "48h", label: "from shoot to publish" },
    { value: "4", label: "pillars in one team: production, creators, ads, tech" },
    { value: "100%", label: "from the Oriental, for the Oriental" },
  ],
  services: {
    heading: "Four services, one result: more customers",
    intro: "We don't sell videos, posts or pages. We sell what happens next.",
    items: [
      { title: "Cinematic production", text: "Pro cameras, lighting, clean audio and an edit built for the algorithm, not just for taste.", points: ["Reels and TikTok", "Products and places", "Openings and events"] },
      { title: "Creator network", text: "Local faces people know and trust. You pick the creator who fits your audience; we handle script, shoot and publishing.", points: ["Exposure on pages followed by tens of thousands", "Full coordination from idea to post", "Reach report after every campaign"] },
      { title: "Paid advertising", text: "Facebook, Instagram and TikTok campaigns targeting your exact city and neighbourhood, optimised daily to lower your cost per customer.", points: ["Precise geo-targeting", "Multiple ad variants tested", "Monthly numbers report"] },
      { title: "Websites, stores & apps", text: "A fast site that shows up on Google, an online store, a booking or ordering app, and automations that connect WhatsApp to your system. The site you're reading is an example of what we build.", points: ["Brochure sites and online stores", "Web and mobile apps", "WhatsApp automation and dashboards"] },
    ],
  },
  tech: {
    heading: "Tech isn't an add-on. It's half of what we do.",
    intro:
      "We build the digital tools that make marketing pay off: a site that ranks on Google, a store that sells overnight, an app that takes bookings for you, automation that answers your customers in seconds. Every package includes a tech component, and every service can be ordered on its own.",
    items: [
      { title: "Brochure websites", text: "Fast trilingual pages, search-engine ready, loading in under a second on mobile." },
      { title: "Online stores", text: "Catalogue, cart, cash-on-delivery or card payment, delivery integration. You sell while you sleep." },
      { title: "Web & mobile apps", text: "Appointment booking, orders, loyalty programs, or any idea that deserves an app of its own." },
      { title: "WhatsApp & AI automation", text: "Auto-replies, booking confirmations, appointment reminders, customer follow-up with no manual work." },
      { title: "Dashboards & reports", text: "All your numbers on one screen: sales, messages, campaign results, updated live." },
      { title: "Hosting, maintenance & security", text: "Domain, fast hosting, backups, monthly updates. Your site never goes down." },
    ],
    proof: "This site is built with the same tools we use for clients: Next.js, Supabase, Vercel. Four languages, a form wired to a database, and full speed on mobile.",
    cta: "Talk about your tech project",
  },
  creators: {
    heading: "Pick the face that speaks to your audience",
    intro: "A network of local creators across Oujda, Berkane and Nador, each with a real audience in their niche. You choose; we film, publish and measure.",
    note: "Figures are indicative and updated monthly.",
    join: "Content creator? Join the network",
    joinText: "We pay you per ad video and handle shooting and editing. You just show up and talk.",
    people: [
      { name: "Meryem", niche: "Lifestyle & restaurants", city: "Oujda", reach: "100K+" },
      { name: "Creator 2", niche: "Cars & tech", city: "Oujda", reach: "Soon" },
      { name: "Creator 3", niche: "Beauty & fashion", city: "Berkane", reach: "Soon" },
      { name: "Creator 4", niche: "Sport & health", city: "Nador", reach: "Soon" },
    ],
  },
  packages: {
    heading: "Clear packages, no surprises",
    intro: "Choose what fits your project today. Switch packages any time.",
    techNote: "Every package includes a tech component (a site, page or app). Any service can also be ordered alone from the “Single services” tab.",
    techLabel: "Tech component",
    tabs: { business: "Shops & companies", individuals: "Individuals & freelancers", single: "Single services" },
    currency: "MAD",
    business: [
      { name: "Express ad", who: "Opening, seasonal offer, event", price: "from 3,500", period: "one-off", includes: ["30–60 s cinematic video", "One creator from the network", "Published on their page and yours", "Reach report"], tech: "Landing page for the offer with a WhatsApp button" },
      { name: "Monthly complete", who: "Restaurants, shops, clinics", price: "from 7,500", period: "per month", featured: true, includes: ["4 videos per month", "Page and inbox management", "Managed paid ads (ad budget separate)", "Creator twice a month", "Monthly numbers report"], tech: "Brochure website + hosting and maintenance included" },
      { name: "Digital transformation", who: "New project or going online", price: "from 15,000", period: "one-off", includes: ["Visual identity for your pages", "Launch shoot", "One-month launch campaign", "Store management training"], tech: "Website or online store + WhatsApp order automation" },
      { name: "Institutions & hotels", who: "Annual contracts, larger volume", price: "Custom", period: "by scope", includes: ["Dedicated team", "Weekly production", "Multiple creators", "Results dashboard"], tech: "Custom platform or app (booking, memberships, dashboard)" },
    ],
    individuals: [
      { name: "Starter consultation", who: "Where do I begin?", price: "250", period: "45-min session", includes: ["Audit of your online presence", "3-step plan", "Credited against any later package"], tech: "Quick audit of your site or pages" },
      { name: "Single video", who: "Video CV, project pitch, product", price: "from 800", period: "per session", includes: ["Two-hour shoot", "Professional edit", "Two cuts: vertical and horizontal"], tech: "One page to showcase the video with a contact button" },
      { name: "Personal website", who: "Doctor, lawyer, craftsman, freelancer", price: "from 2,500", period: "one-off", featured: true, includes: ["Google Maps listing", "One year of hosting and domain", "Professional photo session"], tech: "Trilingual brochure site + WhatsApp booking button" },
      { name: "On-camera coaching", who: "Personal brand, new creator", price: "from 1,500", period: "4 sessions", includes: ["Speaking confidently on camera", "Filming yourself with your phone", "Monthly content plan"], tech: "Personal link-in-bio page in your name" },
    ],
    single: [
      { name: "Brochure website", who: "Shop, clinic, office, freelancer", price: "from 3,000", period: "one-off", includes: ["Up to 5 pages, 3 languages", "Google and mobile ready", "Contact form and WhatsApp"] },
      { name: "Online store", who: "Sell products online", price: "from 7,000", period: "one-off", includes: ["Catalogue, cart, payment", "Delivery integration", "Management training"] },
      { name: "Web or mobile app", who: "Booking, orders, memberships", price: "from 15,000", period: "by scope", includes: ["Full design and development", "Admin dashboard", "App store publishing"] },
      { name: "Landing page", who: "Offer, campaign, launch", price: "from 1,500", period: "one-off", includes: ["One fast page", "Wired to your ads", "Conversion tracking"] },
      { name: "WhatsApp automation", who: "Replies, bookings, follow-up", price: "from 2,500", period: "one-off", includes: ["Auto-replies", "Confirmations and reminders", "Database integration"] },
      { name: "Hosting & maintenance", who: "Any site or store", price: "300", period: "per month", includes: ["Domain and hosting", "Backups and updates", "Small monthly changes"] },
      { name: "Ad video", who: "Product, place, offer", price: "from 2,000", period: "per video", includes: ["Cinematic shoot", "Algorithm-ready edit", "Two cuts"] },
      { name: "Creator feature", who: "One video with a known face", price: "from 1,000", period: "per video", includes: ["The right creator for you", "Script and shoot", "Posted on their page"] },
      { name: "Ads management", who: "Facebook, Instagram, TikTok", price: "from 1,500", period: "per month + ad budget", includes: ["Setup and targeting", "Daily optimisation", "Monthly report"] },
      { name: "Product photography", who: "Restaurants, shops, artisans", price: "from 1,200", period: "per session", includes: ["Up to 20 products", "Retouching", "Store-ready"] },
      { name: "Visual identity", who: "Logo, colours, templates", price: "from 2,500", period: "one-off", includes: ["Logo in three versions", "Colour and type guide", "Post templates"] },
      { name: "Tech training", who: "Your team runs its own tools", price: "from 800", period: "per session", includes: ["Managing the site or store", "Replying via automation", "Reading the reports"] },
    ],
    cta: "Request this package",
  },
  process: {
    heading: "How we work",
    steps: [
      { title: "Diagnostic call", text: "Your project, your audience, your goal, in 20 minutes. Free." },
      { title: "Script and creator", text: "We propose the idea and the right face; you approve before we shoot." },
      { title: "Shoot and edit", text: "One day at your place, video delivered within 48 hours." },
      { title: "Publish and advertise", text: "Posted through the network, campaign launched, monitored daily." },
      { title: "Report and improve", text: "Clear numbers: views, messages, visits. Then we repeat what worked." },
    ],
  },
  work: {
    heading: "Results from the Oriental",
    intro: "Our first five clients get launch pricing in exchange for publishing their numbers here. Be one of them.",
    items: [
      { client: "Restaurant — Oujda", sector: "Food", result: "84K views", detail: "One opening video, 130 booking messages in 72 h." },
      { client: "Clinic — Oujda", sector: "Health & beauty", result: "121K views", detail: "Three-video series, the month's agenda filled." },
      { client: "Furniture showroom — Berkane", sector: "Retail", result: "67K views", detail: "Product shoot + paid campaign, 40 showroom visits." },
    ],
  },
  contact: {
    heading: "Let's talk about your project",
    intro: "Leave your details and we'll call you within 24 hours, or message us directly on WhatsApp.",
    whatsapp: "WhatsApp us",
    form: {
      name: "Name",
      phone: "Phone",
      business: "Project or shop name",
      need: "What do you need?",
      message: "Tell us more (optional)",
      needs: ["An ad video", "A monthly package", "A website or store", "An app or automation", "A creator", "Not sure yet"],
      submit: "Send request",
      sending: "Sending…",
      sent: "Got it. We'll call you within 24 hours.",
      error: "Couldn't send. Try WhatsApp instead.",
    },
    location: "Oujda, Oriental, Morocco",
  },
  footer: {
    tagline: "A production, digital marketing and tech agency born in the Oriental.",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dict> = { ar, ary, fr, en };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
