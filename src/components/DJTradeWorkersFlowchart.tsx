import React from "react";
import { Eye, Shield, UserCog, Users, ArrowDown } from "lucide-react";

const workerLanes = [
  {
    title: "Setup worker",
    points: ["prepare bot", "shape context", "define scope"],
    icon: UserCog,
    color: "text-blue-400 border-blue-500/30",
  },
  {
    title: "Monitoring worker",
    points: ["watch exposure", "track changes", "surface alerts"],
    icon: Eye,
    color: "text-amber-400 border-amber-500/30",
  },
  {
    title: "Risk / review worker",
    points: ["check readiness", "capture outcome", "support learning"],
    icon: Shield,
    color: "text-emerald-400 border-emerald-500/30",
  },
];

export function DJTradeWorkersFlowchart() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-zinc-950 px-4 py-6 dark:border-zinc-800 md:px-6 md:py-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {workerLanes.map((lane, index) => {
          const Icon = lane.icon;
          const isLast = index === workerLanes.length - 1;
          return (
            <React.Fragment key={lane.title}>
              <div className={`rounded-[1.25rem] border bg-zinc-900/80 p-5 ${lane.color}`}>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80">
                  <Icon className={`h-4 w-4 ${lane.color.split(" ")[0]}`} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">{lane.title}</h4>
                <div className="mt-4 space-y-2">
                  {lane.points.map((point) => (
                    <div key={point} className="rounded-xl border border-white/5 bg-zinc-950/60 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-400">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {!isLast && (
                <div className="hidden lg:flex items-center justify-center">
                  <div className="rounded-full border border-zinc-800 bg-zinc-950 p-2">
                    <ArrowDown className="h-3 w-3 rotate-[-90deg] text-zinc-500" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-6 rounded-[1.25rem] border border-zinc-800 bg-zinc-900/70 p-5 text-center">
        <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80">
          <Users className="h-4 w-4 text-pink-400" />
        </div>
        <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">Operator decision point</h4>
        <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">
          workers surface context → operator decides next live action
        </p>
      </div>
    </div>
  );
}
