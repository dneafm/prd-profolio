import { ArrowDown, CheckCircle2, FileInput, GitBranch, ShieldAlert } from "lucide-react";

export function RangePilotFlowchart() {
  return (
    <div className="flex flex-col items-center py-4">
      <FlowBox
        title="Input"
        subtitle="pool state • position state • inventory • market context"
        icon={<FileInput className="h-4 w-4 text-blue-400" />}
        color="border-blue-500/30 bg-blue-500/5"
      />
      <VerticalArrow />

      <FlowBox
        title="Decision logic"
        subtitle="hold • rebalance • rerange • collect"
        icon={<GitBranch className="h-4 w-4 text-violet-400" />}
        color="border-violet-500/30 bg-violet-500/5"
      />
      <VerticalArrow label="Output" />

      <div className="grid w-full max-w-4xl gap-4 md:grid-cols-3">
        <FlowBox
          title="Allocation"
          subtitle="target inventory split after the decision"
          icon={<CheckCircle2 className="h-4 w-4 text-emerald-400" />}
          color="border-emerald-500/30 bg-emerald-500/5"
        />
        <FlowBox
          title="Range of pools"
          subtitle="which pools and range bands should hold exposure"
          icon={<GitBranch className="h-4 w-4 text-cyan-400" />}
          color="border-cyan-500/30 bg-cyan-500/5"
        />
        <FlowBox
          title="USD reserve"
          subtitle="how much capital stays unallocated as reserve"
          icon={<ShieldAlert className="h-4 w-4 text-amber-400" />}
          color="border-amber-500/30 bg-amber-500/5"
        />
      </div>
    </div>
  );
}

function FlowBox({
  title,
  subtitle,
  icon,
  color = "border-zinc-700 bg-zinc-950/50",
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color?: string;
}) {
  return (
    <div className={`flex w-full max-w-[min(92vw,460px)] flex-col items-center gap-2 rounded-2xl border px-6 py-5 ${color}`}>
      <div className="rounded-full border border-zinc-800 bg-zinc-900 p-2">{icon}</div>
      <h4 className="text-xs font-black uppercase tracking-widest text-white">{title}</h4>
      <p className="text-center font-mono text-[9px] uppercase tracking-tighter text-zinc-400">{subtitle}</p>
    </div>
  );
}

function VerticalArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="relative h-10 w-px bg-zinc-800">
        <ArrowDown className="absolute -bottom-1 -left-[5.5px] h-3 w-3 text-zinc-700" />
      </div>
      {label ? <span className="mt-2 font-mono text-[8px] uppercase tracking-widest text-zinc-500">{label}</span> : null}
    </div>
  );
}