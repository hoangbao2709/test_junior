"use client";

import type { Dictionary, Locale } from "./i18n";

type CtaSectionProps = {
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

export function CtaSection({ t, locale }: CtaSectionProps) {
  const isRTL = locale === "ar";

  const recommendedText = localizeText(locale, {
    en: "Strong overall choice for speed, ease of use, and trust.",
    vi: "Lựa chọn tổng thể mạnh về tốc độ, độ dễ dùng và độ tin cậy.",
    de: "Eine starke Gesamtwahl für Geschwindigkeit, Benutzerfreundlichkeit und Vertrauen.",
    ar: "خيار قوي بشكل عام من حيث السرعة وسهولة الاستخدام والثقة.",
  });

  const bestStartingText = localizeText(locale, {
    en: "Fast setup, polished apps, and excellent all-around value.",
    vi: "Thiết lập nhanh, ứng dụng hoàn thiện tốt và giá trị tổng thể rất cao.",
    de: "Schnelle Einrichtung, ausgereifte Apps und ein hervorragendes Gesamtpaket.",
    ar: "إعداد سريع وتطبيقات مصقولة وقيمة ممتازة بشكل عام.",
  });
  const headingFontFamily =
    locale === "vi"
      ? "Arial, Helvetica, sans-serif"
      : "Georgia, ui-serif, serif";
  return (
    <section id="cta" dir={isRTL ? "rtl" : "ltr"} className="w-full" style={{ fontFamily: headingFontFamily }} >
      <div>
        <div className="relative overflow-hidden border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#111827_55%,#0b1220_100%)] px-4 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:px-6 sm:py-10 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl sm:-left-20 sm:h-56 sm:w-56" />
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl sm:h-64 sm:w-64" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
            <div className={`max-w-2xl ${isRTL ? "text-right" : "text-left"}`}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 sm:text-xl font-bold" >
                {t.cta.eyebrow}
              </p>

              <h2
                className="mt-3 text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl"
                
              >
                {t.cta.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
                {t.cta.desc}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-2 text-sm text-slate-400 sm:grid-cols-3 sm:gap-3">
                {t.cta.tags.map((tag: string) => (
                  <div
                    key={tag}
                    className={`rounded-full border border-white/10 flex items-center justify-center bg-white/5 px-4 py-2 text-center ${
                      isRTL ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur sm:rounded-[1.5rem] sm:p-5 lg:rounded-[1.75rem] lg:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className={`min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-emerald-300 sm:text-xs">
                    {t.cta.recommendedPick}
                  </div>

                  <div className="mt-2 text-2xl text-white sm:text-3xl">
                    ExpressVPN
                  </div>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                    {recommendedText}
                  </p>
                </div>

                <div
                  className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:w-auto sm:min-w-[110px] ${
                    isRTL ? "text-right sm:text-left" : "text-left sm:text-right"
                  }`}
                >
                  <div className="text-[11px] uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
                    {t.cta.score}
                  </div>
                  <div className="mt-1 text-2xl text-white">9.9</div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className={`min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-emerald-300 sm:text-xs">
                      {t.cta.bestStartingPoint}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white">
                      {bestStartingText}
                    </div>
                  </div>

                  <div className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    {t.cta.guarantee}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#top-vpns"
                  className="inline-flex w-full flex-1 items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm text-slate-950 transition hover:bg-emerald-400 sm:px-6 sm:py-3.5"
                >
                  {t.cta.viewDeals}
                </a>

                <a
                  href="#compare"
                  className="inline-flex w-full flex-1 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm text-white transition hover:border-white/45 hover:bg-white/5 sm:px-6 sm:py-3.5"
                >
                  {t.cta.compareAgain}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}