import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { experiments } from "../data";
import { ExperimentVisualizer } from "../components/ExperimentVisualizer";

export function Experiments() {
  const featuredExperiment = experiments[0];

  return (
    <div className="space-y-12 md:space-y-16">
      <header className="surface-panel relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-8 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.11),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.09),transparent_34%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl space-y-4">
            <p className="section-kicker text-blue-600 dark:text-blue-400">Operator Lab</p>
            <h1 className="section-title md:text-5xl">Working proofs for operator-facing products and AI-assisted systems.</h1>
            <p className="section-copy md:text-lg">
              A self-initiated lab focused on reducing cognitive load in repeated workflows and making dense information easier to scan, prioritize, and act on.
            </p>
          </div>

          {featuredExperiment && (
            <Link
              to={`/operator-lab/${featuredExperiment.id}`}
              className="surface-panel-strong group relative overflow-hidden rounded-[1.75rem] p-5 md:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_36%)]" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured proof
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{featuredExperiment.status}</span>
                </div>
                <div className="aspect-[16/9] overflow-hidden rounded-[1.25rem] border border-zinc-200/80 bg-zinc-950 dark:border-zinc-800">
                  <ExperimentVisualizer id={featuredExperiment.id} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-black tracking-tight">{featuredExperiment.title}</h2>
                  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{featuredExperiment.description}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
                  Open featured case
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )}
        </div>
      </header>


      <div className="flex items-end justify-between gap-6 border-b border-zinc-200/80 pb-4 dark:border-zinc-800/80">
        <div className="space-y-2">
          <p className="section-kicker">Experiment index</p>
          <h2 className="section-title md:text-[2.3rem]">Browse the current proofs</h2>
        </div>
        <p className="hidden max-w-sm text-right text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 md:block">
          Each card shows a product direction, current status, and direct path into the detailed case.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link 
              to={`/operator-lab/${exp.id}`}
              className="surface-panel group relative block overflow-hidden rounded-[1.75rem] p-6 md:p-7 space-y-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_28px_90px_rgba(59,130,246,0.10)]"
            >
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500/40 transition-colors" />
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500/40 transition-colors" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500/40 transition-colors" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500/40 transition-colors" />

              <div className="aspect-video bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden rounded-[1.25rem] group-hover:border-blue-500/20 transition-colors duration-500">
                <div className="absolute inset-0 pointer-events-none">
                  {(exp as any).caseStudy && (exp as any).caseStudy.images && (exp as any).caseStudy.images[0] ? (
                    <img 
                      src={(exp as any).caseStudy.images[0].src} 
                      alt={exp.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-duration-500" 
                    />
                  ) : (
                    <ExperimentVisualizer id={exp.id} isThumbnail />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.02] transition-colors duration-500 pointer-events-none" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-blue-500/15 bg-blue-500/[0.05] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                      STATUS: {exp.status}
                    </div>
                    <motion.div 
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1 h-1 rounded-full bg-blue-500"
                    />
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.title}
                </h2>
                <p className="text-[15px] text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
                  {exp.description}
                </p>
                <div className="pt-1 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-zinc-600 transition-colors group-hover:text-blue-600 dark:text-zinc-300 dark:group-hover:text-blue-400">
                  Open case
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
