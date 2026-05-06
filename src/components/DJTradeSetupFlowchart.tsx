import React from "react";
import {
  Bot,
  CandlestickChart,
  Clock3,
  Users,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Choose symbol scope",
    subtitle: "pair / market / universe",
    icon: CandlestickChart,
    color: "text-blue-400 border-blue-500/30",
  },
  {
    title: "Set timeframe",
    subtitle: "tempo / horizon / rhythm",
    icon: Clock3,
    color: "text-cyan-400 border-cyan-500/30",
  },
  {
    title: "Configure settlement",
    subtitle: "close logic / trade window",
    icon: Bot,
    color: "text-violet-400 border-violet-500/30",
  },
  {
    title: "Assign workers",
    subtitle: "crew roles / responsibilities",
    icon: Users,
    color: "text-amber-400 border-amber-500/30",
  },
  {
    title: "Run readiness check",
    subtitle: "risk / context / deployable",
    icon: ShieldCheck,
    color: "text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Deploy workstation bot",
    subtitle: "live but controlled",
    icon: Rocket,
    color: "text-pink-400 border-pink-500/30",
  },
];

export function DJTradeSetupFlowchart() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-zinc-950 px-4 py-6 dark:border-zinc-800 md:px-6 md:py-8">
      <div className="grid gap-4 lg:grid-cols-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <div key={step.title} className="relative">
              <div className={`h-full rounded-[1.25rem] border bg-zinc-900/80 p-4 ${step.color}`}>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80">
                  <Icon className={`h-4 w-4 ${step.color.split(" ")[0]}`} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white leading-tight">{step.title}</h4>
                <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">{step.subtitle}</p>
              </div>
              {!isLast && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 p-2">
                  <ArrowRight className="h-3 w-3 text-zinc-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
