import React from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  PauseCircle,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  XCircle,
  Zap,
} from "lucide-react";

function Node({ title, subtitle, accent = "border-zinc-700", icon }: { title: string; subtitle: string; accent?: string; icon?: React.ReactNode }) {
  return (
    <div className={`rounded-2xl border bg-zinc-900/85 px-5 py-4 ${accent}`}>
      <div className="flex items-center gap-3">
        {icon && <div className="rounded-xl border border-white/10 bg-zinc-950/80 p-2">{icon}</div>}
        <div>
          <div className="text-xs font-black uppercase tracking-[0.16em] text-white">{title}</div>
          <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.14em] text-zinc-500">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function MiniPill({ label, tone }: { label: string; tone: string }) {
  return <div className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${tone}`}>{label}</div>;
}

export function DJTradeBranchingFlowchart() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-zinc-950 px-4 py-6 dark:border-zinc-800 md:px-6 md:py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <Node title="Configure bot" subtitle="symbol • timeframe • settlement • workers" accent="border-blue-500/30" icon={<Zap className="h-4 w-4 text-blue-400" />} />
          <Node title="Readiness check" subtitle="risk • context • deployability" accent="border-amber-500/30" icon={<ShieldCheck className="h-4 w-4 text-amber-400" />} />
          <Node title="Deploy live" subtitle="active workstation" accent="border-emerald-500/30" icon={<CheckCircle2 className="h-4 w-4 text-emerald-400" />} />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8 text-zinc-500">
          <ArrowRight className="h-4 w-4" />
          <ArrowRight className="h-4 w-4" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_220px_1fr]">
          <div className="space-y-4 rounded-[1.5rem] border border-red-500/20 bg-red-500/5 p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-white">If not ready</h4>
              <MiniPill label="No" tone="border-red-500/30 text-red-400" />
            </div>
            <Node title="Blocked / refine setup" subtitle="fix config • adjust scope • re-check" accent="border-red-500/30" icon={<XCircle className="h-4 w-4 text-red-400" />} />
            <div className="flex items-center gap-2 pl-2 text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">
              <RotateCcw className="h-3 w-3" />
              loop back to configuration
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center gap-3 text-zinc-500">
            <ArrowDown className="h-4 w-4" />
            <div className="text-[10px] font-mono uppercase tracking-[0.16em]">branch</div>
            <ArrowDown className="h-4 w-4" />
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/5 p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-white">If ready</h4>
              <MiniPill label="Yes" tone="border-emerald-500/30 text-emerald-400" />
            </div>
            <Node title="Live monitoring loop" subtitle="workers watch state • exposure • drift" accent="border-emerald-500/30" icon={<Zap className="h-4 w-4 text-emerald-400" />} />

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-black uppercase tracking-[0.16em] text-white">Risk breach?</div>
                  <MiniPill label="If yes" tone="border-amber-500/30 text-amber-400" />
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">
                  <ShieldAlert className="h-3 w-3 text-amber-400" />
                  escalate to operator
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-black uppercase tracking-[0.16em] text-white">Market still valid?</div>
                  <MiniPill label="If no" tone="border-blue-500/30 text-blue-400" />
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">
                  <PauseCircle className="h-3 w-3 text-blue-400" />
                  pause / exit / review
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-black uppercase tracking-[0.16em] text-white">Trade closed?</div>
                <MiniPill label="Loop" tone="border-zinc-700 text-zinc-400" />
              </div>
              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">No → continue monitoring loop</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">Yes → review → refine setup → redeploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
