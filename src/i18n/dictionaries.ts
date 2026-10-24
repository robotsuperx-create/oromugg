import type { Locale } from "./config";

export type Dict = {
  meta: { title: string; description: string };
  nav: { services: string; creators: string; packages: string; work: string; contact: string; cta: string };
  hero: {
    kicker: string;
    title: string[];
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
    tabs: { business: string; individuals: string };
    currency: string;
    business: { name: string; who: string; price: string; period: string; includes: string[]; featured?: boolean }[];
    individuals: { name: string; who: string; price: string; period: string; includes: string[]; featured?: boolean }[];
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

const ar: Dict = {
  meta: {
    title: "OROM UGG — وكالة إنتاج وتسويق رقمي في الجهة الشرقية",
    description:
      "تصوير سينمائي، شبكة مبدعين محليين، إعلانات ممولة ومواقع احترافية. نحوّل محلّك أو مشروعك إلى علامة يعرفها الناس في وجدة والجهة الشرقية.",
  },
  nav: { services: "الخدمات", creators: "المبدعون", packages: "الباقات", work: "أعمالنا", contact: "تواصل", cta: "اطلب عرضاً" },
  hero: {
    kicker: "وكالة إنتاج وتسويق رقمي · وجدة والجهة الشرقية",
    title: ["نُصوّر.", "نَنشر.", "نُبيع."],
    text:
      "من أول لقطة إلى أول زبون يدخل من الباب: فريق واحد يصوّر محتواك بجودة سينمائية، وينشره عبر شبكة مبدعين يتابعهم أكثر من 100 ألف شخص في الجهة الشرقية، ويدير إعلاناتك حتى تتحول المشاهدات إلى مبيعات.",
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
    { value: "3", label: "ركائز في فريق واحد: إنتاج، توزيع، إعلانات" },
    { value: "100%", label: "من الجهة الشرقية، للجهة الشرقية" },
  ],
  services: {
    heading: "أربع خدمات، نتيجة واحدة: زبائن أكثر",
    intro: "لا نبيع فيديوهات ولا منشورات. نبيع ما يحدث بعدها.",
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
        title: "مواقع وتطبيقات",
        text: "موقع سريع يظهر في غوغل، متجر إلكتروني، أو تطبيق لمشروعك. هذا الموقع الذي تتصفحه الآن مثال على ما نبنيه.",
        points: ["مواقع تعريفية ومتاجر", "حجز وطلب عبر واتساب", "استضافة ونطاق وصيانة"],
      },
    ],
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
    tabs: { business: "محلات وشركات", individuals: "أفراد ومهن حرة" },
    currency: "درهم",
    business: [
      {
        name: "الإعلان السريع",
        who: "افتتاح، عرض موسمي، فعالية",
        price: "من 2,500",
        period: "لمرة واحدة",
        includes: ["فيديو سينمائي 30–60 ثانية", "ظهور مبدع من الشبكة", "نشر على صفحته وصفحتك", "تقرير وصول"],
      },
      {
        name: "الشهرية المتكاملة",
        who: "مطاعم، محلات، عيادات",
        price: "من 6,000",
        period: "شهرياً",
        featured: true,
        includes: ["4 فيديوهات شهرياً", "إدارة الصفحات والرد على الرسائل", "إعلانات ممولة مُدارة (الميزانية الإعلانية منفصلة)", "ظهور مبدع مرتين شهرياً", "تقرير شهري بالأرقام"],
      },
      {
        name: "التحول الرقمي",
        who: "مشروع جديد أو انتقال أونلاين",
        price: "من 12,000",
        period: "دفعة واحدة",
        includes: ["موقع أو متجر إلكتروني", "هوية بصرية للصفحات", "جلسة تصوير إطلاق", "حملة إطلاق لمدة شهر"],
      },
      {
        name: "المؤسسات والفنادق",
        who: "عقود سنوية وحجم أكبر",
        price: "عرض مخصص",
        period: "حسب الحجم",
        includes: ["فريق مخصص", "إنتاج أسبوعي", "عدة مبدعين", "لوحة متابعة للنتائج"],
      },
    ],
    individuals: [
      {
        name: "استشارة البداية",
        who: "من أين أبدأ؟",
        price: "250",
        period: "جلسة 45 دقيقة",
        includes: ["تشخيص حضورك الرقمي", "خطة من 3 خطوات", "تُخصم من أي باقة لاحقة"],
      },
      {
        name: "فيديو واحد",
        who: "سيرة مرئية، تقديم مشروع، منتج",
        price: "من 800",
        period: "للجلسة",
        includes: ["جلسة تصوير ساعتين", "مونتاج احترافي", "نسختان: عمودية وأفقية"],
      },
      {
        name: "موقع شخصي",
        who: "طبيب، محامٍ، حرفي، مستقل",
        price: "من 2,500",
        period: "دفعة واحدة",
        featured: true,
        includes: ["صفحة تعريفية سريعة", "زر حجز عبر واتساب", "ظهور في خرائط غوغل", "سنة استضافة"],
      },
      {
        name: "كوتشينغ الظهور",
        who: "علامة شخصية، مؤثر ناشئ",
        price: "من 1,500",
        period: "4 جلسات",
        includes: ["التحدث بثقة أمام الكاميرا", "تصوير نفسك بهاتفك", "خطة محتوى شهرية"],
      },
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
      needs: ["فيديو إعلاني", "باقة شهرية", "موقع أو متجر", "ظهور مبدع", "لست متأكداً بعد"],
      submit: "أرسل الطلب",
      sending: "جارٍ الإرسال…",
      sent: "وصلنا طلبك. سنتصل بك خلال 24 ساعة.",
      error: "تعذر الإرسال. جرّب واتساب مباشرة.",
    },
    location: "وجدة، الجهة الشرقية، المغرب",
  },
  footer: {
    tagline: "وكالة إنتاج وتسويق رقمي من الجهة الشرقية.",
    rights: "جميع الحقوق محفوظة.",
  },
};

const fr: Dict = {
  meta: {
    title: "OROM UGG — Agence de production et marketing digital à l'Oriental",
    description:
      "Vidéo cinématographique, réseau de créateurs locaux, publicité payante et sites web professionnels. Nous transformons votre commerce en marque connue à Oujda et dans l'Oriental.",
  },
  nav: { services: "Services", creators: "Créateurs", packages: "Offres", work: "Réalisations", contact: "Contact", cta: "Demander un devis" },
  hero: {
    kicker: "Agence de production & marketing digital · Oujda et l'Oriental",
    title: ["On filme.", "On diffuse.", "On vend."],
    text:
      "De la première prise au premier client qui passe la porte : une seule équipe filme votre contenu en qualité cinéma, le diffuse via un réseau de créateurs suivis par plus de 100 000 personnes dans l'Oriental, et pilote vos publicités jusqu'à ce que les vues deviennent des ventes.",
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
    { value: "3", label: "piliers dans une équipe : production, diffusion, publicité" },
    { value: "100%", label: "de l'Oriental, pour l'Oriental" },
  ],
  services: {
    heading: "Quatre services, un seul résultat : plus de clients",
    intro: "Nous ne vendons ni vidéos ni posts. Nous vendons ce qui se passe après.",
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
        title: "Sites & applications",
        text: "Un site rapide visible sur Google, une boutique en ligne ou une application pour votre projet. Le site que vous lisez est un exemple de ce que nous construisons.",
        points: ["Sites vitrine et boutiques", "Réservation et commande via WhatsApp", "Hébergement, domaine, maintenance"],
      },
    ],
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
    tabs: { business: "Commerces & entreprises", individuals: "Particuliers & indépendants" },
    currency: "MAD",
    business: [
      { name: "Pub express", who: "Ouverture, promo, événement", price: "dès 2 500", period: "une fois", includes: ["Vidéo cinéma 30–60 s", "Un créateur du réseau", "Diffusion sur sa page et la vôtre", "Rapport de portée"] },
      { name: "Mensuelle complète", who: "Restaurants, commerces, cliniques", price: "dès 6 000", period: "par mois", featured: true, includes: ["4 vidéos par mois", "Gestion des pages et des messages", "Publicité gérée (budget média séparé)", "Créateur deux fois par mois", "Rapport mensuel chiffré"] },
      { name: "Transformation digitale", who: "Nouveau projet ou passage en ligne", price: "dès 12 000", period: "une fois", includes: ["Site ou boutique en ligne", "Identité visuelle des pages", "Tournage de lancement", "Campagne de lancement d'un mois"] },
      { name: "Institutions & hôtels", who: "Contrats annuels, gros volumes", price: "Sur devis", period: "selon le volume", includes: ["Équipe dédiée", "Production hebdomadaire", "Plusieurs créateurs", "Tableau de bord des résultats"] },
    ],
    individuals: [
      { name: "Consultation de départ", who: "Par où commencer ?", price: "250", period: "séance de 45 min", includes: ["Diagnostic de votre présence en ligne", "Plan en 3 étapes", "Déduite de toute offre ultérieure"] },
      { name: "Une vidéo", who: "CV vidéo, présentation, produit", price: "dès 800", period: "la séance", includes: ["Tournage de deux heures", "Montage professionnel", "Deux formats : vertical et horizontal"] },
      { name: "Site personnel", who: "Médecin, avocat, artisan, freelance", price: "dès 2 500", period: "une fois", featured: true, includes: ["Page de présentation rapide", "Bouton de réservation WhatsApp", "Présence sur Google Maps", "Un an d'hébergement"] },
      { name: "Coaching caméra", who: "Marque personnelle, créateur débutant", price: "dès 1 500", period: "4 séances", includes: ["Parler avec assurance face caméra", "Se filmer avec son téléphone", "Plan de contenu mensuel"] },
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
      needs: ["Une vidéo publicitaire", "Une offre mensuelle", "Un site ou une boutique", "Un créateur", "Je ne sais pas encore"],
      submit: "Envoyer la demande",
      sending: "Envoi…",
      sent: "Demande reçue. Nous vous rappelons sous 24 h.",
      error: "Envoi impossible. Essayez WhatsApp.",
    },
    location: "Oujda, Oriental, Maroc",
  },
  footer: {
    tagline: "Agence de production et marketing digital, née dans l'Oriental.",
    rights: "Tous droits réservés.",
  },
};

const en: Dict = {
  meta: {
    title: "OROM UGG — Production & digital marketing agency, Eastern Morocco",
    description:
      "Cinematic video, a network of local creators, paid ads and professional websites. We turn your shop or project into a brand people know in Oujda and the Oriental region.",
  },
  nav: { services: "Services", creators: "Creators", packages: "Packages", work: "Work", contact: "Contact", cta: "Get a quote" },
  hero: {
    kicker: "Production & digital marketing agency · Oujda and the Oriental",
    title: ["We shoot.", "We publish.", "We sell."],
    text:
      "From the first frame to the first customer through the door: one team films your content at cinema quality, publishes it through a creator network followed by 100,000+ people in the Oriental, and runs your ads until views become sales.",
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
    { value: "3", label: "pillars in one team: production, distribution, ads" },
    { value: "100%", label: "from the Oriental, for the Oriental" },
  ],
  services: {
    heading: "Four services, one result: more customers",
    intro: "We don't sell videos or posts. We sell what happens next.",
    items: [
      { title: "Cinematic production", text: "Pro cameras, lighting, clean audio and an edit built for the algorithm, not just for taste.", points: ["Reels and TikTok", "Products and places", "Openings and events"] },
      { title: "Creator network", text: "Local faces people know and trust. You pick the creator who fits your audience; we handle script, shoot and publishing.", points: ["Exposure on pages followed by tens of thousands", "Full coordination from idea to post", "Reach report after every campaign"] },
      { title: "Paid advertising", text: "Facebook, Instagram and TikTok campaigns targeting your exact city and neighbourhood, optimised daily to lower your cost per customer.", points: ["Precise geo-targeting", "Multiple ad variants tested", "Monthly numbers report"] },
      { title: "Websites & apps", text: "A fast site that shows up on Google, an online store, or an app for your project. The site you're reading is an example of what we build.", points: ["Brochure sites and stores", "Booking and ordering via WhatsApp", "Hosting, domain, maintenance"] },
    ],
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
    tabs: { business: "Shops & companies", individuals: "Individuals & freelancers" },
    currency: "MAD",
    business: [
      { name: "Express ad", who: "Opening, seasonal offer, event", price: "from 2,500", period: "one-off", includes: ["30–60 s cinematic video", "One creator from the network", "Published on their page and yours", "Reach report"] },
      { name: "Monthly complete", who: "Restaurants, shops, clinics", price: "from 6,000", period: "per month", featured: true, includes: ["4 videos per month", "Page and inbox management", "Managed paid ads (ad budget separate)", "Creator twice a month", "Monthly numbers report"] },
      { name: "Digital transformation", who: "New project or going online", price: "from 12,000", period: "one-off", includes: ["Website or online store", "Visual identity for your pages", "Launch shoot", "One-month launch campaign"] },
      { name: "Institutions & hotels", who: "Annual contracts, larger volume", price: "Custom", period: "by scope", includes: ["Dedicated team", "Weekly production", "Multiple creators", "Results dashboard"] },
    ],
    individuals: [
      { name: "Starter consultation", who: "Where do I begin?", price: "250", period: "45-min session", includes: ["Audit of your online presence", "3-step plan", "Credited against any later package"] },
      { name: "Single video", who: "Video CV, project pitch, product", price: "from 800", period: "per session", includes: ["Two-hour shoot", "Professional edit", "Two cuts: vertical and horizontal"] },
      { name: "Personal website", who: "Doctor, lawyer, craftsman, freelancer", price: "from 2,500", period: "one-off", featured: true, includes: ["Fast one-page site", "WhatsApp booking button", "Google Maps listing", "One year of hosting"] },
      { name: "On-camera coaching", who: "Personal brand, new creator", price: "from 1,500", period: "4 sessions", includes: ["Speaking confidently on camera", "Filming yourself with your phone", "Monthly content plan"] },
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
      needs: ["An ad video", "A monthly package", "A website or store", "A creator", "Not sure yet"],
      submit: "Send request",
      sending: "Sending…",
      sent: "Got it. We'll call you within 24 hours.",
      error: "Couldn't send. Try WhatsApp instead.",
    },
    location: "Oujda, Oriental, Morocco",
  },
  footer: {
    tagline: "A production and digital marketing agency born in the Oriental.",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dict> = { ar, fr, en };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
