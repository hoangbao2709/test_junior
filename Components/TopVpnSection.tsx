"use client";

import { getVpnList } from "./data";
import type { Dictionary, Locale } from "./i18n";

type TopVpnSectionProps = {
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

export function TopVpnSection({ t, locale }: TopVpnSectionProps) {
  const vpnList = getVpnList(locale);
  const isRTL = locale === "ar";

  const guaranteeValue = localizeText(locale, {
    en: "30 days",
    vi: "30 ngày",
    de: "30 Tage",
    ar: "30 يومًا",
  });
  const headingFontFamily =
    locale === "vi"
      ? "Arial, Helvetica, sans-serif"
      : "Georgia, ui-serif, serif";
  return (
    <section
      id="top-vpns"
      dir="ltr"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"
      style={{ fontFamily: headingFontFamily }}
    >
      <div
        className={` flex-col gap-4 md:flex-row md:items-end md:justify-between ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div>
          <p
            dir={isRTL ? "rtl" : "ltr"}
            className="text-sm  uppercase tracking-[0.18em] text-emerald-700 sm:text-xl font-bold"
          >
            {t.topVpn.eyebrow}
          </p>

          <h2
            dir={isRTL ? "rtl" : "ltr"}
            className="mt-3 text-4xl  tracking-tight text-slate-900 font-bold"
          >
            {t.topVpn.title}
          </h2>
        </div>

        <p
          dir={isRTL ? "rtl" : "ltr"}
          className="max-w-2xl text-base leading-7 text-slate-600"
        >
          {t.topVpn.desc}
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {vpnList.map((vpn) => (
          <article
            key={vpn.name}
            className={`overflow-hidden border border-slate-200 bg-white bg-gradient-to-br shadow-lg shadow-slate-100 ${vpn.accent}`}
          >
            <div className="grid gap-0 lg:grid-cols-[120px_1.15fr_0.9fr_180px]">
              <div
                className={`flex items-center justify-center border-b border-slate-200 bg-gradient-to-br p-6 lg:border-b-0 lg:border-r ${vpn.accent}`}
              >
                <div className="text-center">
                  <div
                    dir={isRTL ? "rtl" : "ltr"}
                    className="text-xs uppercase tracking-[0.2em] text-slate-500"
                  >
                    {t.topVpn.rank}
                  </div>
                  <div className="mt-2 text-4xl  text-slate-900">
                    #{vpn.rank}
                  </div>
                </div>
              </div>

              <div
                className={`border-b border-slate-200 p-6 lg:border-b-0 lg:border-r ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`flex flex-wrap items-center gap-3 ${
                    isRTL ? "justify-end" : ""
                  }`}
                >
                  <h3 className="text-2xl  text-slate-900">
                    {vpn.name}
                  </h3>
                  <span
                    dir={isRTL ? "rtl" : "ltr"}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs  text-slate-700"
                  >
                    {vpn.badge}
                  </span>
                </div>

                <p
                  dir={isRTL ? "rtl" : "ltr"}
                  className="mt-3 max-w-2xl text-base leading-7 text-slate-600"
                >
                  {vpn.summary}
                </p>

                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    isRTL ? "justify-end" : ""
                  }`}
                >
                  {vpn.highlights.map((item) => (
                    <span
                      key={item}
                      dir={isRTL ? "rtl" : "ltr"}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`bg-gradient-to-br p-6 ${vpn.accent}`}>
                <div className="rounded-[1.25rem] border border-white/50 bg-white/80 p-5 backdrop-blur">
                  <div
                    dir={isRTL ? "rtl" : "ltr"}
                    className={`text-sm text-slate-500 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t.topVpn.editorScore}
                  </div>

                  <div className="mt-1 text-3xl  text-slate-900">
                    {vpn.score}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className={`rounded-xl bg-white p-3 ${isRTL ? "text-right" : "text-left"}`}>
                      <div
                        dir={isRTL ? "rtl" : "ltr"}
                        className="text-slate-500"
                      >
                        {t.topVpn.price}
                      </div>
                      <div className="mt-1  text-slate-900">
                        {vpn.price}
                      </div>
                    </div>

                    <div className={`rounded-xl bg-white p-3 ${isRTL ? "text-right" : "text-left"}`}>
                      <div
                        dir={isRTL ? "rtl" : "ltr"}
                        className="text-slate-500"
                      >
                        {t.topVpn.guarantee}
                      </div>
                      <div
                        dir={isRTL ? "rtl" : "ltr"}
                        className="mt-1  text-slate-900"
                      >
                        {guaranteeValue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-stretch justify-center gap-3 p-6">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-3.5 text-sm  text-white transition hover:bg-emerald-700"
                >
                  <span dir={isRTL ? "rtl" : "ltr"}>{vpn.cta}</span>
                </a>

                <button className="cursor-pointer rounded-full border border-slate-300 px-5 py-3.5 text-sm  text-slate-800 transition hover:border-slate-900">
                  <span dir={isRTL ? "rtl" : "ltr"}>{t.topVpn.readReview}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}