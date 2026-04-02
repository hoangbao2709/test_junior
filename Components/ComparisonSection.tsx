"use client";

import { useMemo, useState } from "react";

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

const vendors: Vendor[] = [
  {
    id: "express",
    name: "ExpressVPN",
    short: "Express",
    accent: "bg-emerald-500",
    cta: "Claim deal",
    note: "Top pick",
  },
  {
    id: "proton",
    name: "ProtonVPN",
    short: "Proton",
    accent: "bg-violet-500",
    cta: "View offer",
    note: "Privacy-first",
  },
  {
    id: "VpnMentor",
    name: "VpnMentor",
    short: "VpnMentor",
    accent: "bg-sky-500",
    cta: "See plans",
    note: "Editorial pick",
  },
  {
    id: "cyberghost",
    name: "CyberGhost",
    short: "CyberGhost",
    accent: "bg-amber-500",
    cta: "Compare plans",
    note: "Best for value",
  },
  {
    id: "pia",
    name: "Private Internet Access",
    short: "PIA",
    accent: "bg-slate-500",
    cta: "Open review",
    note: "Budget pick",
  },
];

const rows: FeatureRow[] = [
  {
    label: "Audited, no-logs VPN",
    values: {
      express: true,
      proton: true,
      VpnMentor: true,
      cyberghost: true,
      pia: true,
    },
  },
  {
    label: "Ad blocker",
    values: {
      express: true,
      proton: true,
      VpnMentor: true,
      cyberghost: true,
      pia: true,
    },
  },
  {
    label: "Malware blocker",
    values: {
      express: true,
      proton: true,
      VpnMentor: true,
      cyberghost: true,
      pia: false,
    },
  },
  {
    label: "Best for streaming",
    values: {
      express: "Excellent",
      proton: "Very good",
      VpnMentor: "Excellent",
      cyberghost: "Very good",
      pia: "Good",
    },
  },
  {
    label: "Ease of use",
    values: {
      express: "Excellent",
      proton: "Very good",
      VpnMentor: "Very good",
      cyberghost: "Excellent",
      pia: "Good",
    },
  },
  {
    label: "Jurisdiction",
    values: {
      express: "BVI",
      proton: "Switzerland",
      VpnMentor: "Panama",
      cyberghost: "Romania",
      pia: "US",
    },
  },
  {
    label: "Starting price",
    values: {
      express: "$3.49/mo",
      proton: "$4.99/mo",
      VpnMentor: "$3.99/mo",
      cyberghost: "$2.19/mo",
      pia: "$2.03/mo",
    },
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
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

  return <span className="text-[13px] font-medium text-slate-700 sm:text-sm">{value}</span>;
}

export function ComparisonSection() {
  const primaryVendor = vendors[0];
  const comparisonVendors = useMemo(() => vendors.slice(1), []);
  const [selectedMobileVendor, setSelectedMobileVendor] = useState<VendorId>(comparisonVendors[0].id);

  const isVisibleOnMobile = (vendorId: VendorId) =>
    vendorId === primaryVendor.id || vendorId === selectedMobileVendor;

  const getVendorColumnClass = (vendorId: VendorId) =>
    isVisibleOnMobile(vendorId) ? "table-cell" : "hidden md:table-cell";

  return (
    <section
      id="compare"
      className="relative overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-violet-100/40 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16 xl:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
              Comparison
            </p>

            <h2
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Georgia, ui-serif, serif" }}
            >
              Compare top VPNs in one cleaner section
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
              Instead of splitting content into multiple comparison blocks, this section gives
              users a faster overview with one featured recommendation and one clear table below.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_100%)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:rounded-[1.75rem] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-xs">
                  Top recommendation
                </div>

                <div className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {primaryVendor.name}
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Best starting point if you want the strongest mix of speed, usability,
                  and trust signals.
                </p>
              </div>

              <span className="inline-flex w-fit rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                Editor’s pick
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                  Best for
                </div>
                <div className="mt-1 font-semibold text-slate-900">Overall value</div>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                  Starting at
                </div>
                <div className="mt-1 font-semibold text-slate-900">$3.49/mo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center md:hidden">
          <label htmlFor="compare-mobile-vendor" className="text-sm font-medium text-slate-600">
            Compare with
          </label>

          <div className="relative inline-flex">
            <select
              id="compare-mobile-vendor"
              value={selectedMobileVendor}
              onChange={(e) => setSelectedMobileVendor(e.target.value as VendorId)}
              className="appearance-none rounded-full border border-slate-200 bg-slate-100 py-2 pl-4 pr-10 text-sm font-semibold text-slate-800 outline-none transition focus:border-emerald-500"
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
              <caption className="sr-only">VPN comparison table</caption>

              <colgroup>
                <col className="w-[40%] md:w-[22%]" />
                {vendors.map((vendor) => (
                  <col
                    key={`col-${vendor.id}`}
                    className={isVisibleOnMobile(vendor.id) ? "w-[30%] md:w-auto" : "hidden md:table-column"}
                  />
                ))}
              </colgroup>

              <thead className="bg-slate-950">
                <tr>
                  <th className="px-3 pb-3 pt-5 text-left align-middle text-sm font-semibold text-slate-200 md:px-4 md:pb-4 md:pt-8 lg:px-6">
                    Criteria
                  </th>

                  {vendors.map((vendor) => {
                    const isPrimary = vendor.id === primaryVendor.id;

                    return (
                      <th
                        key={vendor.id}
                        scope="col"
                        className={`${getVendorColumnClass(vendor.id)} px-2 pb-3 pt-5 text-center align-middle md:px-3 md:pb-4 md:pt-8 lg:px-4`}
                      >
                        <div
                          className={`mx-auto flex min-h-[88px] w-full flex-col items-center justify-center rounded-[1.15rem] border px-3 py-3 text-center md:min-h-[104px] md:rounded-[1.35rem] md:px-4 ${
                            isPrimary
                              ? "border-emerald-400/30 bg-emerald-500/10"
                              : "border-white/10 bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full ${vendor.accent}`} />
                            <span className="text-sm font-semibold text-white md:text-base">
                              <span className="md:hidden">{vendor.short}</span>
                              <span className="hidden md:inline">{vendor.name}</span>
                            </span>
                          </div>

                          <div
                            className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] md:text-[11px] md:tracking-[0.18em] ${
                              isPrimary ? "text-emerald-200" : "text-slate-400"
                            }`}
                          >
                            {isPrimary ? "Top pick" : vendor.note}
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={row.label} className={rowIndex % 2 === 0 ? "bg-slate-50/80" : "bg-white"}>
                    <th
                      scope="row"
                      className="border-t border-slate-200 px-3 py-3 text-left align-middle text-[13px] font-medium leading-5 text-slate-800 md:px-4 md:text-sm md:leading-6 lg:px-6"
                    >
                      {row.label}
                    </th>

                    {vendors.map((vendor) => {
                      const isPrimary = vendor.id === primaryVendor.id;

                      return (
                        <td
                          key={`${row.label}-${vendor.id}`}
                          className={`${getVendorColumnClass(vendor.id)} border-t border-slate-200 px-2 py-3 text-center align-middle md:px-3 md:py-4 lg:px-4 ${
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
                        className={`${getVendorColumnClass(vendor.id)} border-t border-slate-200 px-2 py-4 text-center md:px-3 md:py-6 lg:px-4 ${
                          isPrimary ? "bg-emerald-50/50" : ""
                        }`}
                      >
                        <a
                          href="#cta"
                          className={`inline-flex w-full items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                            isPrimary
                              ? "bg-emerald-600 text-white hover:bg-emerald-700"
                              : "border border-slate-300 bg-white text-slate-800 hover:border-slate-900"
                          }`}
                        >
                          {vendor.cta}
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