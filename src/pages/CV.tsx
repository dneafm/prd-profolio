import { motion } from "motion/react";
import { Download, Mail, Linkedin, Globe, ArrowUpRight, Activity, Boxes, Gauge, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const signalCards = [
  {
    title: "9 years",
    detail: "across visual systems, crypto-native environments, and execution",
    icon: Activity,
  },
  {
    title: "2D / 3D",
    detail: "graphics, motion, illustration, and multimedia design",
    icon: Boxes,
  },
  {
    title: "Creative production",
    detail: "templates, brand assets, and design support at scale",
    icon: Wrench,
  },
];

export function CV() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      
      {/* PAGE 1: CREDIBILITY & FIRST IMPRESSION */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xl shadow-black/40 dark:shadow-black/60 min-h-[1100px] font-sans selection:bg-blue-50 dark:selection:bg-blue-900/30 selection:text-blue-700 dark:selection:text-blue-300 relative overflow-hidden transition-colors duration-300"
      >
        {/* Top Header Band */}
        <div className="h-1.5 bg-blue-600 w-full" />

        <div className="p-8 md:p-16">
          {/* Header Section - Page 1 */}
          <header className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 mb-3">Hoang Pham</h1>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 max-w-xl leading-tight tracking-tight uppercase">
                  DeFi Designer
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-[13px] font-bold text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                  <Mail className="w-3.5 h-3.5" /> dneafm@gmail.com
                </span>
                <div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full hidden sm:block" />
                <span className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                  <Globe className="w-3.5 h-3.5" /> Ho Chi Minh
                </span>
                <div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full hidden sm:block" />
                <span className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-100/50 dark:border-emerald-900/50">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> 
                  Open to opportunities
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <a
                href="/cv/HoangPham-CV-2026.pdf"
                download="HoangPham-CV-2026.pdf"
                className="group inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-xl shadow-zinc-900/10 dark:shadow-white/5 hover:shadow-blue-600/20"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
              <div className="flex gap-2">
                <a href="https://linkedin.com/hoangpham74" className="p-3 bg-zinc-50 dark:bg-zinc-950 text-zinc-400 dark:text-zinc-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </header>

          {/* Page 1 Content Grid */}
          <div className="grid md:grid-cols-12 gap-16">
            
            {/* Left Column: Summary & Top Experience */}
            <div className="md:col-span-8 space-y-20">
              
              {/* Summary */}
              <section className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Executive Summary</h2>
                  <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
                </div>
                <p className="text-[19px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium italic">
                  "9 years across visual systems, crypto-native environments, and fast-moving execution. Strongest at turning dense context into clearer outputs, repeatable workflows, and practical internal systems that help teams move with less friction."
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  {signalCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 px-6 py-6 text-zinc-100 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                      >
                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950/80 text-blue-400 ring-1 ring-blue-900/80">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-3">
                          <p className="text-[28px] leading-[1.05] font-black tracking-tight text-white">
                            {card.title}
                          </p>
                          <p className="text-[14px] font-semibold leading-relaxed text-zinc-400">
                            {card.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Top Experience */}
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Core Experience</h2>
                  <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
                </div>
                
                <div className="space-y-16">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group relative border-l border-zinc-100 pl-6 dark:border-zinc-800"
                  >
                    <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">Independent Operator / Designer / Builder</h3>
                        <span className="text-[11px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest pt-2">2025 — PRESENT</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight">Self-directed / high-context freelance</p>
                    </div>
                    <ul className="space-y-4 text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Created a product onboarding video for Drift Protocol to explain a new UI feature and make adoption clearer for users.</span></li>
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Developing AI-assisted workflows, internal tooling directions, and structured research surfaces to reduce friction in dense information environments.</span></li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['Workflow Ops', 'Interface Clarity', 'AI Systems'].map(tag => (
                        <span key={tag} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-[10px] font-black px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/30 uppercase tracking-tight">{tag}</span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="group relative border-l border-zinc-100 pl-6 dark:border-zinc-800"
                  >
                    <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">Multimedia Marketing Designer</h3>
                        <span className="text-[11px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest pt-2">FROM 4/2024</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight">at Factor</p>
                    </div>
                    <ul className="space-y-4 text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Developed and implemented Factor’s brand identity across platforms while maintaining visual consistency.</span></li>
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Created custom illustrations, 2D/3D motion design, product demo visuals, and campaign assets.</span></li>
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Designed reusable templates for decks, reports, and recurring social content to keep creative output consistent.</span></li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['System Design', 'Visual Ops', 'DeFi Context'].map(tag => (
                        <span key={tag} className="bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-500 text-[10px] font-black px-3 py-1 rounded-full border border-zinc-100 dark:border-zinc-800 uppercase tracking-tight">{tag}</span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="group relative border-l border-zinc-100 pl-6 dark:border-zinc-800"
                  >
                    <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">Multimedia Marketing Designer</h3>
                        <span className="text-[11px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest pt-2">FROM 8/2022</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight">at Kyber Network</p>
                    </div>
                    <ul className="space-y-4 text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Created engaging digital assets for marketing campaigns with a strong visual narrative.</span></li>
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Developed multimedia content tailored for social media and crypto-native audiences.</span></li>
                      <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" /><span>Organized graphic assets for easier reuse, faster access, and more consistent output.</span></li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['Crypto Native', 'Education', 'Visual Comm'].map(tag => (
                        <span key={tag} className="bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-500 text-[10px] font-black px-3 py-1 rounded-full border border-zinc-100 dark:border-zinc-800 uppercase tracking-tight">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>

            {/* Right Column: Strengths & Links */}
            <div className="md:col-span-4 space-y-20">
              
              {/* Strengths */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Strengths</h2>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "DeFi / Web3 Interest", desc: "Strong interest in blockchain, DeFi, gaming, and technology, with a focus on making complex ideas more legible through design.", variant: "primary" },
                    { title: "Adaptability", desc: "Comfortable moving across brand, campaign, illustration, 2D/3D, and motion work depending on team needs.", variant: "secondary" },
                    { title: "Problem-solving", desc: "Brings a self-motivated, creative, and practical approach to visual communication challenges.", variant: "secondary" }
                  ].map((strength, i) => (
                    <motion.div 
                      key={strength.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={cn(
                        "p-6 rounded-2xl space-y-3 group border transition-all duration-300",
                        strength.variant === "primary" 
                          ? "bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 hover:border-blue-400" 
                          : "bg-zinc-50 dark:bg-zinc-950 border-zinc-100 dark:border-zinc-800 hover:border-blue-400"
                      )}
                    >
                      <h4 className={cn(
                        "text-sm font-black uppercase tracking-widest transition-colors",
                        strength.variant === "primary" ? "text-blue-900 dark:text-blue-100" : "text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600"
                      )}>
                        {strength.title}
                      </h4>
                      <p className={cn(
                        "text-[14px] leading-relaxed font-medium transition-colors",
                        strength.variant === "primary" ? "text-blue-800/70 dark:text-blue-300/60" : "text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                      )}>
                        {strength.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section className="pt-12 border-t border-zinc-100 dark:border-zinc-800">
                <div className="space-y-6">
                  <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-6">Network</h2>
                  {[
                    { label: "Portfolio", href: "/" },
                    { label: "LinkedIn", href: "https://linkedin.com/hoangpham74" }
                  ].map((link, i) => (
                    <motion.a 
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center justify-between group text-sm font-black text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/20 hover:translate-x-1"
                    >
                      {link.label} <ArrowUpRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </section>

            </div>
          </div>

          {/* Page 1 Footer */}
          <footer className="mt-32 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <p className="text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-[0.3em]">Hoang Pham // CV // Page 01</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              <p className="text-[10px] text-zinc-300 dark:text-zinc-700 font-mono">Updated 2026</p>
            </div>
          </footer>

        </div>
      </motion.div>

      {/* PAGE 2: DEPTH & SUPPORTING PROOF */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xl shadow-black/40 dark:shadow-black/60 min-h-[1100px] font-sans selection:bg-blue-50 dark:selection:bg-blue-900/30 selection:text-blue-700 dark:selection:text-blue-300 relative overflow-hidden transition-colors duration-300"
      >
        <div className="p-8 md:p-16">
          {/* Header Section - Page 2 (Smaller) */}
          <header className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-10 mb-16">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100">Hoang Pham</h1>
              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
              <p className="text-xs font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em]">CV // Design Background</p>
            </div>
            <p className="text-[10px] text-zinc-300 dark:text-zinc-700 font-mono">Selected background and work highlights</p>
          </header>

          {/* Page 2 Content Grid */}
          <div className="grid md:grid-cols-12 gap-16">
            
            {/* Left Column: Remaining Experience */}
            <div className="md:col-span-8 space-y-16">
              
              {/* Prior Experience */}
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Prior Experience</h2>
                  <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
                </div>
                
                <div className="space-y-12">
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Multimedia Designer</h3>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">2020 — 2022</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight mb-4">VNG Corporation</p>
                    <p className="text-[15px] text-zinc-500 dark:text-zinc-500 leading-relaxed">
                      Created digital marketing posts, animated videos, stylized game art, 3D elements, and motion content across multimedia campaigns.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">2D/3D Designer</h3>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">2019 — 2020</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight mb-4">ADT Group</p>
                    <p className="text-[15px] text-zinc-500 dark:text-zinc-500 leading-relaxed">
                      Designed digital marketing posts, infographics, internal-event visuals, and incorporated simple animations plus 3D visualization into presentations.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">3D Designer</h3>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">2018 — 2019</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight mb-4">Creasia</p>
                    <p className="text-[15px] text-zinc-500 dark:text-zinc-500 leading-relaxed">
                      Designed event activations, displays, games, staging, signage, uniforms, banners, flyers, and invitations while contributing to concept brainstorming.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">2D/3D Designer</h3>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">2017 — 2018</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight mb-4">Tri Luc Viet</p>
                    <p className="text-[15px] text-zinc-500 dark:text-zinc-500 leading-relaxed">
                      Executed artwork layouts, designed POSM for multiple channels, and supported printing and production delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Selected Projects / Proof */}
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Tools & Interests</h2>
                  <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-[1.5rem] border border-zinc-100 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-950/70">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">Tools</p>
                    <h4 className="mt-3 text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100">Creative stack</h4>
                    <p className="mt-3 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">Graphic design, multimedia design, illustration, motion, 2D/3D support, and reusable creative assets for campaigns, branding, and storytelling.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-zinc-100 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-950/70">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">Interest</p>
                    <h4 className="mt-3 text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100">Domain focus</h4>
                    <p className="mt-3 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">DeFi, blockchain, gaming, and technology — especially where visual clarity can help audiences understand complex products faster.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Stack */}
            <div className="md:col-span-4 space-y-16">
              
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Capabilities</h2>
                </div>
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em]">Design Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Graphic Design', 'Illustration', '2D/3D Design'].map(tool => (
                        <span key={tool} className="rounded-full border border-zinc-200 px-3 py-2 text-[12px] font-semibold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em]">Creative Work</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Motion Design', 'Social Media Visuals', 'Brand Assets'].map(tool => (
                        <span key={tool} className="rounded-full border border-zinc-200 px-3 py-2 text-[12px] font-semibold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Extras */}
              <section className="pt-10 border-t border-zinc-100 dark:border-zinc-800">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Location</p>
                  <p className="text-[13px] font-semibold text-zinc-700 dark:text-zinc-300">Remote / Global</p>
                </div>
              </section>

            </div>
          </div>

          {/* Page 2 Footer */}
          <footer className="mt-32 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <p className="text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-[0.3em]">Hoang Pham // CV // Page 02</p>
            <p className="text-[10px] text-zinc-200 dark:text-zinc-800 font-mono">End of CV</p>
          </footer>

        </div>
      </motion.div>

    </div>
  );
}
