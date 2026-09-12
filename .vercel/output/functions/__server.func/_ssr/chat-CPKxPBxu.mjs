import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as Globe, P as Bot, T as FileText, a as Trash2, b as LoaderCircle, c as Sparkles, d as Send, g as Pin, k as CodeXml, m as Plus } from "../_libs/lucide-react.mjs";
import { o as MCP_SERVERS, p as modelById, t as AGENTS } from "./catalog-Dl9lRGb5.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as cn, n as Button, o as useFleet, t as AppShell } from "./app-shell-Blnhs3ml.mjs";
import { t as MarkdownOutput } from "./markdown-output-BUb0UKJY.mjs";
import { t as Badge } from "./badge-DLV3CtNt.mjs";
import { n as ModelPicker, r as runFleet } from "./ai-CsVQQqZl.mjs";
import { t as Textarea } from "./textarea-a5RlBCEZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Switch } from "./switch-BCgsbnlA.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-CPKxPBxu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		className: cn("relative overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2 touch-none select-none p-0.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border-strong" })
		})]
	});
}
function ChatPage() {
	const threads = useFleet((s) => s.threads);
	const activeThreadId = useFleet((s) => s.activeThreadId);
	const newThread = useFleet((s) => s.newThread);
	const setActiveThread = useFleet((s) => s.setActiveThread);
	const pinThread = useFleet((s) => s.pinThread);
	const deleteThread = useFleet((s) => s.deleteThread);
	const appendMessage = useFleet((s) => s.appendMessage);
	const updateTools = useFleet((s) => s.updateTools);
	const toggleMcp = useFleet((s) => s.toggleMcp);
	const spend = useFleet((s) => s.spend);
	const addCredits = useFleet((s) => s.addCredits);
	const modelId = useFleet((s) => s.modelId);
	const memory = useFleet((s) => s.memory);
	const thread = threads.find((t) => t.id === activeThreadId) ?? threads[0];
	const [draft, setDraft] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const scroller = (0, import_react.useRef)(null);
	const sorted = (0, import_react.useMemo)(() => [...threads].sort((a, b) => {
		if (a.pinned && !b.pinned) return -1;
		if (!a.pinned && b.pinned) return 1;
		return b.updatedAt - a.updatedAt;
	}), [threads]);
	async function send() {
		if (!thread || !draft.trim() || busy) return;
		const text = draft.trim();
		setDraft("");
		const model = modelById(modelId);
		const cost = thread.tools.agents ? Math.max(2, model.credits) : model.credits || 1;
		if (!spend(cost)) {
			toast.error("Out of credits — topping up the prototype balance.");
			addCredits(20);
			return;
		}
		appendMessage(thread.id, {
			role: "user",
			content: text
		});
		setBusy(true);
		const activity = [];
		if (thread.tools.web) activity.push("Web");
		if (thread.tools.code) activity.push("Code exec");
		if (thread.tools.files) activity.push("Files");
		if (thread.tools.agents) activity.push("Agents ×" + AGENTS.length);
		thread.mcp.forEach((m) => activity.push("MCP " + m));
		try {
			const history = thread.messages.slice(-8).map((m) => `${m.role}: ${m.content}`).join("\n\n");
			const extras = [
				`Active tools: ${JSON.stringify(thread.tools)}`,
				thread.mcp.length ? `MCP: ${thread.mcp.join(", ")}` : "",
				memory.length ? `Memory: ${memory.map((m) => m.text).join("; ")}` : "",
				history ? `Recent thread:\n${history}` : ""
			].filter(Boolean).join("\n");
			const res = await runFleet({ data: {
				mode: thread.tools.agents ? "agents" : "chat",
				prompt: text,
				modelId,
				extras
			} });
			if (!res.ok) {
				toast.error(res.error);
				addCredits(cost);
				appendMessage(thread.id, {
					role: "assistant",
					content: `Could not complete that turn.\n\n${res.error}`,
					activity
				});
				return;
			}
			appendMessage(thread.id, {
				role: "assistant",
				content: res.text,
				model: res.model,
				activity
			});
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Chat failed");
			addCredits(cost);
		} finally {
			setBusy(false);
			requestAnimationFrame(() => {
				scroller.current?.scrollTo({
					top: scroller.current.scrollHeight,
					behavior: "smooth"
				});
			});
		}
	}
	if (!thread) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-[calc(100dvh-3.5rem)] max-w-6xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-64 shrink-0 flex-col border-r border-border md:flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-subtle",
					children: "Chats"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon-sm",
					variant: "ghost",
					"aria-label": "New chat",
					onClick: () => newThread(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-0.5 px-2 pb-4",
					children: sorted.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `group flex items-center gap-1 rounded-md px-2 py-2 text-left text-sm ${t.id === thread.id ? "bg-elevated text-fg" : "text-muted hover:bg-elevated/60 hover:text-fg"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "min-w-0 flex-1 truncate text-left",
								onClick: () => setActiveThread(t.id),
								children: [t.pinned ? "· " : "", t.title]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hidden size-7 items-center justify-center rounded-sm group-hover:flex hover:bg-bg",
								onClick: () => pinThread(t.id),
								"aria-label": "Pin",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hidden size-7 items-center justify-center rounded-sm text-subtle group-hover:flex hover:text-danger",
								onClick: () => deleteThread(t.id),
								"aria-label": "Delete",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})
						]
					}, t.id))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-b border-border px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelPicker, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto flex items-center gap-1 md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon-sm",
							variant: "ghost",
							onClick: () => newThread(),
							"aria-label": "New chat",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scroller,
					className: "flex-1 overflow-y-auto px-4 py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl space-y-5",
						children: [thread.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: m.role === "user" ? "ml-8" : "mr-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-1 text-[11px] uppercase tracking-wider text-subtle",
									children: [m.role === "user" ? "You" : "Fleet", m.model ? ` · ${m.model}` : ""]
								}),
								m.activity && m.activity.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 flex flex-wrap gap-1",
									children: m.activity.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: a }, a))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: m.role === "user" ? "rounded-lg bg-elevated px-3 py-2 text-sm shadow-[var(--shadow-border)]" : "",
									children: m.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownOutput, { text: m.content }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "whitespace-pre-wrap",
										children: m.content
									})
								})
							]
						}, m.id)), busy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }), thread.tools.agents ? "Agents running in parallel…" : "Thinking…"]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-3 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolToggle, {
										icon: Globe,
										label: "Web",
										on: thread.tools.web,
										onChange: (v) => updateTools(thread.id, {
											...thread.tools,
											web: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolToggle, {
										icon: CodeXml,
										label: "Code",
										on: thread.tools.code,
										onChange: (v) => updateTools(thread.id, {
											...thread.tools,
											code: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolToggle, {
										icon: FileText,
										label: "Files",
										on: thread.tools.files,
										onChange: (v) => updateTools(thread.id, {
											...thread.tools,
											files: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolToggle, {
										icon: Bot,
										label: "Agents",
										on: thread.tools.agents,
										onChange: (v) => updateTools(thread.id, {
											...thread.tools,
											agents: v
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 flex flex-wrap gap-1",
								children: MCP_SERVERS.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => toggleMcp(thread.id, s.id),
									className: `rounded-full px-2 py-0.5 text-[11px] ${thread.mcp.includes(s.id) ? "bg-primary/15 text-primary" : "bg-elevated text-subtle"}`,
									children: s.name
								}, s.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end gap-2 rounded-lg bg-elevated p-2 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: draft,
									onChange: (e) => setDraft(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter" && !e.shiftKey) {
											e.preventDefault();
											send();
										}
									},
									placeholder: "Ask the fleet…  Shift+Enter for a newline",
									className: "min-h-12 border-0 bg-transparent shadow-none focus-visible:shadow-none",
									rows: 2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									onClick: () => void send(),
									disabled: busy || !draft.trim(),
									"aria-label": "Send",
									children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 flex items-center gap-1 text-[11px] text-subtle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), "Enter send · Shift+Enter newline"]
							})
						]
					})
				})
			]
		})]
	}) });
}
function ToolToggle({ icon: Icon, label, on, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-1.5 text-xs text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 text-primary" }),
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				checked: on,
				onCheckedChange: onChange
			})
		]
	});
}
//#endregion
export { ChatPage as component };
