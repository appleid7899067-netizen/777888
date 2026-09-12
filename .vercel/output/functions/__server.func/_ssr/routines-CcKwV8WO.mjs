import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Play, m as Plus } from "../_libs/lucide-react.mjs";
import { l as ROUTINE_TEMPLATES } from "./catalog-Dl9lRGb5.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Button, o as useFleet, t as AppShell } from "./app-shell-Blnhs3ml.mjs";
import { t as Badge } from "./badge-DLV3CtNt.mjs";
import { t as Textarea } from "./textarea-a5RlBCEZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Switch } from "./switch-BCgsbnlA.mjs";
import { t as Input } from "./input-DfJPDxV_.mjs";
import { t as Label } from "./label-DmtJXS-x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routines-CcKwV8WO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RoutinesPage() {
	const routines = useFleet((s) => s.routines);
	const addRoutine = useFleet((s) => s.addRoutine);
	const toggleRoutine = useFleet((s) => s.toggleRoutine);
	const markRoutineRun = useFleet((s) => s.markRoutineRun);
	const [name, setName] = (0, import_react.useState)("");
	const [cadence, setCadence] = (0, import_react.useState)("Daily 09:00");
	const [prompt, setPrompt] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
				children: "Automation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-3xl font-medium tracking-tight",
				children: "Routines"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: "Saved prompts on a cadence. They can touch MCP connectors and a linked repo. Run now, or let them fire later."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: ROUTINE_TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-full bg-elevated px-3 py-1 text-xs text-muted shadow-[var(--shadow-border)] hover:text-fg",
					onClick: () => {
						setName(t.name);
						setCadence(t.cadence);
						setPrompt(t.prompt);
					},
					children: t.name
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 grid gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				onSubmit: (e) => {
					e.preventDefault();
					if (!name.trim() || !prompt.trim()) return;
					addRoutine({
						name,
						cadence,
						prompt,
						enabled: true
					});
					toast.success("Routine saved.");
					setName("");
					setPrompt("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rt-name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "rt-name",
								value: name,
								onChange: (e) => setName(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rt-cad",
								children: "Cadence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "rt-cad",
								value: cadence,
								onChange: (e) => setCadence(e.target.value)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "rt-p",
							children: "Prompt"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "rt-p",
							value: prompt,
							onChange: (e) => setPrompt(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "w-fit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Save routine"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: routines.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-medium",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: r.enabled ? "ok" : "default",
									children: r.enabled ? "on" : "paused"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: r.cadence
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 truncate text-sm text-muted",
								children: r.prompt
							}),
							r.lastRun ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-[11px] text-subtle",
								children: ["Last run ", new Date(r.lastRun).toLocaleString()]
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: r.enabled,
							onCheckedChange: () => toggleRoutine(r.id)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => {
								markRoutineRun(r.id);
								toast.success("Routine queued in this prototype.");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), " Run now"]
						})]
					})]
				}, r.id))
			})
		]
	}) });
}
//#endregion
export { RoutinesPage as component };
