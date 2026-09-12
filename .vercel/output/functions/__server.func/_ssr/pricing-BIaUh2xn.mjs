import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as PLANS, r as CREDIT_PACKS } from "./catalog-Dl9lRGb5.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Button, o as useFleet, t as AppShell } from "./app-shell-Blnhs3ml.mjs";
import { t as Badge } from "./badge-DLV3CtNt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-BIaUh2xn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	const [yearly, setYearly] = (0, import_react.useState)(false);
	const addCredits = useFleet((s) => s.addCredits);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		marketing: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
					children: "Pricing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-3xl font-medium tracking-tight",
					children: "Credits when you need them. Unlimited when you don’t."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 inline-flex rounded-lg bg-elevated p-1 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `h-8 rounded-md px-3 text-sm ${!yearly ? "bg-surface text-fg shadow-[var(--shadow-border)]" : "text-muted"}`,
						onClick: () => setYearly(false),
						children: "Monthly"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `h-8 rounded-md px-3 text-sm ${yearly ? "bg-surface text-fg shadow-[var(--shadow-border)]" : "text-muted"}`,
						onClick: () => setYearly(true),
						children: "Yearly · save ~20%"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3",
					children: PLANS.map((p) => {
						const price = yearly ? Math.round(p.yearly / 12) : p.monthly;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] ${p.popular ? "ring-1 ring-primary/40" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-medium",
										children: p.name
									}), p.popular ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "primary",
										children: "Most used"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: p.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 font-mono text-3xl tabular-nums",
									children: [
										"$",
										price,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-subtle",
											children: " / mo"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex-1 space-y-2 text-sm text-muted",
									children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary" }), f]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "mt-5",
									variant: p.popular ? "default" : "secondary",
									onClick: () => {
										addCredits(p.id === "free" ? 20 : 250);
										toast.success(`Prototype ${p.name} unlocked. Credits added.`);
									},
									children: ["Get ", p.name]
								})
							]
						}, p.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 text-xl font-medium tracking-tight",
					children: "One-time credit packs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Never expire. In this prototype they just add to the local balance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: CREDIT_PACKS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "rounded-xl bg-surface p-4 text-left shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
						onClick: () => {
							addCredits(c.credits);
							toast.success(`Added ${c.credits} credits.`);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-lg tabular-nums",
								children: [c.credits.toLocaleString(), " cr"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: ["$", c.price]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-subtle",
								children: [
									"$",
									c.per.toFixed(4),
									" / credit"
								]
							}),
							"best" in c && c.best ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "primary",
								className: "mt-2",
								children: "Best value"
							}) : null
						]
					}, c.credits))
				})
			]
		})
	});
}
//#endregion
export { PricingPage as component };
