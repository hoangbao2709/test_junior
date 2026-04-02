import { vpnList } from "./data";

export function TopVpnSection() {
  return (
    <section id="top-vpns" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Top VPN list
          </p>
          <h2
            className="mt-3 text-4xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "Georgia, ui-serif, serif" }}
          >
            Our top VPN services for 2026
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Designed like a real affiliate ranking page: fast to scan, easy to compare, and
          structured around the user’s decision journey.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {vpnList.map((vpn) => (
          <article
            key={vpn.name}
            className={`overflow-hidden   border border-slate-200 bg-white shadow-lg bg-gradient-to-br ${vpn.accent} shadow-slate-100`}
          >
            <div className="grid gap-0 lg:grid-cols-[120px_1.15fr_0.9fr_180px]">
              <div className={`flex items-center justify-center border-b border-slate-200 bg-gradient-to-br ${vpn.accent}  p-6 lg:border-b-0 lg:border-r`}>
                <div className="text-center">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Rank</div>
                  <div className="mt-2 text-4xl font-semibold text-slate-900">#{vpn.rank}</div>
                </div>
              </div>

              <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-slate-900">{vpn.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {vpn.badge}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{vpn.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {vpn.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`bg-gradient-to-br ${vpn.accent} p-6`}>
                <div className="rounded-[1.25rem] border border-white/50 bg-white/80 p-5 backdrop-blur">
                  <div className="text-sm text-slate-500">Editor score</div>
                  <div className="mt-1 text-3xl font-semibold text-slate-900">{vpn.score}</div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-white p-3">
                      <div className="text-slate-500">Price</div>
                      <div className="mt-1 font-semibold text-slate-900">{vpn.price}</div>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <div className="text-slate-500">Guarantee</div>
                      <div className="mt-1 font-semibold text-slate-900">30 days</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-stretch justify-center gap-3 p-6">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  {vpn.cta}
                </a>
                <button className="rounded-full border cursor-pointer border-slate-300 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900">
                  Read review
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
