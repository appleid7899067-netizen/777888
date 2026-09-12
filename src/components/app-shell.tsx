import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bot,
  CalendarClock,
  Coins,
  History,
  Menu,
  MessageSquarePlus,
  Server,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToolLink } from "@/components/tool-link";
import { TOOLS, CHAT_NAV } from "@/lib/catalog";
import { useFleet } from "@/lib/store";
import { formatNumber } from "@/lib/utils";

const NAV = [
  { to: "/agents", label: "Agents" },
  { to: "/models", label: "Models" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
];

const APP_LINKS = [
  { to: "/chat", label: "Chat", icon: CHAT_NAV.icon },
  { to: "/agents", label: "Agents", icon: Bot },
  { to: "/runner", label: "Runner", icon: TOOLS.find((t) => t.slug === "runner")!.icon },
  { to: "/sandbox", label: "Sandboxes", icon: Server },
  { to: "/routines", label: "Routines", icon: CalendarClock },
  { to: "/history", label: "History", icon: History },
];

function CreditsChip() {
  const credits = useFleet((s) => s.credits);
  const addCredits = useFleet((s) => s.addCredits);
  return (
    <Link
      to="/pricing"
      className="inline-flex h-8 items-center gap-1.5 rounded-full bg-elevated px-2.5 text-xs text-muted shadow-[var(--shadow-border)] hover:text-fg"
      title="Prototype credits"
      onClick={(e) => {
        if (credits <= 2) {
          e.preventDefault();
          addCredits(20);
        }
      }}
    >
      <Coins className="size-3.5 text-primary" />
      <span className="tabular-nums">{formatNumber(credits)}</span>
    </Link>
  );
}

function ToolsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          Tools
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[min(22rem,calc(100vw-1.5rem))] p-2">
        <DropdownMenuLabel>Coding tools</DropdownMenuLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <DropdownMenuItem key={t.slug} asChild>
              <ToolLink tool={t} className="items-start">
                <t.icon className="mt-0.5 size-4 text-primary" />
                <span>
                  <span className="block text-sm">{t.short}</span>
                  <span className="block text-[11px] text-subtle">{t.blurb.slice(0, 42)}</span>
                </span>
              </ToolLink>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/chat">
            <CHAT_NAV.icon className="size-4 text-primary" />
            AI Chat
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Open menu">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4 pt-12">
            <Logo />
            <nav className="mt-6 flex flex-col gap-1">
              {APP_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted hover:bg-elevated hover:text-fg"
                >
                  <l.icon className="size-4" />
                  {l.label}
                </Link>
              ))}
              <p className="mt-4 mb-1 px-2 text-[11px] uppercase tracking-wider text-subtle">Tools</p>
              {TOOLS.map((t) => (
                <ToolLink
                  key={t.slug}
                  tool={t}
                  className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted hover:bg-elevated hover:text-fg"
                >
                  <t.icon className="size-4" />
                  {t.name}
                </ToolLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Logo />

        <nav className="ml-4 hidden items-center gap-0.5 md:flex">
          <ToolsMenu />
          {NAV.map((n) => (
            <Button key={n.to} variant="ghost" size="sm" asChild>
              <Link to={n.to} className={path.startsWith(n.to) ? "text-fg" : undefined}>
                {n.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <CreditsChip />
          <Button size="sm" asChild>
            <Link to="/chat">
              <MessageSquarePlus className="size-4" />
              <span className="hidden sm:inline">New chat</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted">
            AI-powered coding tools. Generate, review, test, convert, and ship — with a fleet of agents.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/chat" className="hover:text-fg">
                Chat
              </Link>
            </li>
            <li>
              <Link to="/agents" className="hover:text-fg">
                Parallel agents
              </Link>
            </li>
            <li>
              <Link to="/runner" className="hover:text-fg">
                Code runner
              </Link>
            </li>
            <li>
              <Link to="/models" className="hover:text-fg">
                Models
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">Tools</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {TOOLS.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <ToolLink tool={t} className="hover:text-fg">
                  {t.name}
                </ToolLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">Platform</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/pricing" className="hover:text-fg">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-fg">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/sandbox" className="hover:text-fg">
                Sandboxes
              </Link>
            </li>
            <li>
              <Link to="/routines" className="hover:text-fg">
                Routines
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-fg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-subtle">
          Prototype workspace. Prompts run on Grok. Your code stays in this browser.
        </p>
      </div>
    </footer>
  );
}

export function AppShell({
  children,
  marketing = false,
}: {
  children: ReactNode;
  marketing?: boolean;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Header />
      <div className="flex-1">{children}</div>
      {marketing ? <Footer /> : null}
    </div>
  );
}
