import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as LoaderCircle, h as Play } from "../_libs/lucide-react.mjs";
import { p as modelById, t as AGENTS } from "./catalog-Dl9lRGb5.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Button, o as useFleet, t as AppShell } from "./app-shell-Blnhs3ml.mjs";
import { t as MarkdownOutput } from "./markdown-output-BUb0UKJY.mjs";
import { t as Badge } from "./badge-DLV3CtNt.mjs";
import { n as ModelPicker, r as runFleet } from "./ai-CsVQQqZl.mjs";
import { t as Textarea } from "./textarea-a5RlBCEZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agents-DHByrhPJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AgentsPage() {
	const [task, setTask] = (0, import_react.useState)("Design and implement a token-bucket rate limiter for a Node API. Cover concurrency, Redis vs in-memory, and tests.");
	const [selected, setSelected] = (0, import_react.useState)(AGENTS.filter((a) => a.id !== "orchestrator").map((a) => a.id));
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)([]);
	const [output, setOutput] = (0, import_react.useState)("");
	const spend = useFleet((s) => s.spend);
	const addCredits = useFleet((s) => s.addCredits);
	const addGeneration = useFleet((s) => s.addGeneration);
	const modelId = useFleet((s) => s.modelId);
	function toggle(id) {
		setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
	}
	async function run() {
		const model = modelById(modelId);
		const cost = Math.max(2, model.credits);
		if (!spend(cost)) {
			toast.error("Out of credits — topping up.");
			addCredits(20);
			return;
		}
		setBusy(true);
		setOutput("");
		const crew = AGENTS.filter((a) => selected.includes(a.id) || a.id === "orchestrator");
		setPhase(["Orchestrator scoping the work"]);
		for (const a of crew.slice(1)) {
			await new Promise((r) => setTimeout(r, 220));
			setPhase((p) => [...p, `@${a.handle} ${a.posture === "read-only" ? "reading" : "running"}`]);
		}
		try {
			const extras = `Enabled agents: ${crew.map((a) => `@${a.handle} (${a.posture}) — ${a.instructions}`).join("\n")}`;
			const res = await runFleet({ data: {
				mode: "agents",
				prompt: task,
				extras,
				modelId
			} });
			if (!res.ok) {
				toast.error(res.error);
				addCredits(cost);
				return;
			}
			setOutput(res.text);
			addGeneration({
				tool: "agents",
				title: task.slice(0, 72),
				prompt: task,
				output: res.text,
				language: "multi",
				model: res.model,
				credits: cost
			});
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Fleet failed");
			addCredits(cost);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
				children: "Agent platform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-3xl font-medium tracking-tight",
				children: "One task. A fleet that cooperates."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: "The orchestrator scopes bounded sub-tasks. Read-only agents run in parallel. Write-capable work takes turns in a shared worktree. One synthesis comes back to you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "space-y-2",
					children: AGENTS.map((a) => {
						const on = a.id === "orchestrator" || selected.includes(a.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: a.id === "orchestrator",
							onClick: () => toggle(a.id),
							className: `w-full rounded-lg p-3 text-left shadow-[var(--shadow-border)] ${on ? "bg-surface" : "bg-transparent opacity-55"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-primary",
										children: ["@", a.handle]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: a.posture })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium",
									children: a.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: a.role
								})
							]
						}, a.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-muted",
									children: "Model"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelPicker, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => void run(),
								disabled: busy,
								children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Run fleet"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: task,
							onChange: (e) => setTask(e.target.value),
							className: "min-h-28",
							placeholder: "Give the fleet a job…"
						}),
						phase.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-1 rounded-lg bg-surface p-3 font-mono text-xs text-muted shadow-[var(--shadow-border)]",
							children: phase.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: String(i + 1).padStart(2, "0")
								}), p]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-64 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
							children: output ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownOutput, { text: output }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-subtle",
								children: busy ? "Agents are writing into a shared journal…" : "Synthesis appears here after a run."
							})
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { AgentsPage as component };
