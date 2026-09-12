import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trash2, b as LoaderCircle, c as Sparkles, h as Play } from "../_libs/lucide-react.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Button, o as useFleet, t as AppShell } from "./app-shell-Blnhs3ml.mjs";
import { t as MarkdownOutput } from "./markdown-output-BUb0UKJY.mjs";
import { n as ModelPicker, r as runFleet, t as LanguagePicker } from "./ai-CsVQQqZl.mjs";
import { t as Textarea } from "./textarea-a5RlBCEZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/runner-C7dZ_FzI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SAMPLE = `const nums = [3, 1, 4, 1, 5, 9];
console.log("sum", nums.reduce((a, b) => a + b, 0));
console.log("sorted", [...nums].sort((a, b) => a - b));`;
function isJs(lang) {
	return /javascript|typescript|node|\bjs\b|\bts\b|html/i.test(lang);
}
function RunnerPage() {
	const language = useFleet((s) => s.language);
	const setLanguage = useFleet((s) => s.setLanguage);
	const modelId = useFleet((s) => s.modelId);
	const spend = useFleet((s) => s.spend);
	const addCredits = useFleet((s) => s.addCredits);
	const [code, setCode] = (0, import_react.useState)(SAMPLE);
	const [stdout, setStdout] = (0, import_react.useState)("");
	const [stderr, setStderr] = (0, import_react.useState)("");
	const [aiHelp, setAiHelp] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [running, setRunning] = (0, import_react.useState)(false);
	const iframeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (!e.data || typeof e.data !== "object") return;
			if (e.data.source !== "fleet-runner") return;
			if (e.data.type === "log" || e.data.type === "done") setStdout(String(e.data.payload || ""));
			if (e.data.type === "err") setStderr(String(e.data.payload || ""));
		};
		window.addEventListener("message", handler);
		return () => window.removeEventListener("message", handler);
	}, []);
	function runLocal() {
		setRunning(true);
		setStdout("");
		setStderr("");
		const iframe = iframeRef.current;
		if (!iframe) return;
		iframe.srcdoc = `<!doctype html><html><body><script>
      const send = (type, payload) => parent.postMessage({ source: 'fleet-runner', type, payload }, '*');
      const log = [];
      console.log = (...a) => {
        log.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' '));
        send('log', log.join('\\n'));
      };
      console.error = (...a) => send('err', a.join(' '));
      window.onerror = (m) => send('err', String(m));
      try {
        ${code.replace(/<\/script/gi, "<\\\\/script")}
        send('done', log.join('\\n') || '(no output)');
      } catch (e) {
        send('err', e && e.stack ? e.stack : String(e));
      }
    <\/script></body></html>`;
		setTimeout(() => setRunning(false), 900);
	}
	async function run() {
		if (isJs(language)) {
			runLocal();
			return;
		}
		setRunning(true);
		setStdout("");
		setStderr("");
		try {
			const res = await runFleet({ data: {
				mode: "runner",
				prompt: "Execute this program and report stdout, stderr, exit code. Be literal.",
				code,
				language
			} });
			if (!res.ok) {
				setStderr(res.error);
				return;
			}
			setStdout(res.text);
		} finally {
			setRunning(false);
		}
	}
	async function askAi() {
		if (!spend(1)) {
			toast.error("Out of credits — topping up.");
			addCredits(20);
			return;
		}
		setBusy(true);
		try {
			const res = await runFleet({ data: {
				mode: "runner",
				prompt: `Help with this ${language} snippet. ${stderr ? "It failed:\\n" + stderr : "Optimize or explain the output."}\\n\\nOutput so far:\\n${stdout}`,
				code,
				language,
				modelId
			} });
			if (!res.ok) {
				toast.error(res.error);
				addCredits(1);
				return;
			}
			setAiHelp(res.text);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-end gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagePicker, {
							value: language,
							onChange: setLanguage,
							label: "Runtime"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => void run(),
						disabled: running,
						children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Run"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setCode(""),
						"aria-label": "Clear",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: code,
				onChange: (e) => setCode(e.target.value),
				className: "min-h-[28rem] font-mono text-[13px] leading-relaxed",
				spellCheck: false
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex min-h-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wider text-subtle",
							children: "Console"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelPicker, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => void askAi(),
								disabled: busy,
								children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), "AI help"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "min-h-40 flex-1 overflow-auto rounded-xl bg-surface p-4 font-mono text-[13px] text-ok shadow-[var(--shadow-border)] whitespace-pre-wrap",
						children: stdout || (running ? "running…" : "stdout is quiet.")
					}),
					stderr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-auto rounded-xl bg-surface p-4 font-mono text-[13px] text-danger shadow-[var(--shadow-border)] whitespace-pre-wrap",
						children: stderr
					}) : null,
					aiHelp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownOutput, { text: aiHelp })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				ref: iframeRef,
				title: "sandbox",
				sandbox: "allow-scripts",
				className: "hidden"
			})
		]
	}) });
}
//#endregion
export { RunnerPage as component };
