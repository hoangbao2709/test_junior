import type { Locale } from "./i18n";
import { getDictionary } from "./helper";

export type VpnCard = {
  rank: number;
  name: string;
  badge: string;
  score: string;
  summary: string;
  highlights: string[];
  price: string;
  cta: string;
  accent: string;
};

export type ComparisonRow = {
  label: string;
  values: string[];
};

export type TrustItem = {
  title: string;
  text: string;
};

type LocalizedString = {
  en: string;
  vi: string;
  de: string;
  ar: string;
};

type LocalizedStringArray = {
  en: string[];
  vi: string[];
  de: string[];
  ar: string[];
};

function pickLocalized(locale: Locale, value: LocalizedString): string {
  if (locale === "vi") return value.vi;
  if (locale === "de") return value.de;
  if (locale === "ar") return value.ar;
  return value.en;
}

function pickLocalizedArray(
  locale: Locale,
  value: LocalizedStringArray
): string[] {
  if (locale === "vi") return value.vi;
  if (locale === "de") return value.de;
  if (locale === "ar") return value.ar;
  return value.en;
}

export function getVpnList(locale: Locale): VpnCard[] {
  const t = getDictionary(locale);

  return [
    {
      rank: 1,
      name: "ExpressVPN",
      badge: t.vpnCards.express.badge,
      score: "9.9/10",
      summary: t.vpnCards.express.summary,
      highlights: t.vpnCards.express.highlights,
      price: "$3.49/mo",
      cta: t.vpnCards.express.cta,
      accent: "from-emerald-500/20 to-emerald-400/5",
    },
    {
      rank: 2,
      name: "ProtonVPN",
      badge: t.vpnCards.proton.badge,
      score: "9.7/10",
      summary: t.vpnCards.proton.summary,
      highlights: t.vpnCards.proton.highlights,
      price: "$4.99/mo",
      cta: t.vpnCards.proton.cta,
      accent: "from-violet-400/25 to-fuchsia-300/10",
    },
    {
      rank: 3,
      name: "VpnMentor",
      badge: pickLocalized(locale, {
        en: "Best Features",
        vi: "Tốt nhất về tính năng",
        de: "Beste Funktionen",
        ar: "الأفضل من حيث الميزات",
      }),
      score: "9.5/10",
      summary: pickLocalized(locale, {
        en: "A strong all-rounder with advanced security features and broad appeal.",
        vi: "Một lựa chọn toàn diện mạnh mẽ với các tính năng bảo mật nâng cao và sức hút rộng rãi.",
        de: "Eine starke Allround-Lösung mit fortschrittlichen Sicherheitsfunktionen und breiter Attraktivität.",
        ar: "خيار متكامل قوي مع ميزات أمان متقدمة وجاذبية واسعة.",
      }),
      highlights: pickLocalizedArray(locale, {
        en: ["Threat protection", "Large server network", "Good speed"],
        vi: ["Chống mối đe dọa", "Mạng máy chủ lớn", "Tốc độ tốt"],
        de: ["Bedrohungsschutz", "Großes Servernetzwerk", "Gute Geschwindigkeit"],
        ar: ["حماية من التهديدات", "شبكة خوادم كبيرة", "سرعة جيدة"],
      }),
      price: "$3.99/mo",
      cta: pickLocalized(locale, {
        en: "Check Price",
        vi: "Xem giá",
        de: "Preis prüfen",
        ar: "تحقق من السعر",
      }),
      accent: "from-sky-400/20 to-cyan-300/10",
    },
    {
      rank: 4,
      name: "CyberGhost",
      badge: pickLocalized(locale, {
        en: "Best for Beginners",
        vi: "Tốt nhất cho người mới",
        de: "Am besten für Einsteiger",
        ar: "الأفضل للمبتدئين",
      }),
      score: "9.2/10",
      summary: pickLocalized(locale, {
        en: "Simple onboarding and clear use-case targeting for streaming and everyday use.",
        vi: "Quy trình bắt đầu đơn giản và định hướng trường hợp sử dụng rõ ràng cho streaming và nhu cầu hằng ngày.",
        de: "Einfaches Onboarding und klare Ausrichtung auf Streaming und den Alltag.",
        ar: "إعداد بسيط وتركيز واضح على حالات الاستخدام للبث والاستخدام اليومي.",
      }),
      highlights: pickLocalizedArray(locale, {
        en: ["Easy setup", "Streaming profiles", "Long-term value"],
        vi: ["Thiết lập dễ dàng", "Hồ sơ streaming", "Giá trị dài hạn"],
        de: ["Einfache Einrichtung", "Streaming-Profile", "Langfristiger Wert"],
        ar: ["إعداد سهل", "ملفات للبث", "قيمة طويلة المدى"],
      }),
      price: "$2.19/mo",
      cta: pickLocalized(locale, {
        en: "Compare Plans",
        vi: "So sánh gói",
        de: "Tarife vergleichen",
        ar: "قارن الخطط",
      }),
      accent: "from-amber-300/25 to-orange-200/10",
    },
    {
      rank: 5,
      name: "Private Internet Access",
      badge: pickLocalized(locale, {
        en: "Best Customization",
        vi: "Tùy biến tốt nhất",
        de: "Beste Anpassung",
        ar: "الأفضل في التخصيص",
      }),
      score: "9.0/10",
      summary: pickLocalized(locale, {
        en: "Flexible settings and solid value for users who want more control.",
        vi: "Thiết lập linh hoạt và giá trị tốt cho người dùng muốn nhiều quyền kiểm soát hơn.",
        de: "Flexible Einstellungen und starker Gegenwert für Nutzer, die mehr Kontrolle möchten.",
        ar: "إعدادات مرنة وقيمة جيدة للمستخدمين الذين يريدون مزيدًا من التحكم.",
      }),
      highlights: pickLocalizedArray(locale, {
        en: ["Highly configurable", "Good price", "Trusted reputation"],
        vi: ["Tùy chỉnh cao", "Giá tốt", "Danh tiếng đáng tin"],
        de: ["Stark anpassbar", "Guter Preis", "Vertrauenswürdiger Ruf"],
        ar: ["قابل للتخصيص بدرجة عالية", "سعر جيد", "سمعة موثوقة"],
      }),
      price: "$2.03/mo",
      cta: pickLocalized(locale, {
        en: "Open Review",
        vi: "Mở review",
        de: "Bewertung öffnen",
        ar: "افتح المراجعة",
      }),
      accent: "from-slate-400/20 to-slate-300/5",
    },
  ];
}

export function getComparisonRows(locale: Locale): ComparisonRow[] {
  return [
    {
      label: pickLocalized(locale, {
        en: "Best for",
        vi: "Phù hợp nhất",
        de: "Am besten für",
        ar: "الأفضل لـ",
      }),
      values: pickLocalizedArray(locale, {
        en: [
          "Overall balance",
          "Privacy",
          "Advanced features",
          "Beginners",
          "Customization",
        ],
        vi: [
          "Cân bằng tổng thể",
          "Riêng tư",
          "Tính năng nâng cao",
          "Người mới",
          "Tùy biến",
        ],
        de: [
          "Gesamtbalance",
          "Datenschutz",
          "Erweiterte Funktionen",
          "Einsteiger",
          "Anpassung",
        ],
        ar: [
          "التوازن العام",
          "الخصوصية",
          "ميزات متقدمة",
          "المبتدئين",
          "التخصيص",
        ],
      }),
    },
    {
      label: pickLocalized(locale, {
        en: "Ease of use",
        vi: "Dễ sử dụng",
        de: "Benutzerfreundlichkeit",
        ar: "سهولة الاستخدام",
      }),
      values: pickLocalizedArray(locale, {
        en: ["Excellent", "Very good", "Very good", "Excellent", "Good"],
        vi: ["Xuất sắc", "Rất tốt", "Rất tốt", "Xuất sắc", "Tốt"],
        de: ["Ausgezeichnet", "Sehr gut", "Sehr gut", "Ausgezeichnet", "Gut"],
        ar: ["ممتاز", "جيد جدًا", "جيد جدًا", "ممتاز", "جيد"],
      }),
    },
    {
      label: pickLocalized(locale, {
        en: "Streaming",
        vi: "Streaming",
        de: "Streaming",
        ar: "البث",
      }),
      values: pickLocalizedArray(locale, {
        en: ["Excellent", "Very good", "Excellent", "Very good", "Good"],
        vi: ["Xuất sắc", "Rất tốt", "Xuất sắc", "Rất tốt", "Tốt"],
        de: ["Ausgezeichnet", "Sehr gut", "Ausgezeichnet", "Sehr gut", "Gut"],
        ar: ["ممتاز", "جيد جدًا", "ممتاز", "جيد جدًا", "جيد"],
      }),
    },
    {
      label: pickLocalized(locale, {
        en: "Privacy focus",
        vi: "Mức độ tập trung vào riêng tư",
        de: "Datenschutz-Fokus",
        ar: "التركيز على الخصوصية",
      }),
      values: pickLocalizedArray(locale, {
        en: ["High", "Excellent", "High", "Good", "High"],
        vi: ["Cao", "Xuất sắc", "Cao", "Tốt", "Cao"],
        de: ["Hoch", "Ausgezeichnet", "Hoch", "Gut", "Hoch"],
        ar: ["عالٍ", "ممتاز", "عالٍ", "جيد", "عالٍ"],
      }),
    },
    {
      label: pickLocalized(locale, {
        en: "Value for money",
        vi: "Giá trị so với chi phí",
        de: "Preis-Leistungs-Verhältnis",
        ar: "القيمة مقابل السعر",
      }),
      values: pickLocalizedArray(locale, {
        en: ["Very good", "Good", "Very good", "Excellent", "Excellent"],
        vi: ["Rất tốt", "Tốt", "Rất tốt", "Xuất sắc", "Xuất sắc"],
        de: ["Sehr gut", "Gut", "Sehr gut", "Ausgezeichnet", "Ausgezeichnet"],
        ar: ["جيد جدًا", "جيد", "جيد جدًا", "ممتاز", "ممتاز"],
      }),
    },
    {
      label: pickLocalized(locale, {
        en: "Starting price",
        vi: "Giá khởi điểm",
        de: "Startpreis",
        ar: "السعر الابتدائي",
      }),
      values: ["$3.49/mo", "$4.99/mo", "$3.99/mo", "$2.19/mo", "$2.03/mo"],
    },
  ];
}

export function getTrustItems(locale: Locale): TrustItem[] {
  return [
    {
      title: pickLocalized(locale, {
        en: "Hands-on review process",
        vi: "Quy trình đánh giá thực tế",
        de: "Praxisnaher Bewertungsprozess",
        ar: "عملية مراجعة عملية",
      }),
      text: pickLocalized(locale, {
        en: "Every recommendation is presented like a real buying guide: clear criteria, digestible summaries, and decision-first UX.",
        vi: "Mỗi đề xuất được trình bày như một hướng dẫn mua thật sự: tiêu chí rõ ràng, tóm tắt dễ đọc và UX ưu tiên ra quyết định.",
        de: "Jede Empfehlung wird wie ein echter Kaufratgeber präsentiert: klare Kriterien, leicht verständliche Zusammenfassungen und eine UX mit Fokus auf Entscheidungen.",
        ar: "يتم تقديم كل توصية كدليل شراء حقيقي: معايير واضحة وملخصات سهلة الفهم وتجربة استخدام تركز على اتخاذ القرار.",
      }),
    },
    {
      title: pickLocalized(locale, {
        en: "Built for global users",
        vi: "Thiết kế cho người dùng toàn cầu",
        de: "Für globale Nutzer entwickelt",
        ar: "مصمم للمستخدمين حول العالم",
      }),
      text: pickLocalized(locale, {
        en: "The homepage prioritizes fast scanning, price comparison, device coverage, and clear CTAs for international audiences.",
        vi: "Homepage ưu tiên khả năng quét nhanh, so sánh giá, độ phủ thiết bị và CTA rõ ràng cho người dùng quốc tế.",
        de: "Die Homepage priorisiert schnelles Scannen, Preisvergleich, Geräteabdeckung und klare CTAs für internationale Zielgruppen.",
        ar: "تعطي الصفحة الرئيسية أولوية للمسح السريع ومقارنة الأسعار وتغطية الأجهزة والدعوات الواضحة لاتخاذ الإجراء للجمهور الدولي.",
      }),
    },
    {
      title: pickLocalized(locale, {
        en: "Conversion without clutter",
        vi: "Tối ưu chuyển đổi mà không rối mắt",
        de: "Conversion ohne Unordnung",
        ar: "تحويلات دون فوضى",
      }),
      text: pickLocalized(locale, {
        en: "The layout balances editorial trust signals with commercial intent, so the page feels like a product, not a mockup.",
        vi: "Bố cục cân bằng giữa tín hiệu tin cậy biên tập và mục tiêu thương mại, giúp trang trông như một sản phẩm thật chứ không phải mockup.",
        de: "Das Layout balanciert redaktionelle Vertrauenssignale mit kommerzieller Absicht, sodass die Seite wie ein echtes Produkt und nicht wie ein Mockup wirkt.",
        ar: "يوازن التصميم بين إشارات الثقة التحريرية والهدف التجاري، بحيث تبدو الصفحة كمنتج حقيقي وليست مجرد نموذج تجريبي.",
      }),
    },
  ];
}