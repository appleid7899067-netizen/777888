import { create } from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "@/lib/utils";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: number;
  model?: string;
  activity?: string[];
};

export type ChatThread = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
  project?: string;
  messages: ChatMessage[];
  tools: { web: boolean; code: boolean; files: boolean; agents: boolean };
  mcp: string[];
};

export type Generation = {
  id: string;
  tool: string;
  title: string;
  prompt: string;
  output: string;
  language: string;
  model: string;
  credits: number;
  createdAt: number;
};

export type Sandbox = {
  id: string;
  name: string;
  runtime: string;
  packages: string;
  status: "ready" | "building" | "stopped";
  snapshots: number;
  createdAt: number;
};

export type Routine = {
  id: string;
  name: string;
  cadence: string;
  prompt: string;
  enabled: boolean;
  lastRun?: number;
};

export type MemoryNote = { id: string; text: string; createdAt: number };

type FleetState = {
  credits: number;
  modelId: string;
  language: string;
  threads: ChatThread[];
  activeThreadId: string | null;
  generations: Generation[];
  sandboxes: Sandbox[];
  routines: Routine[];
  memory: MemoryNote[];
  spend: (n: number) => boolean;
  addCredits: (n: number) => void;
  setModel: (id: string) => void;
  setLanguage: (lang: string) => void;
  newThread: () => string;
  setActiveThread: (id: string) => void;
  renameThread: (id: string, title: string) => void;
  pinThread: (id: string) => void;
  deleteThread: (id: string) => void;
  appendMessage: (threadId: string, msg: Omit<ChatMessage, "id" | "createdAt"> & { id?: string }) => void;
  updateTools: (threadId: string, tools: ChatThread["tools"]) => void;
  toggleMcp: (threadId: string, id: string) => void;
  addGeneration: (g: Omit<Generation, "id" | "createdAt">) => void;
  addSandbox: (s: Omit<Sandbox, "id" | "createdAt" | "status" | "snapshots">) => void;
  setSandboxStatus: (id: string, status: Sandbox["status"]) => void;
  snapshotSandbox: (id: string) => void;
  removeSandbox: (id: string) => void;
  addRoutine: (r: Omit<Routine, "id">) => void;
  toggleRoutine: (id: string) => void;
  markRoutineRun: (id: string) => void;
  addMemory: (text: string) => void;
  removeMemory: (id: string) => void;
};

const seedThread = (): ChatThread => ({
  id: "welcome",
  title: "Welcome to the fleet",
  createdAt: Date.now(),
  updatedAt: Date.now(),
  tools: { web: true, code: true, files: false, agents: false },
  mcp: ["context7"],
  messages: [
    {
      id: "w1",
      role: "assistant",
      createdAt: Date.now(),
      content:
        "Fleet online. I can generate, convert, review, and run code — or spawn parallel agents on a hard problem.\n\nTry:\n- “Convert this Python snippet to idiomatic Go”\n- “Review this handler for SQL injection”\n- “@shipper @security design a token bucket rate limiter”",
    },
  ],
});

export const useFleet = create<FleetState>()(
  persist(
    (set, get) => ({
      credits: 20,
      modelId: "grok-4.5",
      language: "Python",
      threads: [seedThread()],
      activeThreadId: "welcome",
      generations: [],
      sandboxes: [
        {
          id: "sb_default",
          name: "python-default",
          runtime: "Python 3.12",
          packages: "fastapi, pytest, pandas, httpx",
          status: "ready",
          snapshots: 1,
          createdAt: Date.now() - 86400000,
        },
        {
          id: "sb_node",
          name: "node-runner",
          runtime: "Node 22",
          packages: "vitest, tsx, zod",
          status: "ready",
          snapshots: 0,
          createdAt: Date.now() - 3600000,
        },
      ],
      routines: [
        { id: "r1", name: "Morning standup", cadence: "Weekdays 09:00", prompt: "Summarize open PRs and failing checks.", enabled: true },
        { id: "r2", name: "Nightly tests", cadence: "Daily 02:00", prompt: "Generate missing tests for files touched in 24h.", enabled: false },
      ],
      memory: [
        { id: "m1", text: "Prefers TypeScript, vitest, and short answers.", createdAt: Date.now() },
      ],
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
        const thread: ChatThread = {
          id,
          title: "New chat",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          tools: { web: false, code: false, files: false, agents: false },
          mcp: [],
          messages: [],
        };
        set({ threads: [thread, ...get().threads], activeThreadId: id });
        return id;
      },
      setActiveThread: (id) => set({ activeThreadId: id }),
      renameThread: (id, title) =>
        set({
          threads: get().threads.map((t) => (t.id === id ? { ...t, title } : t)),
        }),
      pinThread: (id) =>
        set({
          threads: get().threads.map((t) => (t.id === id ? { ...t, pinned: !t.pinned } : t)),
        }),
      deleteThread: (id) => {
        const next = get().threads.filter((t) => t.id !== id);
        set({
          threads: next.length ? next : [seedThread()],
          activeThreadId: get().activeThreadId === id ? (next[0]?.id ?? "welcome") : get().activeThreadId,
        });
      },
      appendMessage: (threadId, msg) =>
        set({
          threads: get().threads.map((t) => {
            if (t.id !== threadId) return t;
            const message: ChatMessage = {
              id: msg.id ?? uid("m"),
              createdAt: Date.now(),
              role: msg.role,
              content: msg.content,
              model: msg.model,
              activity: msg.activity,
            };
            const title =
              t.title === "New chat" && msg.role === "user"
                ? msg.content.slice(0, 42) || t.title
                : t.title;
            return { ...t, title, updatedAt: Date.now(), messages: [...t.messages, message] };
          }),
        }),
      updateTools: (threadId, tools) =>
        set({
          threads: get().threads.map((t) => (t.id === threadId ? { ...t, tools } : t)),
        }),
      toggleMcp: (threadId, id) =>
        set({
          threads: get().threads.map((t) => {
            if (t.id !== threadId) return t;
            const mcp = t.mcp.includes(id) ? t.mcp.filter((x) => x !== id) : [...t.mcp, id];
            return { ...t, mcp };
          }),
        }),
      addGeneration: (g) =>
        set({
          generations: [
            { ...g, id: uid("gen"), createdAt: Date.now() },
            ...get().generations,
          ].slice(0, 80),
        }),
      addSandbox: (s) =>
        set({
          sandboxes: [
            { ...s, id: uid("sb"), createdAt: Date.now(), status: "ready", snapshots: 0 },
            ...get().sandboxes,
          ],
        }),
      setSandboxStatus: (id, status) =>
        set({
          sandboxes: get().sandboxes.map((s) => (s.id === id ? { ...s, status } : s)),
        }),
      snapshotSandbox: (id) =>
        set({
          sandboxes: get().sandboxes.map((s) =>
            s.id === id ? { ...s, snapshots: s.snapshots + 1 } : s,
          ),
        }),
      removeSandbox: (id) =>
        set({ sandboxes: get().sandboxes.filter((s) => s.id !== id) }),
      addRoutine: (r) =>
        set({ routines: [{ ...r, id: uid("rt") }, ...get().routines] }),
      toggleRoutine: (id) =>
        set({
          routines: get().routines.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)),
        }),
      markRoutineRun: (id) =>
        set({
          routines: get().routines.map((r) => (r.id === id ? { ...r, lastRun: Date.now() } : r)),
        }),
      addMemory: (text) =>
        set({
          memory: [{ id: uid("mem"), text, createdAt: Date.now() }, ...get().memory].slice(0, 24),
        }),
      removeMemory: (id) => set({ memory: get().memory.filter((m) => m.id !== id) }),
    }),
    { name: "codingfleet-store" },
  ),
);
