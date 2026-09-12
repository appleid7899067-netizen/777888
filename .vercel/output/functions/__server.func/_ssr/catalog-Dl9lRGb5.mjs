import { E as FileCode2, F as BookOpen, P as Bot, T as FileText, _ as MessageSquare, c as Sparkles, f as ScanSearch, h as Play, n as Workflow, o as TestTubeDiagonal, w as GitCompare, x as Languages } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-Dl9lRGb5.js
var TOOLS = [
	{
		slug: "generator",
		name: "Code Generator",
		short: "Generate",
		blurb: "Instantly generate efficient, clean code from plain-language instructions.",
		href: "/tools/generator",
		icon: Sparkles,
		kind: "prompt-code",
		cta: "Generate",
		cost: 1,
		samples: [{
			label: "REST API",
			prompt: "Build a FastAPI service with CRUD for notes, SQLite, pydantic models, and a health endpoint."
		}, {
			label: "CLI tool",
			prompt: "Write a TypeScript CLI that diffs two JSON files and prints a colored tree of added/removed/changed keys."
		}]
	},
	{
		slug: "assistant",
		name: "Code Assistant",
		short: "Assist",
		blurb: "Fix issues, improve quality, and add features with an AI that understands your code.",
		href: "/tools/assistant",
		icon: MessageSquare,
		kind: "prompt-code",
		cta: "Get assistance",
		cost: 1,
		samples: [{
			label: "Fix a bug",
			prompt: "This function drops the last item when the list has odd length. Fix it and explain why.",
			code: "def pairwise(xs):\n    out = []\n    for i in range(0, len(xs) - 1, 2):\n        out.append((xs[i], xs[i+1]))\n    return out"
		}]
	},
	{
		slug: "converter",
		name: "Code Converter",
		short: "Convert",
		blurb: "Translate code between languages and frameworks with accurate syntax and logic.",
		href: "/tools/converter",
		icon: Languages,
		kind: "convert",
		cta: "Convert",
		cost: 1,
		samples: [{
			label: "Python → Go",
			prompt: "Convert this to idiomatic Go.",
			code: "from collections import Counter\n\ndef top_k(words, k):\n    counts = Counter(w.lower() for w in words)\n    return [w for w, _ in counts.most_common(k)]"
		}]
	},
	{
		slug: "explainer",
		name: "Code Explainer",
		short: "Explain",
		blurb: "Understand unfamiliar snippets with crisp, adjustable explanations.",
		href: "/tools/explainer",
		icon: BookOpen,
		kind: "prompt-code",
		cta: "Explain",
		cost: 1,
		samples: [{
			label: "Regex",
			prompt: "Explain this like I'm a mid-level engineer. Call out pitfalls.",
			code: "^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$"
		}]
	},
	{
		slug: "enhancer",
		name: "Code Enhancer",
		short: "Enhance",
		blurb: "Generate smart suggestions and auto-apply them — refactor with a click.",
		href: "/tools/enhancer",
		icon: GitCompare,
		kind: "prompt-code",
		cta: "Enhance",
		cost: 1,
		samples: [{
			label: "Refactor",
			prompt: "Suggest concrete refactors ranked by impact. Show before/after for the top 3.",
			code: "function get(users, id){\n  for(var i=0;i<users.length;i++){\n    if(users[i].id==id){return users[i]}\n  }\n  return null\n}"
		}]
	},
	{
		slug: "documentation",
		name: "Documentation Generator",
		short: "Docs",
		blurb: "Docstrings, READMEs, API references and architecture docs — for entire projects.",
		href: "/tools/documentation",
		icon: FileText,
		kind: "prompt-code",
		cta: "Generate docs",
		cost: 1,
		samples: [{
			label: "README",
			prompt: "Write a README plus module-level docs for this library.",
			code: "export function retry<T>(fn: () => Promise<T>, attempts = 3, ms = 250) {\n  return fn().catch((err) => {\n    if (attempts <= 1) throw err;\n    return new Promise((r) => setTimeout(r, ms)).then(() => retry(fn, attempts - 1, ms * 2));\n  });\n}"
		}]
	},
	{
		slug: "tests",
		name: "Unit Test Generator",
		short: "Tests",
		blurb: "Automatically generate comprehensive unit tests with edge cases.",
		href: "/tools/tests",
		icon: TestTubeDiagonal,
		kind: "prompt-code",
		cta: "Generate tests",
		cost: 1,
		samples: [{
			label: "Edge cases",
			prompt: "Write vitest tests covering happy path, empty input, unicode, and overflow.",
			code: "export function slugify(s: string) {\n  return s.normalize('NFKD').replace(/[^\\w\\s-]/g, '').trim().replace(/[\\s_-]+/g, '-').toLowerCase();\n}"
		}]
	},
	{
		slug: "diagram",
		name: "Diagram Generator",
		short: "Diagram",
		blurb: "Create visual representations of code structure, data flow, and architecture.",
		href: "/tools/diagram",
		icon: Workflow,
		kind: "diagram",
		cta: "Generate diagram",
		cost: 1,
		samples: [{
			label: "Auth flow",
			prompt: "Sequence diagram of OAuth authorization-code flow with PKCE, including the token refresh path."
		}]
	},
	{
		slug: "diagram-to-code",
		name: "Diagram to Code",
		short: "Dia → Code",
		blurb: "Turn mermaid, ASCII, or written diagrams into working implementations.",
		href: "/tools/diagram-to-code",
		icon: FileCode2,
		kind: "diagram-to-code",
		cta: "Convert diagram",
		cost: 1,
		samples: [{
			label: "State machine",
			prompt: "Implement this as a TypeScript state machine with exhaustive switches.",
			code: "stateDiagram-v2\n  [*] --> idle\n  idle --> loading: fetch\n  loading --> success: ok\n  loading --> error: fail\n  error --> idle: retry\n  success --> idle: reset"
		}]
	},
	{
		slug: "reviewer",
		name: "AI Code Reviewer",
		short: "Review",
		blurb: "Review a file or a whole project. Reports issues with severity and suggested fixes.",
		href: "/tools/reviewer",
		icon: ScanSearch,
		kind: "prompt-code",
		cta: "Review",
		cost: 1,
		samples: [{
			label: "Security pass",
			prompt: "Review for correctness, security, and maintainability. Severity on each finding.",
			code: "app.get('/user', (req, res) => {\n  const q = `SELECT * FROM users WHERE id = '${req.query.id}'`;\n  db.query(q, (err, rows) => res.json(rows));\n});"
		}]
	},
	{
		slug: "runner",
		name: "Code Runner",
		short: "Run",
		blurb: "Write in a real editor, run in a sandbox, and get AI help inline.",
		href: "/runner",
		icon: Play,
		kind: "runner",
		cta: "Run",
		cost: 0,
		samples: [{
			label: "FizzBuzz",
			prompt: "",
			code: "for (let i = 1; i <= 30; i++) {\n  const f = i % 3 === 0 ? 'Fizz' : '';\n  const b = i % 5 === 0 ? 'Buzz' : '';\n  console.log((f + b) || i);\n}"
		}]
	}
];
var CHAT_NAV = {
	slug: "chat",
	name: "AI Chat",
	blurb: "Chat with top LLMs — memory, file uploads, web search, code execution, parallel agents.",
	href: "/chat",
	icon: Bot
};
var LANGUAGE_GROUPS = [
	{
		name: "Languages",
		items: [
			"Python",
			"JavaScript",
			"TypeScript",
			"Go",
			"Rust",
			"Java",
			"C",
			"C++",
			"C#",
			"Kotlin",
			"Swift",
			"Ruby",
			"PHP",
			"R",
			"Scala",
			"Haskell",
			"Elixir",
			"Erlang",
			"Clojure",
			"F#",
			"Dart",
			"Lua",
			"Perl",
			"Bash",
			"Zsh",
			"PowerShell",
			"SQL",
			"HTML/CSS/JS",
			"Solidity",
			"Nim",
			"Zig",
			"OCaml",
			"Julia",
			"MATLAB",
			"Fortran",
			"COBOL",
			"Ada",
			"Assembly",
			"VHDL",
			"Verilog",
			"Prolog",
			"Scheme",
			"CommonLisp",
			"Groovy",
			"Objective-C",
			"Pascal",
			"Crystal",
			"Haxe",
			"Elm",
			"APL",
			"ABAP",
			"SAS",
			"Batch",
			"Node.js"
		]
	},
	{
		name: "Databases",
		items: [
			"PostgreSQL",
			"MySQL",
			"SQLite",
			"T-SQL",
			"PL/SQL",
			"BigQuery",
			"Snowflake",
			"Redshift",
			"IBM Db2",
			"MongoDB",
			"Redis"
		]
	},
	{
		name: "Web",
		items: [
			"React",
			"VueJS",
			"Angular",
			"Django",
			"Flask",
			"FastAPI",
			"Express.js",
			"Laravel",
			"Rails",
			"Spring",
			"ASP.NET",
			"Symfony",
			"Next.js"
		]
	},
	{
		name: "Web scraping",
		items: [
			"Playwright",
			"Puppeteer",
			"Selenium",
			"Scrapy",
			"BeautifulSoup"
		]
	},
	{
		name: "Deep learning",
		items: [
			"PyTorch",
			"TensorFlow",
			"Keras",
			"JAX",
			"Transformers"
		]
	},
	{
		name: "Game engines",
		items: [
			"Unity",
			"Unreal C++",
			"Godot GDScript",
			"Godot C#",
			"Roblox Luau"
		]
	},
	{
		name: "Hardware / IoT",
		items: [
			"Arduino",
			"ESP32",
			"MicroPython",
			"CircuitPython",
			"STM32 HAL"
		]
	}
];
LANGUAGE_GROUPS.flatMap((g) => g.items);
var MODELS = [
	{
		id: "auto",
		name: "Auto-Select",
		provider: "CodingFleet",
		credits: 1,
		tier: "standard",
		context: "128K",
		coding: 72,
		speed: "fast",
		available: true
	},
	{
		id: "grok-4.5",
		name: "Grok 4.5",
		provider: "xAI",
		credits: 2,
		tier: "premium",
		context: "256K",
		coding: 88,
		speed: "medium",
		available: true
	},
	{
		id: "gpt-5.6-luna",
		name: "GPT-5.6 Luna",
		provider: "OpenAI",
		credits: 1,
		tier: "premium",
		context: "200K",
		coding: 84,
		speed: "fast",
		available: true
	},
	{
		id: "gpt-5.6-terra",
		name: "GPT-5.6 Terra",
		provider: "OpenAI",
		credits: 5,
		tier: "premium",
		context: "400K",
		coding: 90,
		speed: "medium",
		available: true
	},
	{
		id: "gpt-6-astra",
		name: "GPT-6 Astra",
		provider: "OpenAI",
		credits: 30,
		tier: "ultimate",
		context: "1M",
		coding: 95,
		speed: "deep",
		available: true
	},
	{
		id: "claude-sonnet-5",
		name: "Claude Sonnet 5",
		provider: "Anthropic",
		credits: 7,
		tier: "premium",
		context: "200K",
		coding: 91,
		speed: "medium",
		available: true
	},
	{
		id: "claude-opus-5",
		name: "Claude Opus 5",
		provider: "Anthropic",
		credits: 16,
		tier: "elite",
		context: "200K",
		coding: 94,
		speed: "deep",
		available: true
	},
	{
		id: "gemini-3-flash",
		name: "Gemini 3 Flash",
		provider: "Google",
		credits: 1,
		tier: "standard",
		context: "1M",
		coding: 78,
		speed: "fast",
		available: true
	},
	{
		id: "gemini-3.1-pro",
		name: "Gemini 3.1 Pro",
		provider: "Google",
		credits: 7,
		tier: "premium",
		context: "1M",
		coding: 86,
		speed: "medium",
		available: true
	},
	{
		id: "deepseek-v4-pro",
		name: "DeepSeek V4 Pro",
		provider: "DeepSeek",
		credits: 2,
		tier: "standard",
		context: "128K",
		coding: 89,
		speed: "fast",
		available: true
	},
	{
		id: "qwen-3.8-max",
		name: "Qwen 3.8 Max",
		provider: "Qwen",
		credits: 3,
		tier: "premium",
		context: "256K",
		coding: 87,
		speed: "medium",
		available: true
	},
	{
		id: "qwen-3.8-flash",
		name: "Qwen 3.8 Flash",
		provider: "Qwen",
		credits: 1,
		tier: "standard",
		context: "128K",
		coding: 80,
		speed: "fast",
		available: true
	},
	{
		id: "kimi-k2.7-code",
		name: "Kimi K2.7 Code",
		provider: "Moonshot",
		credits: 1,
		tier: "standard",
		context: "128K",
		coding: 85,
		speed: "fast",
		available: true
	},
	{
		id: "glm-5.3",
		name: "GLM 5.3",
		provider: "Z.ai",
		credits: 2,
		tier: "standard",
		context: "128K",
		coding: 82,
		speed: "medium",
		available: true
	},
	{
		id: "minimax-m3",
		name: "MiniMax M3",
		provider: "MiniMax",
		credits: 1,
		tier: "standard",
		context: "200K",
		coding: 79,
		speed: "fast",
		available: true
	},
	{
		id: "mistral-medium-3.5",
		name: "Mistral Medium 3.5",
		provider: "Mistral",
		credits: 2,
		tier: "premium",
		context: "128K",
		coding: 81,
		speed: "medium",
		available: true
	},
	{
		id: "gemma-4-26b",
		name: "Gemma 4 26B",
		provider: "Google",
		credits: 0,
		tier: "free",
		context: "32K",
		coding: 70,
		speed: "fast",
		available: true
	},
	{
		id: "nemotron-3.5",
		name: "Nemotron 3.5 Lightning",
		provider: "NVIDIA",
		credits: 0,
		tier: "free",
		context: "32K",
		coding: 68,
		speed: "fast",
		available: true
	}
];
var AGENTS = [
	{
		id: "orchestrator",
		handle: "orchestrator",
		name: "Orchestrator",
		role: "Scopes work, delegates, synthesizes one answer.",
		posture: "full-auto",
		instructions: "Frame bounded sub-tasks. Never dump the whole job on one agent.",
		color: "primary"
	},
	{
		id: "implementer",
		handle: "shipper",
		name: "Shipper",
		role: "Smallest durable change. Tests and a clean handoff.",
		posture: "allow-edits",
		instructions: "Make the smallest durable change. Leave tests and a clean handoff behind.",
		color: "ok"
	},
	{
		id: "reviewer",
		handle: "reviewer",
		name: "Reviewer",
		role: "Correctness, style, missing edge cases.",
		posture: "read-only",
		instructions: "Hunt for gaps, risky assumptions, and missing edge cases.",
		color: "info"
	},
	{
		id: "security",
		handle: "security",
		name: "Security",
		role: "Threat-model before a single file is changed.",
		posture: "read-only",
		instructions: "Flag weak boundaries, injection, auth gaps, secret leakage.",
		color: "danger"
	},
	{
		id: "tester",
		handle: "tester",
		name: "Tester",
		role: "Coverage, fixtures, failure modes.",
		posture: "allow-edits",
		instructions: "Write tests that would have caught the bug. No snapshot theatre.",
		color: "warn"
	},
	{
		id: "architect",
		handle: "architect",
		name: "Architect",
		role: "Boundaries, data flow, what not to build.",
		posture: "read-only",
		instructions: "Propose the thinnest architecture that survives the next three features.",
		color: "info"
	},
	{
		id: "docs",
		handle: "scribe",
		name: "Scribe",
		role: "Docs that a stranger can run in five minutes.",
		posture: "allow-edits",
		instructions: "Document the contract, not the implementation gossip.",
		color: "muted"
	},
	{
		id: "advocate",
		handle: "devils-advocate",
		name: "Devil's advocate",
		role: "Challenge the plan before anyone writes code.",
		posture: "read-only",
		instructions: "Challenge every plan. Hunt for gaps and unspoken assumptions.",
		color: "warn"
	}
];
var MCP_SERVERS = [
	{
		id: "context7",
		name: "Context7",
		category: "Docs",
		blurb: "Up-to-date library docs by version."
	},
	{
		id: "deepwiki",
		name: "DeepWiki",
		category: "Docs",
		blurb: "Repo wikis turned into queryable context."
	},
	{
		id: "mslearn",
		name: "Microsoft Learn",
		category: "Docs",
		blurb: "Official Microsoft / Azure references."
	},
	{
		id: "aws",
		name: "AWS Knowledge",
		category: "Cloud",
		blurb: "Service docs, IAM patterns, quotas."
	},
	{
		id: "cloudflare",
		name: "Cloudflare Docs",
		category: "Cloud",
		blurb: "Workers, R2, DNS, Zero Trust."
	},
	{
		id: "sentry",
		name: "Sentry",
		category: "Observability",
		blurb: "Issues, stack traces, release health."
	},
	{
		id: "supabase",
		name: "Supabase",
		category: "Data",
		blurb: "Postgres, auth, storage, edge functions."
	},
	{
		id: "neon",
		name: "Neon",
		category: "Data",
		blurb: "Serverless Postgres branches and queries."
	},
	{
		id: "stripe",
		name: "Stripe",
		category: "Payments",
		blurb: "API, webhooks, billing objects."
	},
	{
		id: "heroku",
		name: "Heroku",
		category: "Cloud",
		blurb: "Dynos, config, pipelines."
	},
	{
		id: "github",
		name: "GitHub",
		category: "Source",
		blurb: "Issues, PRs, contents, checks."
	},
	{
		id: "huggingface",
		name: "Hugging Face",
		category: "ML",
		blurb: "Models, datasets, inference."
	}
];
var PLANS = [
	{
		id: "free",
		name: "Free",
		monthly: 0,
		yearly: 0,
		blurb: "Try the fleet. No card.",
		features: [
			"20 credits / month",
			"Standard models",
			"3 guest uses before sign-up",
			"Chat + all coding tools",
			"1 sandbox (no snapshots)"
		]
	},
	{
		id: "pro",
		name: "Pro",
		monthly: 7,
		yearly: 69,
		blurb: "Credits that never expire.",
		features: [
			"250 permanent credits / month",
			"100K input tokens / request",
			"Premium models unlocked",
			"File uploads (~10K tokens)",
			"1 active sandbox",
			"Private generations"
		]
	},
	{
		id: "unlimited",
		name: "Unlimited",
		monthly: 25,
		yearly: 229,
		blurb: "Unlimited standard models.",
		features: [
			"Unlimited standard models",
			"600 weekly premium credits",
			"2 sandboxes + snapshots",
			"BYOK (OpenAI, Anthropic, Gemini, DeepSeek)",
			"Chat memory 30K"
		]
	},
	{
		id: "elite",
		name: "Elite",
		monthly: 45,
		yearly: 399,
		blurb: "Shell, files, elite models.",
		popular: true,
		features: [
			"200K input tokens",
			"1,200 weekly premium credits",
			"Elite models (Opus, Astra)",
			"5 sandboxes + shell + files",
			"Unlimited file / image uploads"
		]
	},
	{
		id: "ultimate",
		name: "Ultimate",
		monthly: 99,
		yearly: 989,
		blurb: "No daily caps on flagship models.",
		features: [
			"400K input tokens",
			"3,000 weekly premium credits",
			"No daily limit on Opus / Astra",
			"Unlimited sandboxes",
			"Routines + GitHub in chat"
		]
	},
	{
		id: "max",
		name: "Ultimate Max",
		monthly: 189,
		yearly: 1795,
		blurb: "The whole fleet, uncapped.",
		features: [
			"800K input tokens",
			"6,000 weekly premium credits",
			"1M-context models",
			"Dedicated support",
			"Custom MCP servers"
		]
	}
];
var CREDIT_PACKS = [
	{
		credits: 200,
		price: 7,
		per: .035
	},
	{
		credits: 500,
		price: 12,
		per: .024
	},
	{
		credits: 1e3,
		price: 19,
		per: .019
	},
	{
		credits: 2e3,
		price: 35,
		per: .0175
	},
	{
		credits: 5e3,
		price: 69,
		per: .0138
	},
	{
		credits: 1e4,
		price: 119,
		per: .0119
	},
	{
		credits: 2e4,
		price: 199,
		per: .01,
		best: true
	}
];
var DOCS = [
	{
		slug: "about",
		title: "About CodingFleet",
		section: "Start",
		body: ["CodingFleet is an AI-powered workspace for people who write software. It started in 2023 as a set of practical coding tools — generate, convert, explain, test — and grew into a platform: many models, a sandboxed runner, parallel agents, scheduled routines, and MCP connectors in one place.", "The principle is simple. AI should be useful on a Tuesday afternoon, not only in a demo. Pick the model that fits the job. Run the code. Spawn a reviewer. Ship."]
	},
	{
		slug: "credits",
		title: "Credits system",
		section: "Billing",
		body: ["Most tool uses cost 1 credit. Premium and elite models cost more — the picker shows the price before you send.", "Free accounts receive 20 credits each month. Paid credits never expire. Unlimited-tier plans include uncapped standard-model usage plus a weekly premium pool that resets on Monday."]
	},
	{
		slug: "code-execution",
		title: "Code execution",
		section: "Platform",
		body: [
			"When Code Execution is on, the model can write files, run commands, query databases, and return artifacts from an isolated sandbox.",
			"Filesystem tools: fs_read, fs_write, fs_edit, fs_glob, fs_grep. Command tool: run_command. Data: db_query against PostgreSQL, SQLite, MySQL, Redis, or MongoDB.",
			"JavaScript and TypeScript run locally in this prototype. Other languages are traced by the model so you still get stdout, stderr, and a verdict."
		]
	},
	{
		slug: "parallel-agents",
		title: "Parallel agents",
		section: "Platform",
		body: ["Give one task to the orchestrator. It frames bounded sub-tasks, starts detached runs for @shipper, @reviewer, @security, @tester and the rest, then synthesizes one answer back into your thread.", "Write-capable work is serialized in a shared worktree so agents do not clobber each other. Read-only agents run in parallel."]
	},
	{
		slug: "mcp",
		title: "MCP connectors",
		section: "Platform",
		body: ["Enable remote MCP servers per chat: Context7, DeepWiki, Microsoft Learn, AWS Knowledge, Cloudflare Docs, Sentry, Supabase, Neon, Stripe, Heroku, GitHub, Hugging Face.", "Connectors stay local to the conversation. Nothing is enabled globally unless you pin it on a project."]
	},
	{
		slug: "routines",
		title: "Routines",
		section: "Automation",
		body: ["A routine is a saved prompt on a schedule — daily review, nightly tests, weekly dependency audit. Routines can use MCP connectors and a linked Git repo.", "Run on demand and watch the live journal, or let the cadence fire while you are away."]
	},
	{
		slug: "sandbox",
		title: "Sandbox management",
		section: "Platform",
		body: ["Define packages, setup scripts, environment variables, snapshots, and network isolation. A sandbox can be the default for a chat or a project.", "Elite and above unlock an interactive shell and a file manager. Ultimate removes the instance cap."]
	},
	{
		slug: "privacy",
		title: "Privacy",
		section: "Trust",
		body: ["Your prompts, code, and uploads are yours. CodingFleet does not train its own models on customer content. Private Session Mode keeps a thread in the browser for 7 days and never stores it on the server."]
	},
	{
		slug: "models",
		title: "Choosing a model",
		section: "Start",
		body: ["Auto-Select routes by complexity, cost, and coding score. Use a Flash / Luna-class model for short transforms. Use Sonnet, Terra, or Grok for refactors. Reserve Opus and Astra for hard reasoning.", "This prototype runs every request on Grok 4.5 so the tools actually work. The catalog still shows the fleet you would pick in production."]
	}
];
var ROUTINE_TEMPLATES = [
	{
		id: "standup",
		name: "Morning standup",
		cadence: "Weekdays 09:00",
		prompt: "Summarize open PRs, failing checks, and yesterday's chat memory into a 8-line standup."
	},
	{
		id: "tests",
		name: "Nightly tests",
		cadence: "Daily 02:00",
		prompt: "Generate missing unit tests for files touched in the last 24 hours and open a review."
	},
	{
		id: "deps",
		name: "Dependency audit",
		cadence: "Mondays 08:00",
		prompt: "Scan lockfiles for CVEs and stale majors. Rank by blast radius."
	},
	{
		id: "review",
		name: "PR review sweep",
		cadence: "Every 4 hours",
		prompt: "Review open pull requests. Flag security and missing tests first."
	},
	{
		id: "docs",
		name: "Docs drift",
		cadence: "Fridays 16:00",
		prompt: "Diff README and public APIs. Draft a changelog."
	}
];
var STATS = {
	generations: 1494333,
	programmers: 76542,
	languages: 90
};
function toolBySlug(slug) {
	return TOOLS.find((t) => t.slug === slug);
}
function modelById(id) {
	return MODELS.find((m) => m.id === id) ?? MODELS[0];
}
var SYSTEM_PROMPTS = {
	generator: "You are CodingFleet Code Generator. Write production-quality code. Prefer complete, runnable files. Explain briefly after the code. Use markdown with fenced blocks labeled by language.",
	assistant: "You are CodingFleet Code Assistant. Fix, improve, or extend the user's code. Show the patched code, then a short rationale. Do not rewrite unrelated parts.",
	converter: "You are CodingFleet Code Converter. Translate code between languages/frameworks. Preserve behavior. Idiomatic target language. Note semantic mismatches.",
	explainer: "You are CodingFleet Code Explainer. Explain clearly. Structure: what it does, how, pitfalls, a tiny example. Match the requested verbosity.",
	enhancer: "You are CodingFleet Code Enhancer. Return ranked suggestions (High/Med/Low) with before/after snippets. Then an optional fully enhanced file.",
	documentation: "You are CodingFleet Documentation Generator. Produce README, API docs, and docstrings. Accurate to the given code. No fluff.",
	tests: "You are CodingFleet Unit Test Generator. Write real tests (vitest/pytest/go test as appropriate) covering edge cases. Include setup.",
	diagram: "You are CodingFleet Diagram Generator. Output a mermaid diagram in a ```mermaid fence, then a short legend. Prefer flowchart, sequence, class, or erDiagram as fits the ask.",
	"diagram-to-code": "You are CodingFleet Diagram-to-Code. Implement the diagram as working code in the requested language. Keep names from the diagram.",
	reviewer: "You are CodingFleet Code Reviewer. Findings first, each with severity (blocker/major/minor/nit), location, why, and a patch. End with a verdict.",
	chat: "You are CodingFleet, an AI coding workspace. Be direct. Use tools conceptually: you can reason about web docs, code execution, and files. Prefer code fences. If the user enables parallel agents, think in bounded sub-tasks.",
	agents: "You are the CodingFleet orchestrator. For the user's task, produce work from these agents in this order, each under a heading `## @handle — Name`:\n@architect, @security, @shipper, @tester, @reviewer, @scribe, @devils-advocate.\nThen a final `## Synthesis` that the human can act on. Keep each agent section tight. Code in fences.",
	runner: "You are CodingFleet Code Runner copilot. The user ran or asked about code. Diagnose, suggest a fix, or optimize. Show a corrected snippet if needed."
};
//#endregion
export { LANGUAGE_GROUPS as a, PLANS as c, SYSTEM_PROMPTS as d, TOOLS as f, DOCS as i, ROUTINE_TEMPLATES as l, toolBySlug as m, CHAT_NAV as n, MCP_SERVERS as o, modelById as p, CREDIT_PACKS as r, MODELS as s, AGENTS as t, STATS as u };
