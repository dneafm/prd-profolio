export function RangePilotTpSlShowcase({ hero = false }: { hero?: boolean }) {
  return (
    <section className={hero ? "overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-950" : "overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 dark:border-zinc-800 dark:bg-zinc-900/40"}>
      <div className="bg-zinc-950 p-4 md:p-6">
        <div className="overflow-hidden rounded-[1.25rem] border border-zinc-800 bg-[#0b1220] p-4 md:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              {!hero ? <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-400">RangePilot</p> : null}
              <p className={hero ? "text-[10px] font-black uppercase tracking-[0.24em] text-zinc-300" : "mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-zinc-400"}>Managed Range on Price Chart</p>
              {!hero ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  Show each managed segment as a true TP/SL box anchored from a shared entry line, with the spot path moving through those decisions.
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3 text-[11px] text-zinc-300">
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />TP box</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-orange-400" />SL box</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />Spot</span>
            </div>
          </div>

          <svg viewBox="0 0 760 260" className="mt-5 w-full h-auto" preserveAspectRatio="none">
            <rect x="0" y="0" width="760" height="260" fill="#0b1220" />
            <g stroke="#334155" strokeWidth="1">
              <line x1="48" y1="24" x2="48" y2="220" />
              <line x1="48" y1="220" x2="730" y2="220" />
              <line x1="48" y1="60" x2="730" y2="60" />
              <line x1="48" y1="100" x2="730" y2="100" />
              <line x1="48" y1="140" x2="730" y2="140" />
              <line x1="48" y1="180" x2="730" y2="180" />
            </g>

            <g>
              <line x1="110" y1="154" x2="310" y2="154" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="110" y="96" width="200" height="58" fill="rgba(34,197,94,.18)" stroke="rgba(74,222,128,.78)" />
              <rect x="110" y="154" width="200" height="32" fill="rgba(249,115,22,.18)" stroke="rgba(251,146,60,.78)" />

              <line x1="310" y1="126" x2="510" y2="126" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="310" y="76" width="200" height="50" fill="rgba(34,197,94,.18)" stroke="rgba(74,222,128,.78)" />
              <rect x="310" y="126" width="200" height="28" fill="rgba(249,115,22,.18)" stroke="rgba(251,146,60,.78)" />

              <line x1="510" y1="96" x2="610" y2="96" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="510" y="48" width="100" height="48" fill="rgba(34,197,94,.18)" stroke="rgba(74,222,128,.78)" />
              <rect x="510" y="96" width="100" height="24" fill="rgba(249,115,22,.18)" stroke="rgba(251,146,60,.78)" />
            </g>

            <polyline
              fill="none"
              stroke="#4ade80"
              strokeWidth="3"
              points="110,146 124,149 138,143 152,138 166,141 180,132 194,126 208,129 222,121 236,115 250,119 264,112 278,118 292,131 304,136 310,126 324,121 338,114 352,108 366,112 380,104 394,98 408,102 422,96 436,88 450,92 464,84 478,90 492,98 506,104 510,96 524,91 538,84 552,78 566,74 580,70 594,66 608,63"
            />
            <g fill="#4ade80">
              <circle cx="110" cy="146" r="4" />
              <circle cx="180" cy="132" r="3.5" />
              <circle cx="250" cy="119" r="3.5" />
              <circle cx="310" cy="126" r="4" />
              <circle cx="380" cy="104" r="3.5" />
              <circle cx="450" cy="92" r="3.5" />
              <circle cx="510" cy="96" r="4" />
              <circle cx="580" cy="70" r="3.5" />
              <circle cx="608" cy="63" r="4" />
            </g>
          </svg>
        </div>
      </div>

      {!hero ? (
        <div className="p-5 md:p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">Proof block</p>
          <p className="mt-3 text-base font-bold leading-snug text-zinc-900 dark:text-zinc-100">
            TP/SL-style pool showcase: each rerange reset creates a shared entry anchor, with a take-profit box above and a stop-loss box below like a real long-position risk/reward tool.
          </p>
        </div>
      ) : null}
    </section>
  );
}
