export const notes = [
  {
    id: "note-01",
    title: "Designing for high-context users",
    date: "2024-03-15",
    excerpt: "Why standard UX advice often falls short when building for experienced users in complex domains like DeFi.",
    content: `
      Standard UX advice often prioritizes simplicity and "reducing cognitive load" above all else. That works well for many consumer apps, but it can become limiting when the audience needs more context to make good decisions.

      In DeFi, someone is rarely just "sending money." They may be managing liquidity, monitoring slippage, and balancing risk across multiple protocols. Hiding too much of that complexity behind a "simple" interface can actually increase risk.

      ### A Different Mental Model
      In these environments, people often need visibility and control more than hand-holding. The interface should help them understand what is happening and act with confidence.

      ### Key Principles:
      1. **Useful density**: Use space to surface what matters.
      2. **Direct interaction**: Let people work with the information itself, not only through abstract forms.
      3. **Clear reasoning**: Show the "why" behind the numbers.
    `
  },
  {
    id: "note-02",
    title: "Clarity in crypto",
    date: "2024-02-28",
    excerpt: "Balancing the need to explain complex mechanics with the need to keep interfaces clean and actionable.",
    content: `
      The crypto space is notorious for jargon and technical complexity. Designing for clarity means translating these mechanics into a language that is both accurate and accessible.

      ### The Translation Layer
      We need to bridge the gap between "on-chain reality" and "user perception." This involves:
      - Visualizing smart contract states.
      - Explaining transaction lifecycles.
      - Providing clear feedback for asynchronous actions.
    `
  },
  {
    id: "note-03",
    title: "Designing for active workflows",
    date: "2024-01-12",
    excerpt: "The difference between designing for passive consumption and task-heavy work.",
    content: `
      Some users want to be entertained or complete one simple task. Others need to stay in control of a messy process and move through it quickly.

      ### Design for Control
      - **Keyboard-first support**: Experienced users rely on shortcuts.
      - **Flexible layouts**: Let people decide what information matters most.
      - **Batch actions**: Support faster execution when the work repeats.
    `
  },
  {
    id: "note-04",
    title: "Dashboards and decision surfaces",
    date: "2023-11-05",
    excerpt: "A dashboard is only useful if it helps you make a decision. Otherwise, it's just decoration.",
    content: `
      Too many dashboards are just "data graveyards." A true decision surface highlights the information that requires action.

      ### Actionable Data
      - **Thresholds and Alerts**: Don't just show a number; show if it's "good" or "bad."
      - **Contextual Actions**: Provide the button to fix the problem right next to the data showing the problem.
    `
  },
  {
    id: "note-05",
    title: "AI-assisted work",
    date: "2023-09-20",
    excerpt: "Moving beyond the chat interface to integrate AI into actual work.",
    content: `
      Chatbots are only the starting point. The more interesting use of AI is inside real work, where it can help people move faster, notice patterns, and reduce repetitive effort.

      ### Beyond the Chatbox
      - **Workflow assistance**: Predicting the next step in a complex process.
      - **Synthesis of raw input**: Turning scattered logs and notes into clearer takeaways.
    `
  }
];

export const experiments: any[] = [
  {
    id: "rangepilot",
    title: "RangePilot: Liquidity Position Manager",
    status: "Case Study / In Progress",
    description: "A middle path between high-maintenance perp trading and passive LP drift: range-based operations guided by market assessment.",
    details: "RangePilot sits between perp trading and pure LP. It gives inventory managers a way to express market views through range-based operations without requiring constant high-frequency trading or accepting passive drift into impermanent loss.",
    caseStudy: {
      headline: "Manage LP positions with clearer decisions, safer execution, and less exposure drift.",
      summary: "Perp trading demands constant high-frequency management. Pure LP stays passive and drifts with impermanent loss. RangePilot sits between them: a range-based operating model that reduces exposure drift while still letting managers adjust positions based on market assessment.",
      metaStrip: [
        { label: "Role", value: "Product framing, workflow design, readiness criteria" },
        { label: "Focus", value: "Range-based inventory management between perp trading and pure LP" },
        { label: "Outcome", value: "Lower exposure drift with clearer operator control and safer execution gates" }
      ],
      problem: [
        "Managers holding inventory usually face two weak extremes: perp trading, which demands constant high-frequency management, and pure LP, which stays passive and drifts with impermanent loss."
      ],
      theIdea: {
        text: [
          "RangePilot was shaped as the middle operating model between active perp trading and passive LP holding.",
          "Instead of forcing constant high-frequency management or passive drift, it lets managers adjust range exposure based on market assessment.",
          "The product became easier to trust because it could explain both what action to take and when execution should stay blocked."
        ],
        bullets: [
          "market assessment",
          "pool snapshot",
          "inventory state",
          "position snapshot",
          "range action",
          "execution readiness",
          "block reason"
        ]
      },
      decisionMatrix: [
        {
          signal: "Bullish / want more upside exposure",
          posture: "Lean risk-on inside the range",
          action: "Increase LP or rerange upward",
        },
        {
          signal: "Bearish / want less downside exposure",
          posture: "Defend inventory and tighten risk",
          action: "Reduce LP, collect, or rerange lower",
        },
        {
          signal: "Neutral / mean-reverting view",
          posture: "Harvest inside a defined band",
          action: "Hold range or rebalance inventory",
        },
        {
          signal: "Unclear view or weak execution proof",
          posture: "Preserve optionality",
          action: "Block execution and show the missing proof / parity reason",
        },
      ],
      howItWorks: [
        { title: "Input market view", desc: "Start from market assessment plus current pool, position, and inventory state." },
        { title: "Choose the range action", desc: "Decide whether to hold, rebalance, rerange, or collect based on the operating posture you want." },
        { title: "Validate before execution", desc: "Simulate, reconcile, and check proof, parity, and readiness before advancing." },
        { title: "Execute or block", desc: "Act only when the route is strong enough; otherwise block and show the exact reason." }
      ],
      usefulBullets: [
        "Created a middle path between perp trading and pure LP",
        "Let managers express market assessment without full high-frequency trading behavior",
        "Used blocked execution as a trust feature instead of hiding weak readiness"
      ],
      outcome: "RangePilot became a clearer product by defining the space between perp trading and pure LP. Instead of generic automation, it became a range-based operating workflow that reduces exposure drift while still letting managers act on market assessment.",
      closingLine: "RangePilot became stronger when it was framed as the operating layer between passive LP drift and high-frequency perp management.",
      images: []
    }
  },
  {
    id: "dj-trade",
    title: "DJ Trade: Standardizing Trading Workflow",
    status: "Case Study",
    description: "Built a trading operations surface that turns readiness checks and review loops into a clearer execution workflow.",
    details: "DJ Trade turns manual trading from a messy, memory-heavy process into a structured operating workflow where setup quality, review surfaces, and live execution context stay visible together.",
    caseStudy: {
      headline: "Review trades faster, act with more confidence, and keep execution context visible.",
      summary: "DJ Trade turns manual trading from a messy, memory-heavy process into a structured operating workflow where readiness checks, review surfaces, and execution context stay connected.",
      metaStrip: [
        { label: "Role", value: "Product design, workflow design, trading operations UX" },
        { label: "Focus", value: "Trading workflow standardization" },
        { label: "Outcome", value: "Clearer execution and review discipline" }
      ],
      problem: [
        "Manual trading usually breaks in the workflow, not just in market direction.",
        "Emotion, scattered context, skipped checks, and weak review make good methods hard to apply consistently."
      ],
      theIdea: {
        text: [
          "DJ Trade was designed to standardize how trades are prepared, executed, and reviewed.",
          "Instead of isolated clicks, it treats trading as an operational workflow with visible progress and safer decision points."
        ],
        bullets: ["Market context", "Setup quality", "Readiness checks", "Execution state", "Risk controls", "Post-trade review"]
      },
      aiIntegration: {
        title: "DJ Trade brings AI into the trading workflow.",
        description: "Traders can describe setups in plain language and get immediate support without leaving the product.",
        examples: [
          "“I’d buy on a chart like this”",
          "“Does this setup match my method?”",
          "“What changed since the last review?”"
        ],
        closing: "This keeps AI useful inside the workflow instead of turning it into a separate black-box tool."
      },
      howItWorks: [
        { title: "Structured setup review", desc: "Trades start with clearer context, not just chart instinct." },
        { title: "Readiness before execution", desc: "The tool checks whether the setup is actually ready." },
        { title: "Risk visible in the workflow", desc: "Risk and degraded conditions stay visible before and during execution." },
        { title: "Live context during the trade", desc: "The trader can monitor what changed and whether the setup still holds." },
        { title: "Post-trade learning loop", desc: "Each trade becomes easier to review and improve." }
      ],
      setupDetails: [
        "Bot setup starts with naming the bot and selecting its symbols, so scope is clear before execution starts.",
        "Timeframe and settlement are configured in the same flow, keeping operating rhythm aligned.",
        "Readiness works like a preflight step: the bot only becomes deployable when setup and context are strong enough."
      ],
      workerDetails: [
        "Workers split responsibility across setup review, monitoring, and follow-up.",
        "This gives the operator clearer visibility into who handles what and where attention should go next."
      ],
      usefulBullets: [
        "Makes trade preparation more repeatable",
        "Brings risk and readiness checks forward",
        "Helps traders act with more structure under pressure",
        "Supports post-trade review and refinement"
      ],
      outcome: "DJ Trade turns manual trading into a clearer operating workflow, where the next action depends on visible readiness instead of memory or impulse.",
      closingLine: "DJ Trade helps standardize manual trading so progress is tied to real workflow structure, not memory, impulse, or vague status labels.",
      images: [
        { src: "/dj-djtrade_v3_live_shell_overview.png", role: "hero", story: "Control-surface overview showing live state, system health, worker coordination, and operator guidance in one trading workspace." },
        { src: "/dj-trade/dj-trade-workstation-new-bot.png", role: "support-1", story: "New bot setup makes symbol scope, timeframe, settlement choice, and crew-role assignment readable in one place before a workstation bot is allowed to go live." },
        { src: "/dj-trade/dj-trade-position-monitor.jpg", role: "support-2", story: "Position Monitor shows how live exposure, unrealized PNL, and per-symbol bot context stay visible while workers and operator roles handle monitoring instead of relying on memory alone." },
        { src: "/dj-trade/dj-trade-workstation-configure-bot.jpg", role: "support-3", story: "Bot configuration ties readiness decisions to deployment structure, so worker responsibilities and workstation settings are shaped together instead of being patched in later." }
      ]
    }
  },
  {
    id: "agent-board",
    title: "AgentBoard: Command Center for Human + AI Execution",
    status: "Case Study / In Progress",
    description: "A work-management layer for operators building with AI. It makes priorities, blockers, proofs, and next actions legible.",
    details: "AgentBoard is built for real execution, not fake productivity. It gives you a live workspace where projects, blockers, proof of work, and agent activity stay connected, so you can move from idea to verified outcome without losing context.",
    caseStudy: {
      headline: "Coordinate AI agents with clearer priorities, visible proof, and less context loss.",
      summary: "AgentBoard helps humans and AI agents work inside a shared operational system, where tasks, blockers, verification, artifacts, and handoffs stay connected from start to finish.",
      metaStrip: [
        { label: "Role", value: "Product design, workflow design, system thinking" },
        { label: "Focus", value: "Human + agent collaboration" },
        { label: "Outcome", value: "Clearer execution, review, and handoff" }
      ],
      problem: [
        "Working with agents gets messy fast.",
        "The issue is usually not raw agent capability.",
        "It is everything around the agent: context scattered across chats, unclear task state, invisible blockers, weak handoffs, 'done' without proof, and expensive retries...",
        "Most agent workflows generate activity.",
        "Fewer generate reliable progress."
      ],
      theIdea: {
        text: [
          "AgentBoard was designed as the coordination layer between human intent and agent execution.",
          "Instead of treating agents like isolated chat threads...",
          "It treats them like collaborators inside a visible work system.",
          "The system is opinionated about priority, proof, blockers, and next action, so work stays reviewable instead of dissolving into chat history.",
          "It keeps these parts connected:"
        ],
        bullets: ["Task context", "Project state", "Blockers", "Proof notes", "Artifacts", "Handoffs", "Next actions"]
      },
      howItWorks: [
        { title: "Structured task intake", desc: "Each task starts with a goal, context, constraints, and priority." },
        { title: "Shared project visibility", desc: "AgentBoard makes active, blocked, next, and completed work legible." },
        { title: "Agent execution with continuity", desc: "Agents work from structured history instead of restarting from blank context." },
        { title: "Proof tied to the task", desc: "Artifacts, notes, screenshots, and verification stay attached to the work." },
        { title: "Human-in-the-loop review", desc: "Humans can approve, redirect, or refine without breaking continuity." },
        { title: "Reusable workflow learning", desc: "Repeated patterns can become templates, runbooks, or stable systems." }
      ],
      usefulBullets: [
        "Reduces context loss",
        "Makes blockers visible earlier",
        "Improves handoff quality",
        "Makes agent work easier to review",
        "Turns outputs into verifiable progress",
        "Creates a foundation for repeatable human + agent workflows"
      ],
      outcome: "AgentBoard moves agent collaboration away from scattered conversations and toward a real operating system for work. The value is not just faster execution. It is better continuity, better review, and better trust in what got done.",
      closingLine: "AgentBoard solves the coordination problem around AI agents, not just the execution problem.",
      images: [
        { src: "/casefiles/agentboard/agentboard-projects-workspace.jpg", role: "hero", story: "Projects workspace shows AgentBoard as a real multi-project execution system with global triage, blocked tasks, priorities, progress, and durable project links in one board-native surface." },
        { src: "/casefiles/agentboard/agentboard-deerflow-agents.jpg", role: "support-1", story: "Agent operations view keeps runtime health, active versus idle lanes, recent results, and ownership visible so operators can see who is working and what to send next." },
        { src: "/casefiles/agentboard/agentboard-rangepilot-task-picks.jpg", role: "support-2", story: "Task picks view shows how AgentBoard turns a project into a real operating queue, with NOW versus NEXT lanes, current agent assignment, verification state, and the next decision kept visible together." }
      ]
    }
  }
];
