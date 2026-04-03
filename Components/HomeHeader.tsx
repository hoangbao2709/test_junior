"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary, Locale } from "./i18n";
import { locales } from "./i18n";

const menu = [
  { key: "topVpns", id: "top-vpns" },
  { key: "compare", id: "compare" },
  { key: "trust", id: "trust" },
] as const;

type HomeHeaderProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

function getLocaleCodeLabel(code: Locale) {
  if (code === "zh-CN") return "CN";
  if (code === "ar") return "SA";
  return code.slice(0, 2).toUpperCase();
}

export function HomeHeader({
  locale,
  setLocale,
  t,
}: HomeHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top-vpns");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const lastScrollY = useRef(0);
  const languageRef = useRef<HTMLDivElement | null>(null);

  const currentLocale = useMemo(() => {
    return locales.find((item) => item.code === locale) ?? locales[0];
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      if (mobileMenuOpen && currentScrollY > lastScrollY.current + 8) {
        setMobileMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = ["top-vpns", "compare", "trust", "cta"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          if (visibleSection.target.id === "cta") {
            setActiveSection("trust");
          } else {
            setActiveSection(visibleSection.target.id);
          }
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-18% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = window.innerWidth < 1024 ? 104 : 120;
    const elementTop = section.getBoundingClientRect().top + window.scrollY;
    const offsetTop = elementTop - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
    setLanguageOpen(false);
  };

  const handleLanguageChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setLanguageOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        dir="ltr"
        className={`fixed inset-x-0 z-[1000] transition-all duration-300 ${
          scrolled ? "px-3 sm:px-4" : "px-0"
        }`}
        style={{ top: scrolled ? 12 : 0 }}
      >
        <div
          className={`mx-auto w-full max-w-7xl border font-semibold transition-all duration-300 ${
            scrolled
              ? "rounded-2xl border-white/10 bg-[#0f172a]/80 shadow-[0_0_30px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:rounded-[28px]"
              : "rounded-2xl border-slate-200/60 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:rounded-[28px]"
          }`}
        >
          <div
            dir="ltr"
            className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-6"
          >
            <button
              type="button"
              onClick={() => handleScrollToSection("top-vpns")}
              className={`min-w-0 shrink text-left font-bold tracking-tight transition duration-300 ${
                scrolled
                  ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.12)]"
                  : "text-slate-900"
              }`}
            >
              <span className="block text-base sm:text-lg lg:text-2xl">
                <span className="sm:hidden">Top VPN 2026</span>
                <span className="hidden sm:inline">{t.header.brand}</span>
              </span>
            </button>

            <div
              dir="ltr"
              className="hidden min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:flex"
            >
              <div
                className={`hidden shrink-0 items-center justify-center border text-sm transition-all duration-300 xl:flex ${
                  scrolled
                    ? "h-12 w-12 rounded-2xl border-slate-700 bg-slate-800 text-emerald-400"
                    : "h-12 w-12 rounded-2xl border-slate-200 bg-white text-emerald-700"
                }`}
              >
                VPN
              </div>

              <nav className="min-w-0 max-w-full">
                <div dir="ltr" className="flex items-center gap-1.5 xl:gap-2">
                  {menu.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleScrollToSection(item.id)}
                        className={`group relative shrink-0 cursor-pointer rounded-2xl px-3 py-2 text-xs font-medium tracking-[0.08em] transition-all duration-300 xl:px-4 xl:text-sm ${
                          isActive
                            ? scrolled
                              ? "bg-emerald-500/15 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.16)]"
                              : "bg-emerald-600/10 text-emerald-700 shadow-[0_0_18px_rgba(5,150,105,0.14)]"
                            : scrolled
                              ? "text-white/85 hover:bg-emerald-500/10 hover:text-white"
                              : "text-slate-700 hover:bg-emerald-600/10 hover:text-slate-900"
                        }`}
                      >
                        <span className="relative z-10">
                          {t.header.menu[item.key]}
                        </span>

                        <span
                          className={`pointer-events-none absolute inset-0 rounded-2xl blur-md transition-all duration-300 ${
                            isActive
                              ? scrolled
                                ? "bg-emerald-400/10 opacity-100"
                                : "bg-emerald-500/10 opacity-100"
                              : "bg-emerald-500/10 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="relative shrink-0" ref={languageRef}>
                <button
                  type="button"
                  dir="ltr"
                  aria-label={t.header.language}
                  aria-expanded={languageOpen}
                  aria-haspopup="menu"
                  onClick={() => setLanguageOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    scrolled
                      ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                      : "border border-slate-200 bg-white text-slate-800 hover:border-slate-300"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      languageOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>

                  <span
                    dir={currentLocale.dir}
                    className="hidden xl:inline"
                  >
                    {currentLocale.nativeLabel}
                  </span>

                  <span className="text-xs font-bold tracking-[0.08em] opacity-80">
                    {getLocaleCodeLabel(currentLocale.code)}
                  </span>
                </button>

                <div
                  className={`absolute right-0 top-[calc(100%+12px)] z-[1100] w-[760px] max-w-[88vw] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] transition-all duration-200 ${
                    languageOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div dir="ltr" className="grid grid-cols-2 md:grid-cols-3">
                    {locales.map((item) => {
                      const isSelected = item.code === locale;

                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => handleLanguageChange(item.code)}
                          className={`flex items-center gap-3 px-4 py-3 text-left text-[15px] transition ${
                            isSelected
                              ? "bg-sky-50 text-sky-700"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span
                            dir="ltr"
                            className="min-w-[22px] text-xs font-bold tracking-[0.08em] text-slate-500"
                          >
                            {getLocaleCodeLabel(item.code)}
                          </span>

                          <span
                            dir={item.dir}
                            className="truncate"
                          >
                            {item.nativeLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleScrollToSection("cta")}
                className={`shrink-0 rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-300 xl:px-5 ${
                  scrolled
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.22)] hover:bg-emerald-400"
                    : "border border-emerald-600 bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                {t.header.deal}
              </button>
            </div>

            <div dir="ltr" className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => handleScrollToSection("cta")}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 ${
                  scrolled
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.22)]"
                    : "border border-emerald-600 bg-white text-emerald-700"
                }`}
              >
                {t.header.deal}
              </button>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                  scrolled
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {mobileMenuOpen ? (
                    <path d="M18 6 6 18M6 6l12 12" />
                  ) : (
                    <>
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              mobileMenuOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 px-3 pb-3 pt-2 sm:px-5">
              <nav className="flex flex-col gap-2">
                {menu.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleScrollToSection(item.id)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all ${
                        isActive
                          ? scrolled
                            ? "bg-emerald-500/15 text-emerald-300"
                            : "bg-emerald-600/10 text-emerald-700"
                          : scrolled
                            ? "bg-white/5 text-white/90 hover:bg-white/10"
                            : "bg-slate-100/80 text-slate-800 hover:bg-slate-200/80"
                      }`}
                    >
                      <span>{t.header.menu[item.key]}</span>
                      <span className="text-base">→</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-3 rounded-2xl border border-slate-200/80 bg-white/80 p-3 backdrop-blur sm:p-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {t.header.language}
                </div>

                <div dir="ltr" className="grid grid-cols-2 gap-2">
                  {locales.map((item) => {
                    const isSelected = item.code === locale;

                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => handleLanguageChange(item.code)}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${
                          isSelected
                            ? "border border-emerald-300 bg-emerald-50 text-emerald-700"
                            : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span
                          dir="ltr"
                          className="min-w-[22px] text-xs font-bold tracking-[0.08em] text-slate-500"
                        >
                          {getLocaleCodeLabel(item.code)}
                        </span>

                        <span dir={item.dir} className="truncate">
                          {item.nativeLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleScrollToSection("cta")}
                className={`mt-3 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.22)]"
                    : "border border-emerald-600 bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                {t.header.deal}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-[999] bg-slate-950/30 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </>
  );
}