import { i as DOCS } from "./catalog-Dl9lRGb5.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as AppShell } from "./app-shell-Blnhs3ml.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs-_05hEmIV.js
var import_jsx_runtime = require_jsx_runtime();
function DocsIndex() {
	const sections = [...new Set(DOCS.map((d) => d.section))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		marketing: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
					children: "Documentation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-3xl font-medium tracking-tight",
					children: "How the fleet works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-muted",
					children: "Short pages, no marketing fog. Start with About, then Credits, then Parallel agents."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8 sm:grid-cols-2",
					children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
						children: section
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: DOCS.filter((d) => d.section === section).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/docs/$slug",
							params: { slug: d.slug },
							className: "text-sm text-fg hover:text-primary",
							children: d.title
						}) }, d.slug))
					})] }, section))
				})
			]
		})
	});
}
//#endregion
export { DocsIndex as component };
