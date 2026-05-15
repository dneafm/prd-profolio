import { Link } from "react-router-dom";
import { ArrowRight, LayoutPanelTop, PanelsTopLeft, Settings2 } from "lucide-react";
import { motion } from "motion/react";
import { experiments } from "../data";

const offerStack = [
  {
    title: "From messy problems to clearer product direction",
    description: "I work best when the problem is real, the opportunity is promising, but the product direction still needs to be clarified.",
    icon: Settings2,
  },
  {
    title: "User flows with stronger decision logic",
    description: "I help shape flows that make priorities, actions, and tradeoffs easier for users and teams to understand.",
    icon: LayoutPanelTop,
  },
  {
    title: "Execution that holds up beyond the mockup",
    description: "I care about whether a product still works under edge cases, handoffs, and real use, not just whether it presents well.",
    icon: PanelsTopLeft,
  },
];

const processSteps = [
  "Find the real user or operator pain",
  "Clarify the product decision that matters most",
  "Shape the flow around the core use case",
  "Make the product concrete enough to test",
  "Tighten the weak points after real use",
];

const differentiators = [
  {
    title: "Good in ambiguity",
    description: "I am most useful when the problem is clear enough to matter, but the right product shape is still uncertain.",
  },
  {
    title: "Strong niche and opportunity instinct",
    description: "I am especially drawn to spaces where behavior is changing fast, incentives are uneven, and a sharper product angle can unlock real advantage.",
  },
  {
    title: "Careful about real-world tradeoffs",
    description: "I pay attention to edge cases, handoffs, trust, and whether the product still works once reality hits it.",
  },
];

const productProof = experiments;

const proofStats = [
  { value: "3", label: "operator-tool product systems" },
  { value: "DeFi + AI", label: "domain depth" },
];

export function ProductFocus() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="surface-panel relative overflow-hidden rounded-[2.5rem] px-6 py-9 md:px-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_36%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_36%)]" />
        <div className="relative space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Product Owner / product design for complex, high-context tools</p>
          <h1 className="max-w-3xl text-2xl font-semibold leading-snug text-zinc-950 dark:text-zinc-50 md:text-4xl">
            I help turn ambiguous product ideas into clearer bets, sharper workflows, and tools people can actually use.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Strongest in high-context domains where the opportunity is real, the noise is high, and the right product shape still needs to be clarified — especially across crypto, DeFi, operator tools, and AI-assisted internal systems.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-zinc-200/80 bg-white/88 px-4 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/55">
                <div className="text-xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 md:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/operator-lab"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-white transition-colors hover:bg-blue-600 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-blue-400"
            >
              See case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300/80 bg-white/86 px-6 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-zinc-800 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900/68 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Book a conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="section-kicker text-blue-600 dark:text-blue-400">Where I help most</p>
          <h2 className="section-title">
            I am most useful when a product has real potential, but the direction, flow, or decision logic is still messy.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
            Best for teams facing unclear onboarding, feature sprawl, conflicting stakeholder priorities, and low-conviction workflow decisions.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {offerStack.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="surface-panel rounded-[1.75rem] p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/80 text-blue-600 dark:border-zinc-800 dark:bg-zinc-950/65 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-zinc-50">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="space-y-8 md:space-y-10">
        <div className="flex items-end justify-between gap-6 border-b border-zinc-200/80 pb-4 dark:border-zinc-800/80">
          <div className="space-y-3">
            <p className="section-kicker">Proof</p>
            <h2 className="section-title">Selected work.</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
              Proof first: flagship operator-tool case studies, then broader portfolio credibility.
            </p>
          </div>
          <Link to="/operator-lab" className="hidden items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/[0.05] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-blue-600 transition-colors hover:bg-blue-500/[0.09] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 md:inline-flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-6">
            {productProof.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-[85%] snap-start md:min-w-[32rem]"
              >
                <Link
                  to={`/operator-lab/${card.id}`}
                  className="group surface-panel relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_24px_90px_rgba(59,130,246,0.10)]"
                >
                  <div className="relative space-y-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{card.status}</p>
                    <h3 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-zinc-50">{card.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">{card.description}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Problem, decisions, and product structure</p>
                  </div>
                  <div className="relative mt-8 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-zinc-500 transition-colors group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400">
                    Open case
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-panel grid gap-6 rounded-[2rem] px-6 py-8 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-11">
        <div className="space-y-4">
          <p className="section-kicker text-blue-600 dark:text-blue-400">How I usually work</p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 md:text-4xl">
            Start with the real problem, shape the core flow, then make it usable enough to learn from.
          </h2>
        </div>
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-[1.25rem] border border-zinc-200/80 bg-white/92 px-4 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/55">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-[11px] font-black text-white dark:bg-zinc-100 dark:text-zinc-950">
                0{index + 1}
              </div>
              <p className="pt-1 text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-panel rounded-[2rem] px-6 py-9 text-zinc-950 dark:text-zinc-50 md:px-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="space-y-4">
            <p className="section-kicker text-blue-600 dark:text-blue-400">Best fit</p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Best for teams that need sharper product judgment before they need more process.
            </h2>
          </div>
          <div className="space-y-5 md:pl-8">
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I am strongest in product situations where the opportunity is real but the path is still fuzzy — especially in crypto and DeFi, where user behavior, incentives, and market context change fast.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-white transition-colors hover:bg-blue-600 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-blue-400"
              >
                Contact
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/main-portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300/80 px-6 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-zinc-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                View broader portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
