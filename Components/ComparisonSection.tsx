"use client";

import { useMemo, useState } from "react";
import type { Dictionary, Locale } from "./i18n";

type VendorId = "express" | "proton" | "VpnMentor" | "cyberghost" | "pia";

type Vendor = {
  id: VendorId;
  name: string;
  short: string;
  accent: string;
  cta: string;
  note: string;
};

type RowValue = boolean | string;

type FeatureRow = {
  label: string;
  values: Record<VendorId, RowValue>;
};

type ComparisonSectionProps = {
  t: Dictionary;
  locale: Locale;
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="m4.5 12.75 6 6 9-13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M6 18 18 6M6 6l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function renderCellValue(value: RowValue) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 sm:h-8 sm:w-8">
        <CheckIcon />
      </span>
    ) : (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-500 sm:h-8 sm:w-8">
        <XIcon />
      </span>
    );
  }

  return (
    <span className="text-[13px] font-medium text-slate-700 sm:text-sm">
      {value}
    </span>
  );
}

function localizeText(
  locale: Locale,
  value: { en: string; vi: string; de: string; ar: string }
) {
  if (locale === "vi") return value.vi;
  if (locale === "de") return value.de;
  if (locale === "ar") return value.ar;
  return value.en;
}

export function ComparisonSection({
  t,
  locale,
}: ComparisonSectionProps) {
  const isRTL = locale === "ar";

  const vendors: Vendor[] = useMemo(
    () => [
      {
        id: "express",
        name: "ExpressVPN",
        short: "Express",
        accent: "bg-emerald-500",
        cta: localizeText(locale, {
          en: "Claim deal",
          vi: "Nhận ưu đãi",
          de: "Angebot sichern",
          ar: "احصل على العرض",
        }),
        note: localizeText(locale, {
          en: "Top pick",
          vi: "Lựa chọn số 1",
          de: "Top-Auswahl",
          ar: "الخيار الأفضل",
        }),
      },
      {
        id: "proton",
        name: "ProtonVPN",
        short: "Proton",
        accent: "bg-violet-500",
        cta: localizeText(locale, {
          en: "View offer",
          vi: "Xem ưu đãi",
          de: "Angebot ansehen",
          ar: "اعرض العرض",
        }),
        note: localizeText(locale, {
          en: "Privacy-first",
          vi: "Ưu tiên riêng tư",
          de: "Datenschutz zuerst",
          ar: "الخصوصية أولاً",
        }),
      },
      {
        id: "VpnMentor",
        name: "VpnMentor",
        short: "VpnMentor",
        accent: "bg-sky-500",
        cta: localizeText(locale, {
          en: "See plans",
          vi: "Xem gói",
          de: "Tarife ansehen",
          ar: "اعرض الخطط",
        }),
        note: localizeText(locale, {
          en: "Editorial pick",
          vi: "Biên tập chọn",
          de: "Redaktionswahl",
          ar: "اختيار التحرير",
        }),
      },
      {
        id: "cyberghost",
        name: "CyberGhost",
        short: "CyberGhost",
        accent: "bg-amber-500",
        cta: localizeText(locale, {
          en: "Compare plans",
          vi: "So sánh gói",
          de: "Tarife vergleichen",
          ar: "قارن الخطط",
        }),
        note: localizeText(locale, {
          en: "Best for value",
          vi: "Giá trị tốt",
          de: "Bestes Preis-Leistungs-Verhältnis",
          ar: "أفضل قيمة",
        }),
      },
      {
        id: "pia",
        name: "Private Internet Access",
        short: "PIA",
        accent: "bg-slate-500",
        cta: localizeText(locale, {
          en: "Open review",
          vi: "Mở review",
          de: "Bewertung öffnen",
          ar: "افتح المراجعة",
        }),
        note: localizeText(locale, {
          en: "Budget pick",
          vi: "Tiết kiệm",
          de: "Budget-Tipp",
          ar: "الخيار الاقتصادي",
        }),
      },
    ],
    [locale]
  );

  const rows: FeatureRow[] = useMemo(
    () => [
      {
        label: localizeText(locale, {
          en: "Audited, no-logs VPN",
          vi: "VPN no-logs đã được kiểm toán",
          de: "Geprüftes No-Logs-VPN",
          ar: "VPN بدون سجلات وتم تدقيقه",
        }),
        values: {
          express: true,
          proton: true,
          VpnMentor: true,
          cyberghost: true,
          pia: true,
        },
      },
      {
        label: localizeText(locale, {
          en: "Ad blocker",
          vi: "Chặn quảng cáo",
          de: "Werbeblocker",
          ar: "حظر الإعلانات",
        }),
        values: {
          express: true,
          proton: true,
          VpnMentor: true,
          cyberghost: true,
          pia: true,
        },
      },
      {
        label: localizeText(locale, {
          en: "Malware blocker",
          vi: "Chặn phần mềm độc hại",
          de: "Malware-Schutz",
          ar: "حظر البرمجيات الخبيثة",
        }),
        values: {
          express: true,
          proton: true,
          VpnMentor: true,
          cyberghost: true,
          pia: false,
        },
      },
      {
        label: localizeText(locale, {
          en: "Best for streaming",
          vi: "Tốt nhất cho streaming",
          de: "Am besten für Streaming",
          ar: "الأفضل للبث",
        }),
        values: {
          express: localizeText(locale, {
            en: "Excellent",
            vi: "Xuất sắc",
            de: "Ausgezeichnet",
            ar: "ممتاز",
          }),
          proton: localizeText(locale, {
            en: "Very good",
            vi: "Rất tốt",
            de: "Sehr gut",
            ar: "جيد جدًا",
          }),
          VpnMentor: localizeText(locale, {
            en: "Excellent",
            vi: "Xuất sắc",
            de: "Ausgezeichnet",
            ar: "ممتاز",
          }),
          cyberghost: localizeText(locale, {
            en: "Very good",
            vi: "Rất tốt",
            de: "Sehr gut",
            ar: "جيد جدًا",
          }),
          pia: localizeText(locale, {
            en: "Good",
            vi: "Tốt",
            de: "Gut",
            ar: "جيد",
          }),
        },
      },
      {
        label: localizeText(locale, {
          en: "Ease of use",
          vi: "Dễ sử dụng",
          de: "Benutzerfreundlichkeit",
          ar: "سهولة الاستخدام",
        }),
        values: {
          express: localizeText(locale, {
            en: "Excellent",
            vi: "Xuất sắc",
            de: "Ausgezeichnet",
            ar: "ممتاز",
          }),
          proton: localizeText(locale, {
            en: "Very good",
            vi: "Rất tốt",
            de: "Sehr gut",
            ar: "جيد جدًا",
          }),
          VpnMentor: localizeText(locale, {
            en: "Very good",
            vi: "Rất tốt",
            de: "Sehr gut",
            ar: "جيد جدًا",
          }),
          cyberghost: localizeText(locale, {
            en: "Excellent",
            vi: "Xuất sắc",
            de: "Ausgezeichnet",
            ar: "ممتاز",
          }),
          pia: localizeText(locale, {
            en: "Good",
            vi: "Tốt",
            de: "Gut",
            ar: "جيد",
          }),
        },
      },
      {
        label: localizeText(locale, {
          en: "Jurisdiction",
          vi: "Khu vực pháp lý",
          de: "Gerichtsstand",
          ar: "الاختصاص القضائي",
        }),
        values: {
          express: "BVI",
          proton: "Switzerland",
          VpnMentor: "Panama",
          cyberghost: "Romania",
          pia: "US",
        },
      },
      {
        label: localizeText(locale, {
          en: "Starting price",
          vi: "Giá khởi điểm",
          de: "Startpreis",
          ar: "السعر الابتدائي",
        }),
        values: {
          express: "$3.49/mo",
          proton: "$4.99/mo",
          VpnMentor: "$3.99/mo",
          cyberghost: "$2.19/mo",
          pia: "$2.03/mo",
        },
      },
    ],
    [locale]
  );

  const primaryVendor = vendors[0];
  const comparisonVendors = useMemo(() => vendors.slice(1), [vendors]);

  const [selectedMobileVendor, setSelectedMobileVendor] = useState<VendorId>(
    comparisonVendors[0].id
  );

  const isVisibleOnMobile = (vendorId: VendorId) =>
    vendorId === primaryVendor.id || vendorId === selectedMobileVendor;

  const getVendorColumnClass = (vendorId: VendorId) =>
    isVisibleOnMobile(vendorId) ? "table-cell" : "hidden md:table-cell";

  const recommendationText = localizeText(locale, {
    en: "Best starting point if you want the strongest mix of speed, usability, and trust signals.",
    vi: "Điểm bắt đầu tốt nhất nếu bạn muốn sự cân bằng mạnh nhất giữa tốc độ, tính dễ dùng và độ tin cậy.",
    de: "Der beste Ausgangspunkt, wenn du die stärkste Kombination aus Geschwindigkeit, Benutzerfreundlichkeit und Vertrauenssignalen suchst.",
    ar: "أفضل نقطة بداية إذا كنت تريد أقوى مزيج من السرعة وسهولة الاستخدام وعوامل الثقة.",
  });
  const headingFontFamily =
    locale === "vi"
      ? "Arial, Helvetica, sans-serif"
      : "Georgia, ui-serif, serif";
  return (
    <section
      id="compare"
      dir="ltr"
      className="relative overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
      style={{ fontFamily: headingFontFamily }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-violet-100/40 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16 xl:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8">
          <div className={`max-w-3xl ${isRTL ? "text-right" : "text-left"}`}>
            <p
              dir={isRTL ? "rtl" : "ltr"}
              className="text-xs  uppercase tracking-[0.18em] text-emerald-700 sm:text-xl font-bold"
            >
              {t.compare.eyebrow}
            </p>

            <h2
              dir={isRTL ? "rtl" : "ltr"}
              className="mt-3 text-3xl  tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-bold"
              
            >
              {t.compare.title}
            </h2>

            <p
              dir={isRTL ? "rtl" : "ltr"}
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg"
            >
              {t.compare.desc}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_100%)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:rounded-[1.75rem] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className={`min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-[11px]  uppercase tracking-[0.18em] text-emerald-700 sm:text-xs"
                >
                  {t.compare.topRecommendation}
                </div>

                <div className="mt-2 text-2xl  text-slate-900 sm:text-3xl">
                  {primaryVendor.name}
                </div>

                <p
                  dir={isRTL ? "rtl" : "ltr"}
                  className="mt-2 text-sm leading-6 text-slate-600"
                >
                  {recommendationText}
                </p>
              </div>

              <span
                dir={isRTL ? "rtl" : "ltr"}
                className="inline-flex w-fit rounded-full bg-emerald-600 px-3 py-1 text-xs  text-white"
              >
                {t.compare.editorsPick}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className={`rounded-2xl border border-emerald-100 bg-white p-4 ${isRTL ? "text-right" : "text-left"}`}>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
                >
                  {t.compare.bestFor}
                </div>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="mt-1  text-slate-900"
                >
                  {t.compare.overallValue}
                </div>
              </div>

              <div className={`rounded-2xl border border-emerald-100 bg-white p-4 ${isRTL ? "text-right" : "text-left"}`}>
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
                >
                  {t.compare.startingAt}
                </div>
                <div className="mt-1  text-slate-900">$3.49/mo</div>
              </div>
            </div>
          </div>
        </div>

        <div
          dir="ltr"
          className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center md:hidden"
        >
          <label
            htmlFor="compare-mobile-vendor"
            dir={isRTL ? "rtl" : "ltr"}
            className="text-sm font-medium text-slate-600"
          >
            {t.compare.compareWith}
          </label>

          <div className="relative inline-flex">
            <select
              id="compare-mobile-vendor"
              value={selectedMobileVendor}
              onChange={(e) =>
                setSelectedMobileVendor(e.target.value as VendorId)
              }
              className="appearance-none rounded-full border border-slate-200 bg-slate-100 py-2 pl-4 pr-10 text-sm  text-slate-800 outline-none transition focus:border-emerald-500"
            >
              {comparisonVendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
              ▾
            </span>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:rounded-[1.9rem]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse md:table-fixed">
              <caption className="sr-only">
                {localizeText(locale, {
                  en: "VPN comparison table",
                  vi: "Bảng so sánh VPN",
                  de: "VPN-Vergleichstabelle",
                  ar: "جدول مقارنة VPN",
                })}
              </caption>

              <colgroup>
                <col className="w-[40%] md:w-[22%]" />
                {vendors.map((vendor) => (
                  <col
                    key={`col-${vendor.id}`}
                    className={
                      isVisibleOnMobile(vendor.id)
                        ? "w-[30%] md:w-auto"
                        : "hidden md:table-column"
                    }
                  />
                ))}
              </colgroup>

              <thead className="bg-slate-950">
                <tr>
                  <th
                    className={`px-3 pb-3 pt-5 align-middle text-sm  text-slate-200 md:px-4 md:pb-4 md:pt-8 lg:px-6 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <span dir={isRTL ? "rtl" : "ltr"}>{t.compare.criteria}</span>
                  </th>

                  {vendors.map((vendor) => {
                    const isPrimary = vendor.id === primaryVendor.id;

                    return (
                      <th
                        key={vendor.id}
                        scope="col"
                        className={`${getVendorColumnClass(
                          vendor.id
                        )} px-2 pb-3 pt-5 text-center align-middle md:px-3 md:pb-4 md:pt-8 lg:px-4`}
                      >
                        <div
                          className={`mx-auto flex min-h-[88px] w-full flex-col items-center justify-center rounded-[1.15rem] border px-3 py-3 text-center md:min-h-[104px] md:rounded-[1.35rem] md:px-4 ${
                            isPrimary
                              ? "border-emerald-400/30 bg-emerald-500/10"
                              : "border-white/10 bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${vendor.accent}`}
                            />
                            <span className="text-sm  text-white md:text-base">
                              <span className="md:hidden">{vendor.short}</span>
                              <span className="hidden md:inline">
                                {vendor.name}
                              </span>
                            </span>
                          </div>

                          <div
                            dir={isRTL ? "rtl" : "ltr"}
                            className={`mt-2 text-[10px]  uppercase tracking-[0.16em] md:text-[11px] md:tracking-[0.18em] ${
                              isPrimary ? "text-emerald-200" : "text-slate-400"
                            }`}
                          >
                            {isPrimary ? t.compare.topPick : vendor.note}
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={row.label}
                    className={rowIndex % 2 === 0 ? "bg-slate-50/80" : "bg-white"}
                  >
                    <th
                      scope="row"
                      className={`border-t border-slate-200 px-3 py-3 align-middle text-[13px] font-medium leading-5 text-slate-800 md:px-4 md:text-sm md:leading-6 lg:px-6 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <span dir={isRTL ? "rtl" : "ltr"}>{row.label}</span>
                    </th>

                    {vendors.map((vendor) => {
                      const isPrimary = vendor.id === primaryVendor.id;

                      return (
                        <td
                          key={`${row.label}-${vendor.id}`}
                          className={`${getVendorColumnClass(
                            vendor.id
                          )} border-t border-slate-200 px-2 py-3 text-center align-middle md:px-3 md:py-4 lg:px-4 ${
                            isPrimary ? "bg-emerald-50/50" : ""
                          }`}
                        >
                          {renderCellValue(row.values[vendor.id])}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                <tr className="bg-white">
                  <td className="border-t border-slate-200 px-3 py-4 md:px-4 md:py-6 lg:px-6" />

                  {vendors.map((vendor) => {
                    const isPrimary = vendor.id === primaryVendor.id;

                    return (
                      <td
                        key={`cta-${vendor.id}`}
                        className={`${getVendorColumnClass(
                          vendor.id
                        )} border-t border-slate-200 px-2 py-4 text-center md:px-3 md:py-6 lg:px-4 ${
                          isPrimary ? "bg-emerald-50/50" : ""
                        }`}
                      >
                        <a
                          href="#cta"
                          className={`inline-flex w-full items-center justify-center rounded-full px-3 py-2 text-xs  transition sm:text-sm ${
                            isPrimary
                              ? "bg-emerald-600 text-white hover:bg-emerald-700"
                              : "border border-slate-300 bg-white text-slate-800 hover:border-slate-900"
                          }`}
                        >
                          <span dir={isRTL ? "rtl" : "ltr"}>{vendor.cta}</span>
                        </a>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}