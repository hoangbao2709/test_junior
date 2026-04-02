"use client";
import TechStackPreview from "@/Components/LogoMarqueeRow";
export function HeroSection() {
  return (
    <section className="border-b pt-10 font-semibold bg-[linear-gradient(135deg,#FFD1CC_0%,#FFE5DE_25%,#FFF3EB_55%,#FFF8F3_100%)] border-slate-200 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 ">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Updated for 2026
            </div>

            <h1
              className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
              
            >
              Compare the best VPNs for
              <span className="block text-emerald-700">
                speed, privacy, and real value.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Review top VPN services in one clean layout. Compare scores,
              pricing, and best-use cases without digging through cluttered
              review pages.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#top-vpns"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-950 bg-slate-950 px-7 text-base font-semibold text-white shadow-[0_0_18px_rgba(15,23,42,0.12)] transition-all duration-300 sm:h-[58px] hover:border-[#ff5a52]"
              >
                <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
                  <span className="absolute left-[-18%] top-0 h-full w-[140%] -translate-x-[118%] skew-x-[-20deg] bg-[#ff5a52] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                </span>

                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  See top VPN deals
                </span>
              </a>

              <a
                href="#compare"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 shadow-[0_0_18px_rgba(15,23,42,0.06)] transition-all duration-300 sm:h-[58px] hover:border-[#ff5a52]"
              >
                <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
                  <span className="absolute left-[-18%] top-0 h-full w-[140%] -translate-x-[118%] skew-x-[-20deg] bg-[#ff5a52] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                </span>

                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Compare features
                </span>
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Ranked picks
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">5</div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Best guarantee
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">
                  30 days
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Focus
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">
                  Clear
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4">
              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-emerald-300">
                      Editor’s top pick
                    </div>
                    <div className="mt-3 text-3xl font-semibold tracking-tight">
                      ExpressVPN
                    </div>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                      Best overall balance of speed, privacy, and ease of use.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                    <div className="text-xs text-slate-400">Score</div>
                    <div className="mt-1 text-3xl font-semibold">9.9</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">Best for</div>
                    <div className="mt-1 font-medium text-white">
                      Speed + ease of use
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">Starting price</div>
                    <div className="mt-1 font-medium text-white">$3.49/mo</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">Streaming</div>
                    <div className="mt-1 font-medium text-white">Excellent</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">Privacy</div>
                    <div className="mt-1 font-medium text-white">High</div>
                  </div>
                </div>

                <a
                  href="#cta"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Claim best deal
                </a>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex bg-gradient-to-br from-violet-400/25 to-fuchsia-300/10 items-center justify-between rounded-[1.25rem] border border-slate-200 bg-white px-4 py-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      ProtonVPN
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Strong feature set and value
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-900">9.7</div>
                    <div className="text-xs text-slate-500">$3.39</div>
                  </div>
                </div>

                <div className="flex bg-gradient-to-br from-sky-400/20 to-cyan-300/10 items-center justify-between rounded-[1.25rem] border border-slate-200 bg-white px-4 py-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      VpnMentor
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Privacy-first alternative
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-900">9.3</div>
                    <div className="text-xs text-slate-500">$4.49</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechStackPreview/>
    </section>
  );
}