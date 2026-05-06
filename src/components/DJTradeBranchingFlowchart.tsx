import React from "react";
import {
  ArrowDown,
  BarChart3,
  CheckCircle2,
  PauseCircle,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";

function SmallBox({ title, subtitle, icon, color = "border-zinc-700" }: { title: string; subtitle: string; icon: React.ReactNode; color?: string }) {
  return (
    <div className={`flex w-full max-w-[min(92vw,340px)] flex-col items-center gap-2 rounded-2xl border px-5 py-4 ${color} bg-zinc-950/60 backdrop-blur-sm`}>
      <div className="rounded-full border border-zinc-800 bg-zinc-900 p-2">{icon}</div>
      <h4 className="text-[11px] font-black uppercase tracking-[0.16em] text-center text-white leading-tight">{title}</h4>
      <p className="text-[9px] font-mono uppercase tracking-[0.14em] text-zinc-500 text-center">{subtitle}</p>
    </div>
  );
}

function VerticalArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="relative h-10 w-px bg-zinc-800">
        <ArrowDown className="absolute -bottom-1 -left-[5.5px] h-3 w-3 text-zinc-600" />
      </div>
      {label && <div className="mt-2 text-[8px] font-mono uppercase tracking-[0.16em] text-zinc-500">{label}</div>}
    </div>
  );
}

export function DJTradeBranchingFlowchart() {
  return (
    <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6 lg:px-10 2xl:px-16">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center py-6 sm:py-10">
        <SmallBox
          title="Market data input"
          subtitle="price • structure • context"
          icon={<BarChart3 className="h-4 w-4 text-blue-400" />}
          color="border-blue-500/30"
        />

        <VerticalArrow />

        <SmallBox
          title="Manager signal checked"
          subtitle="top-level read • bias intent"
          icon={<Users className="h-4 w-4 text-violet-400" />}
          color="border-violet-500/30"
        />

        <VerticalArrow />

        <SmallBox
          title="Staff signal checked"
          subtitle="execution confirmation"
          icon={<Users className="h-4 w-4 text-cyan-400" />}
          color="border-cyan-500/30"
        />

        <VerticalArrow />

        <SmallBox
          title="Bias add / reduce"
          subtitle="add • reduce • hold"
          icon={<Scale className="h-4 w-4 text-amber-400" />}
          color="border-amber-500/30"
        />

        <VerticalArrow label="guard check" />

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-24">
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-red-400">
              No <XCircle className="h-3 w-3 text-red-400" />
            </div>
            <SmallBox
              title="Guard block"
              subtitle="reduce / cancel / wait"
              icon={<PauseCircle className="h-4 w-4 text-red-400" />}
              color="border-red-500/30"
            />
            <VerticalArrow />
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-[9px] font-mono uppercase tracking-[0.14em] text-red-300">
              loop back to market data input
            </div>
            <div className="mt-3 text-zinc-500">
              <RotateCcw className="h-4 w-4" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-400">
              Yes <CheckCircle2 className="h-3 w-3 text-emerald-400" />
            </div>
            <SmallBox
              title="Guard pass"
              subtitle="bias can execute"
              icon={<ShieldCheck className="h-4 w-4 text-emerald-400" />}
              color="border-emerald-500/30"
            />
            <VerticalArrow />
            <SmallBox
              title="Live monitoring"
              subtitle="manager + staff re-check"
              icon={<ShieldAlert className="h-4 w-4 text-blue-400" />}
              color="border-blue-500/30"
            />
            <VerticalArrow label="settlement" />
            <SmallBox
              title="Settlement final"
              subtitle="close • settle • review"
              icon={<CheckCircle2 className="h-4 w-4 text-violet-400" />}
              color="border-violet-500/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
