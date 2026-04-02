"use client";

import { useMemo, useState } from "react";

const trustCards = [
  {
    title: "Connect to our international servers",
    description:
      "Enjoy fast, reliable connections with an extensive VPN network, offering broad global coverage for travel, work, and streaming.",
    tag: "Global network",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Browse at the highest speeds",
    description:
      "Experience rapid, reliable performance with high-speed infrastructure designed for smooth browsing, streaming, and everyday use.",
    tag: "High speed",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Explore the internet with total privacy",
    description:
      "Rely on strong privacy protections, a strict no-logs mindset, and trust-focused design choices that keep user data safer online.",
    tag: "Privacy first",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Dodge annoying ads and malicious malware",
    description:
      "Reduce distractions and improve protection with built-in blocking tools that help filter intrusive ads, trackers, and risky content.",
    tag: "Cleaner browsing",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Access global content and bypass censorship",
    description:
      "Unlock international websites and streaming libraries with tools designed to improve access in restricted or geo-blocked environments.",
    tag: "Content access",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Connect on multiple devices",
    description:
      "Use one subscription across phones, laptops, tablets, and browsers for a more flexible, real-world VPN experience.",
    tag: "Multi-device",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop",
  },
];

export function TrustSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const gridTemplateColumns = useMemo(() => {
    return trustCards
      .map((_, index) =>
        index === activeIndex ? "minmax(0, 5.35fr)" : "minmax(88px, 0.84fr)"
      )
      .join(" ");
  }, [activeIndex]);

  return (
    <section
      id="trust"
      className="relative overflow-hidden"
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Why choose us
          </p>

          <h2
            className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl"
            style={{ fontFamily: "Georgia, ui-serif, serif" }}
          >
            Reasons users trust our top VPN recommendations
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">
            This section keeps the content benefit-driven like a real VPN
            homepage, but presents it in a more premium, visual layout.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:hidden">
          {trustCards.map((card, index) => (
            <article
              key={card.title}
              onClick={() => setActiveIndex(index)}
              className="overflow-hidden rounded-[1.75rem]  border border-slate-200/80 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/22 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/30 bg-slate-900/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  {card.tag}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl font-semibold leading-tight text-slate-900"
                  style={{ fontFamily: "Georgia, ui-serif, serif" }}
                >
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
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
                    className={`group relative overflow-hidden cursor-pointer  border outline-none transition-all duration-300 ${
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
                          className="relative rotate-180 text-[2.1rem] font-semibold tracking-[0.03em] text-white [writing-mode:vertical-rl]"
                          style={{ fontFamily: "Georgia, ui-serif, serif" }}
                        >
                          {card.tag}
                        </div>
                      </div>
                    )}

                    <div
                      className={`relative flex h-full flex-col justify-end p-8 xl:p-10 transition-all duration-300 ${
                        isActive
                          ? "translate-y-0 opacity-100 delay-75"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="inline-flex w-fit rounded-full border border-white/20 bg-slate-900/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                        {card.tag}
                      </div>

                      <h3
                        className="mt-5 max-w-2xl text-4xl font-semibold leading-tight text-white"
                        style={{ fontFamily: "Georgia, ui-serif, serif" }}
                      >
                        {card.title}
                      </h3>

                      <div className="mt-5 h-px w-28 bg-white/25" />

                      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
                        {card.description}
                      </p>
                      <a className="mt-5 max-w-2xl text-lg leading-8 text-slate-100 py-2 px-3 border border-white/90 hover:text-black rounded-full w-fit transition hover:bg-white">
                        Khám phá thêm
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