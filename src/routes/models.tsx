import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MODELS } from "@/lib/catalog";
import { useFleet } from "@/lib/store";

export const Route = createFileRoute("/models")({ component: ModelsPage });

function ModelsPage() {
  const setModel = useFleet((s) => s.setModel);
  const current = useFleet((s) => s.modelId);

  return (
    <AppShell marketing>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">Catalog</p>
        <h1 className="mt-1 text-3xl font-medium tracking-tight">Models</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Pick by coding score, speed, and credit cost. This prototype executes every request on Grok 4.5
          so the tools actually run. The table is the fleet you would route in production.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-subtle">
              <tr>
                <th className="px-4 py-3 font-medium">Model</th>
                <th className="px-4 py-3 font-medium">Provider</th>
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Context</th>
                <th className="px-4 py-3 font-medium">Coding</th>
                <th className="px-4 py-3 font-medium">Speed</th>
                <th className="px-4 py-3 font-medium">Credits</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {MODELS.map((m) => (
                <tr key={m.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium">{m.name}</td>
                  <td className="px-4 py-3 text-muted">{m.provider}</td>
                  <td className="px-4 py-3">
                    <Badge variant={m.tier === "free" ? "ok" : "default"}>{m.tier}</Badge>
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-muted">{m.context}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-16 overflow-hidden rounded-full bg-elevated">
                        <span
                          className="block h-full bg-primary"
                          style={{ width: `${m.coding}%` }}
                        />
                      </span>
                      <span className="font-mono text-xs tabular-nums">{m.coding}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted">{m.speed}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{m.credits}</td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      size="sm"
                      variant={current === m.id ? "default" : "ghost"}
                      onClick={() => setModel(m.id)}
                    >
                      {current === m.id ? "Selected" : "Use"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button className="mt-6" asChild>
          <Link to="/chat">Chat with the selected model</Link>
        </Button>
      </div>
    </AppShell>
  );
}
