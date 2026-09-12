import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { N as CalendarClock, O as Coins, P as Bot, S as History, t as X, u as Server, v as MessageSquarePlus, y as Menu } from "../_libs/lucide-react.mjs";
import { f as TOOLS, n as CHAT_NAV } from "./catalog-Dl9lRGb5.mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTrigger, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Root2, i as Portal2, n as Item2, o as Separator2, r as Label2, s as Trigger, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-Blnhs3ml.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "id") {
	return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}
function formatNumber(n) {
	return new Intl.NumberFormat("en-US").format(n);
}
function FleetMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "8",
			className: "fill-elevated"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7 21.5 12 10h2.2L9.2 21.5H7Zm8.1 0L20.1 10h2.2L17.3 21.5h-2.2Zm8.1 0L28.2 10H30L25.1 21.5h-1.9Z",
			className: "fill-primary"
		})]
	});
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 text-fg no-underline",
		"aria-label": "CodingFleet home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetMark, {}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-medium tracking-tight",
			children: ["Coding", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "Fleet"
			})]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:opacity-92 active:scale-[0.98]",
			secondary: "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-elevated",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-elevated",
			danger: "bg-danger text-bg hover:opacity-92",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-5",
			icon: "size-10",
			"icon-sm": "size-8 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 8, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 min-w-48 overflow-hidden rounded-lg bg-surface p-1.5 shadow-[var(--shadow-pop),var(--shadow-border)]", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm text-fg outline-none data-[highlighted]:bg-elevated", className),
		...props
	});
}
function DropdownMenuLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		className: cn("px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-subtle", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		className: cn("my-1 h-px bg-border", className),
		...props
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
function SheetContent({ className, children, side = "left", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 flex h-full w-[min(20rem,88vw)] flex-col bg-surface shadow-[var(--shadow-pop)]", side === "left" ? "top-0 left-0" : "top-0 right-0", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-sm p-1 text-muted hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function ToolLink({ tool, className, children }) {
	if (tool.slug === "runner") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/runner",
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/$slug",
		params: { slug: tool.slug },
		className,
		children
	});
}
var seedThread = () => ({
	id: "welcome",
	title: "Welcome to the fleet",
	createdAt: Date.now(),
	updatedAt: Date.now(),
	tools: {
		web: true,
		code: true,
		files: false,
		agents: false
	},
	mcp: ["context7"],
	messages: [{
		id: "w1",
		role: "assistant",
		createdAt: Date.now(),
		content: "Fleet online. I can generate, convert, review, and run code — or spawn parallel agents on a hard problem.\n\nTry:\n- “Convert this Python snippet to idiomatic Go”\n- “Review this handler for SQL injection”\n- “@shipper @security design a token bucket rate limiter”"
	}]
});
var useFleet = create()(persist((set, get) => ({
	credits: 20,
	modelId: "grok-4.5",
	language: "Python",
	threads: [seedThread()],
	activeThreadId: "welcome",
	generations: [],
	sandboxes: [{
		id: "sb_default",
		name: "python-default",
		runtime: "Python 3.12",
		packages: "fastapi, pytest, pandas, httpx",
		status: "ready",
		snapshots: 1,
		createdAt: Date.now() - 864e5
	}, {
		id: "sb_node",
		name: "node-runner",
		runtime: "Node 22",
		packages: "vitest, tsx, zod",
		status: "ready",
		snapshots: 0,
		createdAt: Date.now() - 36e5
	}],
	routines: [{
		id: "r1",
		name: "Morning standup",
		cadence: "Weekdays 09:00",
		prompt: "Summarize open PRs and failing checks.",
		enabled: true
	}, {
		id: "r2",
		name: "Nightly tests",
		cadence: "Daily 02:00",
		prompt: "Generate missing tests for files touched in 24h.",
		enabled: false
	}],
	memory: [{
		id: "m1",
		text: "Prefers TypeScript, vitest, and short answers.",
		createdAt: Date.now()
	}],
	spend: (n) => {
		const { credits } = get();
		if (credits < n) return false;
		set({ credits: credits - n });
		return true;
	},
	addCredits: (n) => set({ credits: get().credits + n }),
	setModel: (id) => set({ modelId: id }),
	setLanguage: (language) => set({ language }),
	newThread: () => {
		const id = uid("chat");
		set({
			threads: [{
				id,
				title: "New chat",
				createdAt: Date.now(),
				updatedAt: Date.now(),
				tools: {
					web: false,
					code: false,
					files: false,
					agents: false
				},
				mcp: [],
				messages: []
			}, ...get().threads],
			activeThreadId: id
		});
		return id;
	},
	setActiveThread: (id) => set({ activeThreadId: id }),
	renameThread: (id, title) => set({ threads: get().threads.map((t) => t.id === id ? {
		...t,
		title
	} : t) }),
	pinThread: (id) => set({ threads: get().threads.map((t) => t.id === id ? {
		...t,
		pinned: !t.pinned
	} : t) }),
	deleteThread: (id) => {
		const next = get().threads.filter((t) => t.id !== id);
		set({
			threads: next.length ? next : [seedThread()],
			activeThreadId: get().activeThreadId === id ? next[0]?.id ?? "welcome" : get().activeThreadId
		});
	},
	appendMessage: (threadId, msg) => set({ threads: get().threads.map((t) => {
		if (t.id !== threadId) return t;
		const message = {
			id: msg.id ?? uid("m"),
			createdAt: Date.now(),
			role: msg.role,
			content: msg.content,
			model: msg.model,
			activity: msg.activity
		};
		const title = t.title === "New chat" && msg.role === "user" ? msg.content.slice(0, 42) || t.title : t.title;
		return {
			...t,
			title,
			updatedAt: Date.now(),
			messages: [...t.messages, message]
		};
	}) }),
	updateTools: (threadId, tools) => set({ threads: get().threads.map((t) => t.id === threadId ? {
		...t,
		tools
	} : t) }),
	toggleMcp: (threadId, id) => set({ threads: get().threads.map((t) => {
		if (t.id !== threadId) return t;
		const mcp = t.mcp.includes(id) ? t.mcp.filter((x) => x !== id) : [...t.mcp, id];
		return {
			...t,
			mcp
		};
	}) }),
	addGeneration: (g) => set({ generations: [{
		...g,
		id: uid("gen"),
		createdAt: Date.now()
	}, ...get().generations].slice(0, 80) }),
	addSandbox: (s) => set({ sandboxes: [{
		...s,
		id: uid("sb"),
		createdAt: Date.now(),
		status: "ready",
		snapshots: 0
	}, ...get().sandboxes] }),
	setSandboxStatus: (id, status) => set({ sandboxes: get().sandboxes.map((s) => s.id === id ? {
		...s,
		status
	} : s) }),
	snapshotSandbox: (id) => set({ sandboxes: get().sandboxes.map((s) => s.id === id ? {
		...s,
		snapshots: s.snapshots + 1
	} : s) }),
	removeSandbox: (id) => set({ sandboxes: get().sandboxes.filter((s) => s.id !== id) }),
	addRoutine: (r) => set({ routines: [{
		...r,
		id: uid("rt")
	}, ...get().routines] }),
	toggleRoutine: (id) => set({ routines: get().routines.map((r) => r.id === id ? {
		...r,
		enabled: !r.enabled
	} : r) }),
	markRoutineRun: (id) => set({ routines: get().routines.map((r) => r.id === id ? {
		...r,
		lastRun: Date.now()
	} : r) }),
	addMemory: (text) => set({ memory: [{
		id: uid("mem"),
		text,
		createdAt: Date.now()
	}, ...get().memory].slice(0, 24) }),
	removeMemory: (id) => set({ memory: get().memory.filter((m) => m.id !== id) })
}), { name: "codingfleet-store" }));
var NAV = [
	{
		to: "/agents",
		label: "Agents"
	},
	{
		to: "/models",
		label: "Models"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/docs",
		label: "Docs"
	}
];
var APP_LINKS = [
	{
		to: "/chat",
		label: "Chat",
		icon: CHAT_NAV.icon
	},
	{
		to: "/agents",
		label: "Agents",
		icon: Bot
	},
	{
		to: "/runner",
		label: "Runner",
		icon: TOOLS.find((t) => t.slug === "runner").icon
	},
	{
		to: "/sandbox",
		label: "Sandboxes",
		icon: Server
	},
	{
		to: "/routines",
		label: "Routines",
		icon: CalendarClock
	},
	{
		to: "/history",
		label: "History",
		icon: History
	}
];
function CreditsChip() {
	const credits = useFleet((s) => s.credits);
	const addCredits = useFleet((s) => s.addCredits);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/pricing",
		className: "inline-flex h-8 items-center gap-1.5 rounded-full bg-elevated px-2.5 text-xs text-muted shadow-[var(--shadow-border)] hover:text-fg",
		title: "Prototype credits",
		onClick: (e) => {
			if (credits <= 2) {
				e.preventDefault();
				addCredits(20);
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: formatNumber(credits)
		})]
	});
}
function ToolsMenu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			children: "Tools"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		className: "w-[min(22rem,calc(100vw-1.5rem))] p-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Coding tools" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2",
				children: TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolLink, {
						tool: t,
						className: "items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm",
							children: t.short
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-subtle",
							children: t.blurb.slice(0, 42)
						})] })]
					})
				}, t.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/chat",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CHAT_NAV.icon, { className: "size-4 text-primary" }), "AI Chat"]
				})
			})
		]
	})] });
}
function Header() {
	const path = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center gap-2 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						className: "md:hidden",
						"aria-label": "Open menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "p-4 pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-6 flex flex-col gap-1",
						children: [
							APP_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: "flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted hover:bg-elevated hover:text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "size-4" }), l.label]
							}, l.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 mb-1 px-2 text-[11px] uppercase tracking-wider text-subtle",
								children: "Tools"
							}),
							TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolLink, {
								tool: t,
								className: "flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted hover:bg-elevated hover:text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4" }), t.name]
							}, t.slug))
						]
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "ml-4 hidden items-center gap-0.5 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsMenu, {}), NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: path.startsWith(n.to) ? "text-fg" : void 0,
							children: n.label
						})
					}, n.to))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditsChip, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/chat",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "New chat"
							})]
						})
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "AI-powered coding tools. Generate, review, test, convert, and ship — with a fleet of agents."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chat",
							className: "hover:text-fg",
							children: "Chat"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/agents",
							className: "hover:text-fg",
							children: "Parallel agents"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/runner",
							className: "hover:text-fg",
							children: "Code runner"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/models",
							className: "hover:text-fg",
							children: "Models"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
					children: "Tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: TOOLS.slice(0, 6).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolLink, {
						tool: t,
						className: "hover:text-fg",
						children: t.name
					}) }, t.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wider text-subtle",
					children: "Platform"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "hover:text-fg",
							children: "Pricing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/docs",
							className: "hover:text-fg",
							children: "Documentation"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sandbox",
							className: "hover:text-fg",
							children: "Sandboxes"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/routines",
							className: "hover:text-fg",
							children: "Routines"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-fg",
							children: "Contact"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-subtle",
				children: "Prototype workspace. Prompts run on Grok. Your code stays in this browser."
			})
		})]
	});
}
function AppShell({ children, marketing = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			marketing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}) : null
		]
	});
}
//#endregion
export { formatNumber as a, cn as i, Button as n, useFleet as o, ToolLink as r, AppShell as t };
