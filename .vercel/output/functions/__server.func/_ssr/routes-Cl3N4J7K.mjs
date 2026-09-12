import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as Globe, I as ArrowRight, P as Bot, h as Play, l as Shield, n as Workflow, s as Terminal } from "../_libs/lucide-react.mjs";
import { f as TOOLS, t as AGENTS, u as STATS } from "./catalog-Dl9lRGb5.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as formatNumber, n as Button, r as ToolLink, t as AppShell } from "./app-shell-Blnhs3ml.mjs";
import { t as Badge } from "./badge-DLV3CtNt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cl3N4J7K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEMOS = [
	{
		id: "convert",
		label: "Python → Go",
		from: "def top_k(words, k):\n    from collections import Counter\n    return [w for w,_ in Counter(words).most_common(k)]",
		to: "func TopK(words []string, k int) []string {\n    counts := map[string]int{}\n    for _, w := range words {\n        counts[w]++\n    }\n    return ranked[:k]\n}"
	},
	{
		id: "explain",
		label: "Explain code",
		from: "xs.reduce((a,b)=>a^b,0)",
		to: "XOR-fold. Pairs cancel. The unique (or odd-count) value remains. O(n) time, O(1) space."
	},
	{
		id: "tests",
		label: "Unit tests",
		from: "export function clamp(n, lo, hi) {\n  return Math.min(hi, Math.max(lo, n))\n}",
		to: "it('pins to lo', () => expect(clamp(-2, 0, 5)).toBe(0))\nit('pins to hi', () => expect(clamp(9, 0, 5)).toBe(5))"
	},
	{
		id: "fix",
		label: "Fix a bug",
		from: "if (user.role = 'admin') allow()",
		to: "if (user.role === 'admin') allow()\n// assignment was always truthy — now a comparison"
	}
];
function Home() {
	const [demo, setDemo] = (0, import_react.useState)(DEMOS[0].id);
	const current = DEMOS.find((d) => d.id === demo) ?? DEMOS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		marketing: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0",
					style: { background: "radial-gradient(800px 400px at 80% -10%, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-elevated px-3 py-1 text-xs text-muted shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ok" }), "20+ LLMs · Parallel agents · Code exec"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-4xl font-medium tracking-tight sm:text-5xl",
							children: ["AI-powered coding tools.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-muted",
								children: "A fleet that cooperates."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-prose text-base text-muted",
							children: "Generate, refactor, test, convert, and ship. One workspace for models, sandboxes, and agents that split the work instead of taking turns at a single prompt."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/chat",
									children: ["New chat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "secondary",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/agents",
									children: "Open the fleet"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-10 grid max-w-lg grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: formatNumber(STATS.generations),
									l: "Generations"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: formatNumber(STATS.programmers),
									l: "Programmers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: `${STATS.languages}+`,
									l: "Languages"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: DEMOS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDemo(d.id),
								className: `h-8 rounded-md px-3 text-xs ${demo === d.id ? "bg-elevated text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg"}`,
								children: d.label
							}, d.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePane, {
								title: "Input",
								body: current.from
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePane, {
								title: "Fleet",
								body: current.to,
								accent: true
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
							children: "Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-medium tracking-tight",
							children: "A suite around real coding work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-prose text-sm text-muted",
							children: "Each tool is a focused workflow — not a chatbot wearing a different hat. Chat is there when you need it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolLink, {
								tool: t,
								className: "group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-medium tracking-tight",
										children: t.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: t.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-3 inline-flex items-center gap-1 text-xs text-primary",
										children: [
											t.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5" })
										]
									})
								]
							}, t.slug))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
							children: "Agent platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-medium tracking-tight",
							children: "One chat. A fleet that cooperates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Mention @shipper, @security, @reviewer. The orchestrator frames bounded sub-tasks, runs read-only agents in parallel, serializes writes, and brings one synthesis back to the thread."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Bot,
									text: "Custom profiles — posture and instructions per agent."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Shield,
									text: "Read-only, allow-edits, or full-auto — per agent."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Workflow,
									text: "Observable runs. Sequenced journals."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Globe,
									text: "MCP connectors and web access, per chat."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Terminal,
									text: "Sandboxed code execution with snapshots."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/agents",
								children: "Launch parallel agents"
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: AGENTS.slice(0, 6).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-lg bg-bg px-4 py-3 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-0.5 font-mono text-xs text-primary",
									children: ["@", a.handle]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: a.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: a.role
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "ml-auto shrink-0",
									children: a.posture
								})
							]
						}, a.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-medium tracking-tight",
							children: "From curiosity to shipping — four steps."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								{
									n: "01",
									t: "Explore",
									d: "Use any tool. Guest credits are enough to feel the fleet."
								},
								{
									n: "02",
									t: "Pick a model",
									d: "Auto-Select, Grok, or a specialist. Cost is shown before you send."
								},
								{
									n: "03",
									t: "Run it",
									d: "Sandbox, tests, diagrams, review. Advanced tools when you need them."
								},
								{
									n: "04",
									t: "Ship",
									d: "Copy, download, or hand the patch to @shipper for a durable change."
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-primary",
										children: s.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-medium",
										children: s.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: s.d
									})
								]
							}, s.n))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight",
						children: "Ready when you are."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "No account required in this prototype. Credits live in your browser."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/chat",
								children: "Start a chat"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/tools/$slug",
								params: { slug: "generator" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), " Try generator"]
							})
						})]
					})]
				})
			})
		]
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs text-subtle",
		children: l
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "font-mono text-lg tabular-nums",
		children: n
	})] });
}
function CodePane({ title, body, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-lg bg-bg shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-b border-border px-3 py-1.5 text-[11px] uppercase tracking-wider text-subtle",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: `overflow-x-auto p-3 font-mono text-[12px] leading-relaxed ${accent ? "text-primary" : "text-muted"}`,
			children: body
		})]
	});
}
function Feature({ icon: Icon, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })]
	});
}
//#endregion
export { Home as component };
