"use client";

import { useMemo, useState } from "react";
import type { Dictionary, Locale } from "./i18n";

type TrustSectionProps = {
  t: Dictionary;
  locale: Locale;
};

type TrustCard = {
  title: string;
  description: string;
  tag: string;
  image: string;
};

function localizeText(
  locale: Locale,
  value: { en: string; vi: string; de: string; ar: string }
) {
  if (locale === "vi") return value.vi;
  if (locale === "de") return value.de;
  if (locale === "ar") return value.ar;
  return value.en;
}

export function TrustSection({ t, locale }: TrustSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isRTL = locale === "ar";

  const trustCards: TrustCard[] = useMemo(
    () => [
      {
        title: localizeText(locale, {
          en: "Connect to our international servers",
          vi: "Kết nối với các máy chủ quốc tế",
          de: "Verbinde dich mit unseren internationalen Servern",
          ar: "اتصل بخوادمنا الدولية",
        }),
        description: localizeText(locale, {
          en: "Enjoy fast, reliable connections with an extensive VPN network, offering broad global coverage for travel, work, and streaming.",
          vi: "Tận hưởng kết nối nhanh và ổn định với mạng VPN rộng khắp, phù hợp cho du lịch, công việc và streaming.",
          de: "Genieße schnelle und zuverlässige Verbindungen mit einem umfangreichen VPN-Netzwerk für Reisen, Arbeit und Streaming.",
          ar: "استمتع باتصالات سريعة وموثوقة مع شبكة VPN واسعة توفر تغطية عالمية للسفر والعمل والبث.",
        }),
        tag: localizeText(locale, {
          en: "Global network",
          vi: "Mạng toàn cầu",
          de: "Globales Netzwerk",
          ar: "شبكة عالمية",
        }),
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: localizeText(locale, {
          en: "Browse at the highest speeds",
          vi: "Duyệt web với tốc độ cao nhất",
          de: "Surfe mit höchster Geschwindigkeit",
          ar: "تصفح بأعلى السرعات",
        }),
        description: localizeText(locale, {
          en: "Experience rapid, reliable performance with high-speed infrastructure designed for smooth browsing, streaming, and everyday use.",
          vi: "Trải nghiệm hiệu năng nhanh và ổn định với hạ tầng tốc độ cao, tối ưu cho duyệt web, streaming và nhu cầu hằng ngày.",
          de: "Erlebe schnelle und stabile Leistung mit einer Hochgeschwindigkeits-Infrastruktur für Surfen, Streaming und den Alltag.",
          ar: "اختبر أداءً سريعًا وموثوقًا مع بنية تحتية عالية السرعة مصممة للتصفح والبث والاستخدام اليومي.",
        }),
        tag: localizeText(locale, {
          en: "High speed",
          vi: "Tốc độ cao",
          de: "Hohe Geschwindigkeit",
          ar: "سرعة عالية",
        }),
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: localizeText(locale, {
          en: "Explore the internet with total privacy",
          vi: "Khám phá internet với quyền riêng tư tối đa",
          de: "Erkunde das Internet mit vollständigem Datenschutz",
          ar: "استكشف الإنترنت بخصوصية كاملة",
        }),
        description: localizeText(locale, {
          en: "Rely on strong privacy protections, a strict no-logs mindset, and trust-focused design choices that keep user data safer online.",
          vi: "Tin tưởng vào cơ chế bảo vệ quyền riêng tư mạnh mẽ, chính sách no-logs nghiêm ngặt và thiết kế tập trung vào sự an toàn dữ liệu.",
          de: "Verlasse dich auf starken Datenschutz, eine strikte No-Logs-Haltung und vertrauensorientierte Designentscheidungen.",
          ar: "اعتمد على حماية قوية للخصوصية ونهج صارم لعدم الاحتفاظ بالسجلات وخيارات تصميم تركز على أمان بيانات المستخدم.",
        }),
        tag: localizeText(locale, {
          en: "Privacy first",
          vi: "Ưu tiên riêng tư",
          de: "Datenschutz zuerst",
          ar: "الخصوصية أولاً",
        }),
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: localizeText(locale, {
          en: "Dodge annoying ads and malicious malware",
          vi: "Tránh quảng cáo phiền toái và mã độc",
          de: "Vermeide lästige Werbung und Malware",
          ar: "تجنب الإعلانات المزعجة والبرمجيات الخبيثة",
        }),
        description: localizeText(locale, {
          en: "Reduce distractions and improve protection with built-in blocking tools that help filter intrusive ads, trackers, and risky content.",
          vi: "Giảm phiền nhiễu và tăng bảo vệ với công cụ chặn tích hợp giúp lọc quảng cáo, trình theo dõi và nội dung rủi ro.",
          de: "Reduziere Ablenkungen und erhöhe den Schutz mit integrierten Blockierfunktionen gegen Werbung, Tracker und riskante Inhalte.",
          ar: "قلل الإزعاج وعزز الحماية من خلال أدوات الحظر المدمجة التي تساعد على تصفية الإعلانات والمتتبعات والمحتوى الخطر.",
        }),
        tag: localizeText(locale, {
          en: "Cleaner browsing",
          vi: "Duyệt web sạch hơn",
          de: "Saubereres Surfen",
          ar: "تصفح أنظف",
        }),
        image:
          "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: localizeText(locale, {
          en: "Access global content and bypass censorship",
          vi: "Truy cập nội dung toàn cầu và vượt chặn",
          de: "Greife auf globale Inhalte zu und umgehe Zensur",
          ar: "الوصول إلى المحتوى العالمي وتجاوز الرقابة",
        }),
        description: localizeText(locale, {
          en: "Unlock international websites and streaming libraries with tools designed to improve access in restricted or geo-blocked environments.",
          vi: "Mở khóa website quốc tế và thư viện streaming bằng các công cụ giúp cải thiện truy cập tại môi trường bị giới hạn hoặc chặn vùng.",
          de: "Schalte internationale Websites und Streaming-Bibliotheken frei – auch in eingeschränkten oder geografisch blockierten Umgebungen.",
          ar: "افتح المواقع الدولية ومكتبات البث باستخدام أدوات مصممة لتحسين الوصول في البيئات المقيدة أو المحظورة جغرافيًا.",
        }),
        tag: localizeText(locale, {
          en: "Content access",
          vi: "Truy cập nội dung",
          de: "Inhaltszugriff",
          ar: "الوصول إلى المحتوى",
        }),
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: localizeText(locale, {
          en: "Connect on multiple devices",
          vi: "Kết nối trên nhiều thiết bị",
          de: "Verbinde mehrere Geräte",
          ar: "اتصل على عدة أجهزة",
        }),
        description: localizeText(locale, {
          en: "Use one subscription across phones, laptops, tablets, and browsers for a more flexible, real-world VPN experience.",
          vi: "Dùng một gói đăng ký trên điện thoại, laptop, tablet và trình duyệt để có trải nghiệm VPN linh hoạt hơn trong thực tế.",
          de: "Nutze ein Abo auf Smartphones, Laptops, Tablets und Browsern für ein flexibleres VPN-Erlebnis im Alltag.",
          ar: "استخدم اشتراكًا واحدًا عبر الهواتف وأجهزة اللابتوب والأجهزة اللوحية والمتصفحات لتجربة VPN أكثر مرونة في الواقع.",
        }),
        tag: localizeText(locale, {
          en: "Multi-device",
          vi: "Đa thiết bị",
          de: "Mehrere Geräte",
          ar: "متعدد الأجهزة",
        }),
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop",
      },
    ],
    [locale]
  );

  const gridTemplateColumns = useMemo(() => {
    return trustCards
      .map((_, index) =>
        index === activeIndex ? "minmax(0, 5.35fr)" : "minmax(88px, 0.84fr)"
      )
      .join(" ");
  }, [activeIndex, trustCards]);
  const headingFontFamily =
    locale === "vi"
      ? "Arial, Helvetica, sans-serif"
      : "Georgia, ui-serif, serif";
  return (
    <section id="trust" dir="ltr" className="relative overflow-hidden" style={{ fontFamily: headingFontFamily }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/banner-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.98,
          filter: "contrast(1.14) saturate(1.02) brightness(0.98)",
          transform: "scale(1.01)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-white/26" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.10))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24" style={{ fontFamily: headingFontFamily }}>
        <div className={`max-w-3xl ${isRTL ? "text-right" : "text-left"}`}>
          <p
            dir={isRTL ? "rtl" : "ltr"}
            className="text-sm  uppercase tracking-[0.18em] text-emerald-700 sm:text-xl font-bold"
          >
            {t.trust.eyebrow}
          </p>

          <h2
            dir={isRTL ? "rtl" : "ltr"}
            className="mt-3 text-4xl  tracking-tight text-slate-900 lg:text-5xl font-bold"
            style={{ fontFamily: headingFontFamily }}
          >
            {t.trust.title}
          </h2>

          <p
            dir={isRTL ? "rtl" : "ltr"}
            className="mt-4 text-base leading-7 text-slate-600 lg:text-lg"
          >
            {t.trust.desc}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:hidden">
          {trustCards.map((card, index) => (
            <article
              key={card.title}
              onClick={() => setActiveIndex(index)}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/22 to-transparent" />
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="absolute left-4 top-4 inline-flex rounded-full border border-white/30 bg-slate-900/35 px-3 py-1 text-xs  uppercase tracking-[0.16em] text-white backdrop-blur"
                >
                  {card.tag}
                </div>
              </div>

              <div className={`p-6 ${isRTL ? "text-right" : "text-left"}`}>
                <h3
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-2xl  leading-tight text-slate-900"
                  style={{ fontFamily: headingFontFamily }}
                >
                  {card.title}
                </h3>

                <p
                  dir={isRTL ? "rtl" : "ltr"}
                  className="mt-4 text-base leading-7 text-slate-600"
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-12 hidden lg:block">
          <div className="relative rounded-[2.75rem] backdrop-blur-[2px]">
            <div
              className="grid h-[560px] gap-4"
              style={{
                gridTemplateColumns,
                transition:
                  "grid-template-columns 560ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {trustCards.map((card, index) => {
                const isActive = activeIndex === index;

                return (
                  <article
                    key={card.title}
                    tabIndex={0}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`group relative cursor-pointer overflow-hidden border outline-none transition-all duration-300 ${
                      isActive
                        ? "border-emerald-300/90 shadow-[0_24px_60px_rgba(15,23,42,0.22)]"
                        : "border-white/10 shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
                    }`}
                    style={{ transform: "translateZ(0)" }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-700 ease-out ${
                        isActive
                          ? "scale-[1.04] saturate-[1.22] contrast-[1.14] brightness-[0.96]"
                          : "scale-100 saturate-[1.05] contrast-[1.08] brightness-[0.78]"
                      }`}
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive
                          ? "bg-[linear-gradient(180deg,rgba(2,6,23,0.03),rgba(2,6,23,0.76))]"
                          : "bg-[linear-gradient(180deg,rgba(2,6,23,0.10),rgba(2,6,23,0.84))]"
                      }`}
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive
                          ? "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%)]"
                          : "bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_34%)]"
                      }`}
                    />

                    {!isActive && (
                      <div className="relative flex h-full items-end justify-center pb-10">
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/78 to-transparent" />
                        <div className="absolute bottom-28 left-1/2 h-24 w-px -translate-x-1/2 bg-white/55" />
                        <div
                          dir={isRTL ? "rtl" : "ltr"}
                          className="relative rotate-180 text-[2.1rem]  tracking-[0.03em] text-white [writing-mode:vertical-rl]"
                          style={{ fontFamily: headingFontFamily }}
                        >
                          {card.tag}
                        </div>
                      </div>
                    )}

                    <div
                      className={`relative flex h-full flex-col justify-end p-8 transition-all duration-300 xl:p-10 ${
                        isActive
                          ? "translate-y-0 opacity-100 delay-75"
                          : "pointer-events-none translate-y-2 opacity-0"
                      } ${isRTL ? "items-end text-right" : "items-start text-left"}`}
                    >
                      <div
                        dir={isRTL ? "rtl" : "ltr"}
                        className="inline-flex w-fit rounded-full border border-white/20 bg-slate-900/35 px-3 py-1 text-xs  uppercase tracking-[0.16em] text-white backdrop-blur"
                      >
                        {card.tag}
                      </div>

                      <h3
                        dir={isRTL ? "rtl" : "ltr"}
                        className="mt-5 max-w-2xl text-4xl  leading-tight text-white"
                        style={{ fontFamily: headingFontFamily }}
                      >
                        {card.title}
                      </h3>

                      <div className="mt-5 h-px w-28 bg-white/25" />

                      <p
                        dir={isRTL ? "rtl" : "ltr"}
                        className="mt-5 max-w-2xl text-lg leading-8 text-slate-100"
                      >
                        {card.description}
                      </p>

                      <a
                        href="#cta"
                        className="mt-5 w-fit rounded-full border border-white/90 px-3 py-2 text-lg leading-8 text-slate-100 transition hover:bg-white hover:text-black"
                      >
                        <span dir={isRTL ? "rtl" : "ltr"}>
                          {t.trust.explore}
                        </span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}