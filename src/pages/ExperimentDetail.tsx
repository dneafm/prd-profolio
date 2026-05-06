import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
  Target,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import { experiments } from "../data";
import { ExperimentVisualizer } from "../components/ExperimentVisualizer";
import { DJTradeFlowchart } from "../components/DJTradeFlowchart";
import { DJTradeSetupFlowchart } from "../components/DJTradeSetupFlowchart";
import { DJTradeWorkersFlowchart } from "../components/DJTradeWorkersFlowchart";
import { AgentBoardFlowchart } from "../components/AgentBoardFlowchart";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{children}</p>;
}

export function ExperimentDetail() {
  const { id } = useParams();
  const exp = experiments.find((e) => e.id === id) as any;

  if (!exp) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-6">
        <h1 className="text-2xl font-bold">Experiment not found</h1>
        <Link to="/experiments" className="text-blue-600 hover:underline">
          Back to Experiments
        </Link>
      </div>
    );
  }

  if (exp.caseStudy) {
    const cs = exp.caseStudy;
    const problemPoints = (Array.isArray(cs.problem) ? cs.problem : [cs.problem]).slice(0, 3);
    const ideaBullets = cs.theIdea?.bullets ?? [];
    const heroImage = cs.images?.[0];
    const supportImages = cs.images?.slice(1) ?? [];
    const workflowSteps = (cs.howItWorks ?? []).slice(0, 4);
    const usefulBullets = (cs.usefulBullets ?? []).slice(0, 4);
    const setupDetails = (cs.setupDetails ?? []).slice(0, 3);
    const workerDetails = (cs.workerDetails ?? []).slice(0, 3);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-6xl space-y-10 pb-20">
        <header className="space-y-6">
          <Link to="/experiments" className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-blue-600 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Back to Lab</span>
          </Link>

          <section className="overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white/90 shadow-[0_24px_90px_rgba(15,23,42,0.06)] dark:border-zinc-800 dark:bg-zinc-900/55">
            <div className="space-y-0">
              <div className="border-b border-zinc-200/70 p-8 md:p-10 dark:border-zinc-800">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    {exp.status}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:border-zinc-700 dark:text-zinc-300">
                    Operator Lab
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
                    {cs.headline}
                  </h1>
                  <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{cs.summary}</p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                    <SectionLabel>Problem</SectionLabel>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">{problemPoints[0]}</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                    <SectionLabel>Focus</SectionLabel>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">{cs.metaStrip?.[1]?.value ?? exp.title}</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                    <SectionLabel>Outcome</SectionLabel>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">{cs.metaStrip?.[2]?.value ?? cs.outcome}</p>
                  </div>
                </div>
              </div>

              {heroImage ? (
                <div className="bg-zinc-950 p-4 md:p-6">
                  <div className="overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-950">
                    <img
                      src={heroImage.src}
                      alt={heroImage.story}
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{heroImage.story}</p>
                </div>
              ) : (
                <div className="flex min-h-[320px] items-center justify-center p-8">
                  <ExperimentVisualizer id={exp.id} />
                </div>
              )}
            </div>
          </section>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {(cs.metaStrip ?? []).map((meta: any, i: number) => (
            <div key={i} className="rounded-[1.5rem] border border-zinc-200/70 bg-white/85 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{meta.label}</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">{meta.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
            <SectionLabel>Key problems</SectionLabel>
            <div className="mt-5 space-y-3">
              {problemPoints.map((point: string, i: number) => (
                <div key={i} className="rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
                  <p className="text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-zinc-200/70 bg-zinc-100/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/45 md:p-8">
            <SectionLabel>Solution shape</SectionLabel>
            <div className="mt-5 grid gap-3">
              {ideaBullets.slice(0, 6).map((bullet: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/55 dark:text-zinc-300"
                >
                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </section>

        {(setupDetails.length > 0 || workerDetails.length > 0) && (
          <section className="grid gap-6 lg:grid-cols-2">
            {setupDetails.length > 0 && (
              <div className="rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
                <SectionLabel>Bot setup</SectionLabel>
                <div className="mt-5 space-y-3">
                  {setupDetails.map((item: string, i: number) => (
                    <div key={i} className="rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
                      <p className="text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {workerDetails.length > 0 && (
              <div className="rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
                <SectionLabel>Workers</SectionLabel>
                <div className="mt-5 space-y-3">
                  {workerDetails.map((item: string, i: number) => (
                    <div key={i} className="rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
                      <p className="text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {workflowSteps.length > 0 && (
          <section className="space-y-5">
            <div>
              <SectionLabel>Workflow</SectionLabel>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">The shortest useful explanation of how the system works.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workflowSteps.map((item: any, i: number) => {
                const icons = [Workflow, Target, Wrench, Users, Sparkles];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="rounded-[1.5rem] border border-zinc-200/70 bg-white/85 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200/70 bg-zinc-50 text-blue-600 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-blue-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-black tracking-tight text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {(exp.id === "dj-trade" || exp.id === "agent-board") && (
          <section className="space-y-6 rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
            <div>
              <SectionLabel>User journey</SectionLabel>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {exp.id === "dj-trade"
                  ? "From setup and readiness checks through execution and review."
                  : "From planning and assignment through handoff, proof, and review."}
              </p>
            </div>
            {exp.id === "dj-trade" ? (
              <div className="space-y-6">
                <DJTradeFlowchart />
                <div>
                  <SectionLabel>Bot setup flow</SectionLabel>
                  <p className="mt-2 mb-4 text-sm text-zinc-500 dark:text-zinc-400">A clearer visual of how a bot becomes deployable.</p>
                  <DJTradeSetupFlowchart />
                </div>
                <div>
                  <SectionLabel>Worker flow</SectionLabel>
                  <p className="mt-2 mb-4 text-sm text-zinc-500 dark:text-zinc-400">How worker roles split setup, monitoring, and review responsibility.</p>
                  <DJTradeWorkersFlowchart />
                </div>
              </div>
            ) : (
              <AgentBoardFlowchart />
            )}
          </section>
        )}

        {supportImages.length > 0 && (
          <section className="space-y-6">
            <div>
              <SectionLabel>Visual proof</SectionLabel>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Screens first. Minimal captioning.</p>
            </div>
            <div className="space-y-6">
              {supportImages.map((img: any, i: number) => (
                <div key={i} className="overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <div className="bg-zinc-950 p-4 md:p-6">
                    <div className="overflow-hidden rounded-[1.25rem] border border-zinc-800 bg-zinc-950">
                      <img src={img.src} alt={img.story} className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">Proof block {i + 1}</p>
                    <p className="mt-3 text-base font-bold leading-snug text-zinc-900 dark:text-zinc-100">{img.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {usefulBullets.length > 0 && (
          <section className="rounded-[1.75rem] border border-zinc-200/70 bg-zinc-100/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/45 md:p-8">
            <SectionLabel>Why it matters</SectionLabel>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {usefulBullets.map((bullet: string, i: number) => (
                <div key={i} className="flex gap-3 rounded-2xl border border-zinc-200/70 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/55">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">{bullet}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {cs.aiIntegration && (
          <section className="rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
            <SectionLabel>AI in workflow</SectionLabel>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">{cs.aiIntegration.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{cs.aiIntegration.description}</p>
              </div>
              <div className="rounded-[1.5rem] border border-zinc-200/70 bg-zinc-50/80 p-5 dark:border-zinc-800 dark:bg-zinc-950/50">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">Example prompts</p>
                <div className="mt-4 space-y-3">
                  {cs.aiIntegration.examples.slice(0, 3).map((example: string, i: number) => (
                    <div key={i} className="rounded-xl border border-zinc-200/70 bg-white px-4 py-3 text-sm font-mono text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="rounded-[2rem] border border-zinc-200/70 bg-zinc-950 px-6 py-8 text-white dark:border-zinc-800 md:px-8 md:py-10">
          <SectionLabel>Outcome</SectionLabel>
          <p className="mt-5 max-w-4xl text-2xl font-black leading-snug tracking-tight text-zinc-50">{cs.outcome}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950 transition-colors hover:bg-blue-400"
            >
              Discuss similar work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/operator-lab"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-100 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              Back to Operator Lab
            </Link>
          </div>
        </section>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto space-y-12 pb-20">
      <header className="space-y-8">
        <Link to="/experiments" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Back to Lab</span>
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">STATUS: {exp.status}</div>
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-tight">{exp.title}</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl">{exp.description}</p>
          </div>

          <button className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
            <Play className="w-4 h-4 fill-current" />
            View Demo
          </button>
        </div>
      </header>

      <section className="relative h-[500px] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
        <ExperimentVisualizer id={exp.id} />
      </section>
    </motion.div>
  );
}
