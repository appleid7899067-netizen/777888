import { createFileRoute } from "@tanstack/react-router";
import { Loader2, Play } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/app-shell";
import { MarkdownOutput } from "@/components/markdown-output";
import { ModelPicker } from "@/components/pickers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { runFleet } from "@/lib/ai";
import { AGENTS, modelById } from "@/lib/catalog";
import { useFleet } from "@/lib/store";

export const Route = createFileRoute("/agents")({ component: AgentsPage });

function AgentsPage() {
  const [task, setTask] = useState(
    "Design and implement a token-bucket rate limiter for a Node API. Cover concurrency, Redis vs in-memory, and tests.",
  );
  const [selected, setSelected] = useState<string[]>(AGENTS.filter((a) => a.id !== "orchestrator").map((a) => a.id));
  const [busy, setBusy] = useState(false);
  const [phase, setPhase] = useState<string[]>([]);
  const [output, setOutput] = useState("");
  const spend = useFleet((s) => s.spend);
  const addCredits = useFleet((s) => s.addCredits);
  const addGeneration = useFleet((s) => s.addGeneration);
  const modelId = useFleet((s) => s.modelId);

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
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
      const res = await runFleet({
        data: { mode: "agents", prompt: task, extras, modelId },
      });
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
        credits: cost,
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Fleet failed");
      addCredits(cost);
    } finally {
      setBusy(false);
    }
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">Agent platform</p>
        <h1 className="mt-1 text-3xl font-medium tracking-tight">One task. A fleet that cooperates.</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          The orchestrator scopes bounded sub-tasks. Read-only agents run in parallel. Write-capable
          work takes turns in a shared worktree. One synthesis comes back to you.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <aside className="space-y-2">
            {AGENTS.map((a) => {
              const on = a.id === "orchestrator" || selected.includes(a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  disabled={a.id === "orchestrator"}
                  onClick={() => toggle(a.id)}
                  className={`w-full rounded-lg p-3 text-left shadow-[var(--shadow-border)] ${
                    on ? "bg-surface" : "bg-transparent opacity-55"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-primary">@{a.handle}</span>
                    <Badge>{a.posture}</Badge>
                  </div>
                  <p className="mt-1 text-sm font-medium">{a.name}</p>
                  <p className="text-xs text-muted">{a.role}</p>
                </button>
              );
            })}
          </aside>

          <div className="min-w-0 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="flex-1 space-y-1.5">
                <p className="text-xs font-medium text-muted">Model</p>
                <ModelPicker />
              </div>
              <Button onClick={() => void run()} disabled={busy}>
                {busy ? <Loader2 className="size-4 animate-spin" /> : <Play className="size-4" />}
                Run fleet
              </Button>
            </div>
            <Textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="min-h-28"
              placeholder="Give the fleet a job…"
            />
            {phase.length > 0 && (
              <ol className="space-y-1 rounded-lg bg-surface p-3 font-mono text-xs text-muted shadow-[var(--shadow-border)]">
                {phase.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {p}
                  </li>
                ))}
              </ol>
            )}
            <div className="min-h-64 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              {output ? (
                <MarkdownOutput text={output} />
              ) : (
                <p className="text-sm text-subtle">
                  {busy ? "Agents are writing into a shared journal…" : "Synthesis appears here after a run."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
