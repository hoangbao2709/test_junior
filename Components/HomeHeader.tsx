"use client";

import { useEffect, useRef, useState } from "react";

const menu = [
  { label: "Top VPNs", id: "top-vpns" },
  { label: "Compare", id: "compare" },
  { label: "Why choose us", id: "trust" },
];

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [bannerClosed, setBannerClosed] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [activeSection, setActiveSection] = useState("top-vpns");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      if (!bannerClosed) {
        if (currentScrollY <= 8) {
          setShowBanner(true);
        } else if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
          setShowBanner(false);
        } else if (currentScrollY < lastScrollY.current - 8) {
          setShowBanner(true);
        }
      }

      if (mobileMenuOpen && currentScrollY > lastScrollY.current + 8) {
        setMobileMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = ["top-vpns", "compare", "trust", "cta"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let observer: IntersectionObserver | null = null;

    if (sections.length) {
      observer = new IntersectionObserver(
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

      sections.forEach((section) => observer?.observe(section));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer?.unobserve(section));
      observer?.disconnect();
    };
  }, [bannerClosed, mobileMenuOpen]);

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
  };

  const isBannerVisible = !bannerClosed && showBanner;

  return (
    <>
      {/* Banner nếu cần dùng lại thì mở block này ra
      <div
        className={`fixed inset-x-0 top-0 z-[1001] overflow-hidden transition-all duration-300 ease-out ${
          isBannerVisible ? "max-h-24 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="relative mx-auto flex w-full items-center bg-[#1671C7] py-2 text-white shadow-[0_18px_45px_rgba(22,113,199,0.25)]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-start gap-2 px-4 sm:justify-center lg:px-8">
            <div className="flex w-full flex-col items-center justify-center gap-3 pr-8 md:flex-row md:gap-5 md:pr-0">
              <div className="inline-flex flex-col items-center justify-center gap-1 rounded-xl bg-white/15 px-3 py-1 text-white md:flex-row md:gap-4">
                <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-white md:block">
                  Limited deal
                </span>

                <div className="flex items-center gap-2" role="timer" aria-label="Offer countdown">
                  <div className="flex items-center gap-1">
                    <div className="flex h-6 w-5 items-center justify-center rounded bg-purple-950 text-[13px] font-bold">0</div>
                    <div className="flex h-6 w-5 items-center justify-center rounded bg-purple-950 text-[13px] font-bold">0</div>
                  </div>
                  <div className="text-base md:text-xl">:</div>
                  <div className="flex items-center gap-1">
                    <div className="flex h-6 w-5 items-center justify-center rounded bg-purple-950 text-[13px] font-bold">2</div>
                    <div className="flex h-6 w-5 items-center justify-center rounded bg-purple-950 text-[13px] font-bold">8</div>
                  </div>
                  <div className="text-base md:text-xl">:</div>
                  <div className="flex items-center gap-1">
                    <div className="flex h-6 w-5 items-center justify-center rounded bg-purple-950 text-[13px] font-bold">2</div>
                    <div className="flex h-6 w-5 items-center justify-center rounded bg-purple-950 text-[13px] font-bold">1</div>
                  </div>
                </div>
              </div>

              <a href="#cta" className="text-center text-sm font-medium text-white underline underline-offset-4 sm:text-base">
                Spring promotion: save up to 65% today
              </a>
            </div>

            <button
              type="button"
              onClick={() => setBannerClosed(true)}
              className="absolute right-2 inline-flex items-center justify-center rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white md:right-4"
              aria-label="Close banner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      */}

      <header
        className={`fixed inset-x-0 z-[1000] transition-all duration-300 ${
          scrolled ? "px-3 sm:px-4" : "px-0"
        }`}
        style={{ top: isBannerVisible ? 10 : scrolled ? 12 : 0 }}
      >
        <div
          className={`mx-auto font-semibold w-full max-w-7xl border transition-all duration-300 ${
            scrolled
              ? "rounded-2xl border-white/10 bg-[#0f172a]/80 shadow-[0_0_30px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:rounded-[28px]"
              : "rounded-2xl border-slate-200/60 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:rounded-[28px]"
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-6">
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
                <span className="hidden sm:inline">Top VPN Services 2026</span>
              </span>
            </button>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:flex">
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
                <div className="flex items-center gap-1.5 xl:gap-2">
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
                        <span className="relative z-10">{item.label}</span>

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

              <button
                type="button"
                onClick={() => handleScrollToSection("cta")}
                className={`shrink-0 rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-300 xl:px-5 ${
                  scrolled
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.22)] hover:bg-emerald-400"
                    : "border border-emerald-600 bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                Get best deal
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => handleScrollToSection("cta")}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 ${
                  scrolled
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.22)]"
                    : "border border-emerald-600 bg-white text-emerald-700"
                }`}
              >
                Deal
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
              mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
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
                      <span>{item.label}</span>
                      <span className="text-base">→</span>
                    </button>
                  );
                })}
              </nav>

              <button
                type="button"
                onClick={() => handleScrollToSection("cta")}
                className={`mt-3 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.22)]"
                    : "border border-emerald-600 bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                Get best deal
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