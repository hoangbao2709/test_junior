"use client";

import { useEffect, useMemo, useState } from "react";
import { CtaSection } from "@/Components/CtaSection";
import { ComparisonSection } from "@/Components/ComparisonSection";
import { HeroSection } from "@/Components/hero";
import { HomeHeader } from "@/Components/HomeHeader";
import { TopVpnSection } from "@/Components/TopVpnSection";
import { TrustSection } from "@/Components/TrustSection";
import { Locale, locales } from "@/Components/i18n";
import { getDictionary } from "@/Components/helper";
export default function TopVpnHomepage() {
    const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved) setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    const current = locales.find((item) => item.code === locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = current?.dir ?? "ltr";
  }, [locale]);

  const t = useMemo(() => getDictionary(locale), [locale]);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HomeHeader locale={locale} setLocale={setLocale} t={t} />

      <main className=" ">
        <HeroSection locale={locale} t={t} />
        <TopVpnSection locale={locale} t={t} />
        <ComparisonSection locale={locale} t={t} />
        <TrustSection locale={locale} t={t} />
        <CtaSection locale={locale} t={t} />
      </main>
    </div>
  );
}
