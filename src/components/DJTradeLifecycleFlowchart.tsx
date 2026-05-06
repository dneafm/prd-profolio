import React from "react";
import { ArrowRight, CircleDot } from "lucide-react";

const states = [
  { label: "Draft", note: "initial config" },
  { label: "Configured", note: "setup complete" },
  { label: "Ready", note: "passes checks" },
  { label: "Live", note: "actively monitored" },
  { label: "Blocked", note: "fails readiness" },
  { label: "Review", note: "post-trade learn" },
  { label: "Refined", note: "adjusted setup" },
  { label: "Redeployed", note: "next cycle" },
];

export function DJTradeLifecycleFlowchart() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-zinc-950 px-4 py-6 dark:border-zinc-800 md:px-6 md:py-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {states.map((state, index) => {
          const isLast = index === states.length - 1;
          return (
            <React.Fragment key={state.label}>
              <div className="min-w-[120px] rounded-[1.25rem] border border-zinc-800 bg-zinc-900/80 px-4 py-4 text-center">
                <div className="mb-2 flex justify-center">
                  <CircleDot className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-xs font-black uppercase tracking-[0.14em] text-white">{state.label}</div>
                <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.14em] text-zinc-500">{state.note}</div>
              </div>
              {!isLast && <ArrowRight className="hidden h-4 w-4 text-zinc-600 lg:block" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
