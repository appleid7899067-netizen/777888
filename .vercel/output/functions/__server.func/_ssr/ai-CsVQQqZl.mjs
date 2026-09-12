import { A as ChevronDown, j as Check } from "../_libs/lucide-react.mjs";
import { a as LANGUAGE_GROUPS, s as MODELS } from "./catalog-Dl9lRGb5.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as cn, o as useFleet } from "./app-shell-Blnhs3ml.mjs";
import { t as Badge } from "./badge-DLV3CtNt.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as SelectItem$1, c as SelectLabel$1, d as SelectValue$1, f as SelectViewport, i as SelectIcon, l as SelectPortal, n as SelectContent$1, o as SelectItemIndicator, r as SelectGroup$1, s as SelectItemText, t as Select$1, u as SelectTrigger$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-CsVQQqZl.js
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
function SelectTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		className: cn("flex h-10 w-full items-center justify-between gap-2 rounded-md bg-elevated px-3 text-sm text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 data-[placeholder]:text-subtle [&>span]:line-clamp-1", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-muted" })
		})]
	});
}
function SelectContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
		className: cn("z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-pop),var(--shadow-border)]", className),
		position: "popper",
		sideOffset: 6,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: "p-1.5",
			children
		})
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		className: cn("relative flex cursor-pointer items-center rounded-md py-2 pr-8 pl-2.5 text-sm outline-none data-[highlighted]:bg-elevated", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
			className: "absolute right-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-primary" })
		})]
	});
}
function SelectGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroup$1, {
		className: cn(className),
		...props
	});
}
function SelectLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
		className: cn("px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-subtle", className),
		...props
	});
}
function ModelPicker({ value, onChange, compact }) {
	const storeId = useFleet((s) => s.modelId);
	const setModel = useFleet((s) => s.setModel);
	const id = value ?? storeId;
	const set = onChange ?? setModel;
	const model = MODELS.find((m) => m.id === id) ?? MODELS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value: id,
		onValueChange: set,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: compact ? "h-8 w-[min(100%,16rem)] text-xs" : "w-[min(100%,22rem)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 truncate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: model.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-subtle",
					children: [model.credits, " cr"]
				})]
			}) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
			"free",
			"standard",
			"premium",
			"elite",
			"ultimate"
		].map((tier) => {
			const group = MODELS.filter((m) => m.tier === tier);
			if (!group.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: tier }), group.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: m.id,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex w-full items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [m.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-subtle",
						children: m.provider
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: m.credits === 0 ? "ok" : "default",
						children: [m.credits, " cr"]
					})]
				})
			}, m.id))] }, tier);
		}) })]
	});
}
function LanguagePicker({ value, onChange, label }) {
	const storeLang = useFleet((s) => s.language);
	const setLanguage = useFleet((s) => s.setLanguage);
	const lang = value ?? storeLang;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium text-muted",
			children: label
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: lang,
			onValueChange: onChange ?? setLanguage,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: lang }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: LANGUAGE_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: g.name }), g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: item,
				children: item
			}, item))] }, g.name)) })]
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var runFleet = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("b01eec4ae031d949d6120ad0aa199a1efa45a61de6c878711eed3aebd889a3d5"));
//#endregion
export { ModelPicker as n, runFleet as r, LanguagePicker as t };
