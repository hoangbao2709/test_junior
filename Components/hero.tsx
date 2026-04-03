"use client";

import TechStackPreview from "@/Components/LogoMarqueeRow";
import type { Dictionary, Locale } from "./i18n";

type HeroSectionProps = {
  t: Dictionary;
  locale: Locale;
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

export function HeroSection({ t, locale }: HeroSectionProps) {
  const isRTL = locale === "ar";

  const heroPickDescription = localizeText(locale, {
    en: "Best overall balance of speed, privacy, and ease of use.",
    vi: "Cân bằng tổng thể tốt nhất giữa tốc độ, riêng tư và độ dễ sử dụng.",
    de: "Die beste Gesamtbalance aus Geschwindigkeit, Datenschutz und Benutzerfreundlichkeit.",
    ar: "أفضل توازن إجمالي بين السرعة والخصوصية وسهولة الاستخدام.",
  });

  const bestForValue = localizeText(locale, {
    en: "Speed + ease of use",
    vi: "Tốc độ + dễ sử dụng",
    de: "Geschwindigkeit + Benutzerfreundlichkeit",
    ar: "السرعة + سهولة الاستخدام",
  });

  const scoreLabel = localizeText(locale, {
    en: "Score",
    vi: "Điểm số",
    de: "Punktzahl",
    ar: "النتيجة",
  });

  const guaranteeValue = localizeText(locale, {
    en: "30 days",
    vi: "30 ngày",
    de: "30 Tage",
    ar: "30 يومًا",
  });

  const protonText = localizeText(locale, {
    en: "Strong feature set and value",
    vi: "Bộ tính năng mạnh và giá trị tốt",
    de: "Starkes Funktionspaket und gutes Preis-Leistungs-Verhältnis",
    ar: "مجموعة ميزات قوية وقيمة جيدة",
  });

  const mentorText = localizeText(locale, {
    en: "Privacy-first alternative",
    vi: "Lựa chọn thay thế ưu tiên riêng tư",
    de: "Datenschutzorientierte Alternative",
    ar: "بديل يركز على الخصوصية",
  });

  return (
    <section
      dir="ltr"
      className="border-b border-slate-200 bg-[linear-gradient(135deg,#FFD1CC_0%,#FFE5DE_25%,#FFF3EB_55%,#FFF8F3_100%)] pt-10 font-semibold bg-[#f7f7f5]"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={`max-w-3xl ${isRTL ? "text-right" : "text-left"}`}>
            <div
              dir={isRTL ? "rtl" : "ltr"}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {t.hero.badge}
            </div>

            <h1
              dir={isRTL ? "rtl" : "ltr"}
              className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
            >
              {t.hero.title1}
              <span className="block text-emerald-700">{t.hero.title2}</span>
            </h1>

            <p
              dir={isRTL ? "rtl" : "ltr"}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              {t.hero.desc}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#top-vpns"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-950 bg-slate-950 px-7 text-base font-semibold text-white shadow-[0_0_18px_rgba(15,23,42,0.12)] transition-all duration-300 sm:h-[58px] hover:border-[#ff5a52]"
              >
                <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
                  <span className="absolute left-[-18%] top-0 h-full w-[140%] -translate-x-[118%] skew-x-[-20deg] bg-[#ff5a52] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                </span>

                <span
                  dir={isRTL ? "rtl" : "ltr"}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white"
                >
                  {t.hero.primaryCta}
                </span>
              </a>

              <a
                href="#compare"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 shadow-[0_0_18px_rgba(15,23,42,0.06)] transition-all duration-300 sm:h-[58px] hover:border-[#ff5a52]"
              >
                <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
                  <span className="absolute left-[-18%] top-0 h-full w-[140%] -translate-x-[118%] skew-x-[-20deg] bg-[#ff5a52] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                </span>

                <span
                  dir={isRTL ? "rtl" : "ltr"}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white"
                >
                  {t.hero.secondaryCta}
                </span>
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 ${isRTL ? "text-right" : "text-left"}`}>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  {t.hero.stats.rankedPicks}
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">5</div>
              </div>

              <div className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 ${isRTL ? "text-right" : "text-left"}`}>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  {t.hero.stats.guarantee}
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">
                  {guaranteeValue}
                </div>
              </div>

              <div className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 ${isRTL ? "text-right" : "text-left"}`}>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  {t.hero.stats.focus}
                </div>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="mt-2 text-2xl font-semibold text-slate-950"
                >
                  {t.hero.stats.clear}
                </div>
              </div>
            </div>
          </div>

          <div dir="ltr">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4">
              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="text-xs uppercase tracking-[0.22em] text-emerald-300"
                    >
                      {t.hero.editorPick}
                    </div>
                    <div className="mt-3 text-3xl font-semibold tracking-tight">
                      ExpressVPN
                    </div>
                    <p
                      dir={isRTL ? "rtl" : "ltr"}
                      className="mt-2 max-w-sm text-sm leading-6 text-slate-400"
                    >
                      {heroPickDescription}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl border border-white/10 bg-white/5 px-4 py-3 ${
                      isRTL ? "text-left" : "text-right"
                    }`}
                  >
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="text-xs text-slate-400"
                    >
                      {scoreLabel}
                    </div>
                    <div className="mt-1 text-3xl font-semibold">9.9</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${isRTL ? "text-right" : "text-left"}`}>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="text-slate-400"
                    >
                      {t.hero.bestFor}
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="mt-1 font-medium text-white"
                    >
                      {bestForValue}
                    </div>
                  </div>

                  <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${isRTL ? "text-right" : "text-left"}`}>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="text-slate-400"
                    >
                      {t.hero.startingPrice}
                    </div>
                    <div className="mt-1 font-medium text-white">$3.49/mo</div>
                  </div>

                  <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${isRTL ? "text-right" : "text-left"}`}>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="text-slate-400"
                    >
                      {t.hero.streaming}
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="mt-1 font-medium text-white"
                    >
                      {localizeText(locale, {
                        en: "Excellent",
                        vi: "Xuất sắc",
                        de: "Ausgezeichnet",
                        ar: "ممتاز",
                      })}
                    </div>
                  </div>

                  <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${isRTL ? "text-right" : "text-left"}`}>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="text-slate-400"
                    >
                      {t.hero.privacy}
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="mt-1 font-medium text-white"
                    >
                      {localizeText(locale, {
                        en: "High",
                        vi: "Cao",
                        de: "Hoch",
                        ar: "عالٍ",
                      })}
                    </div>
                  </div>
                </div>

                <a
                  href="#cta"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <span dir={isRTL ? "rtl" : "ltr"}>{t.hero.claimDeal}</span>
                </a>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-[1.25rem] border border-slate-200 bg-gradient-to-br from-violet-400/25 to-fuchsia-300/10 px-4 py-4">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="text-sm font-semibold text-slate-900">
                      ProtonVPN
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="mt-1 text-xs text-slate-500"
                    >
                      {protonText}
                    </div>
                  </div>
                  <div className={isRTL ? "text-left" : "text-right"}>
                    <div className="text-sm font-semibold text-slate-900">9.7</div>
                    <div className="text-xs text-slate-500">$3.39</div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-[1.25rem] border border-slate-200 bg-gradient-to-br from-sky-400/20 to-cyan-300/10 px-4 py-4">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="text-sm font-semibold text-slate-900">
                      VpnMentor
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="mt-1 text-xs text-slate-500"
                    >
                      {mentorText}
                    </div>
                  </div>
                  <div className={isRTL ? "text-left" : "text-right"}>
                    <div className="text-sm font-semibold text-slate-900">9.3</div>
                    <div className="text-xs text-slate-500">$4.49</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TechStackPreview />
    </section>
  );
}