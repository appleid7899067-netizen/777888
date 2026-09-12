import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CREDIT_PACKS, PLANS } from "@/lib/catalog";
import { useFleet } from "@/lib/store";

export const Route = createFileRoute("/pricing")({ component: PricingPage });

function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const addCredits = useFleet((s) => s.addCredits);

  return (
    <AppShell marketing>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">Pricing</p>
        <h1 className="mt-1 text-3xl font-medium tracking-tight">Credits when you need them. Unlimited when you don’t.</h1>
        <div className="mt-5 inline-flex rounded-lg bg-elevated p-1 shadow-[var(--shadow-border)]">
          <button
            type="button"
            className={`h-8 rounded-md px-3 text-sm ${!yearly ? "bg-surface text-fg shadow-[var(--shadow-border)]" : "text-muted"}`}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`h-8 rounded-md px-3 text-sm ${yearly ? "bg-surface text-fg shadow-[var(--shadow-border)]" : "text-muted"}`}
            onClick={() => setYearly(true)}
          >
            Yearly · save ~20%
          </button>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {PLANS.map((p) => {
            const price = yearly ? Math.round(p.yearly / 12) : p.monthly;
            return (
              <div
                key={p.id}
                className={`flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] ${
                  p.popular ? "ring-1 ring-primary/40" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-medium">{p.name}</h2>
                  {p.popular ? <Badge variant="primary">Most used</Badge> : null}
                </div>
                <p className="mt-1 text-sm text-muted">{p.blurb}</p>
                <p className="mt-4 font-mono text-3xl tabular-nums">
                  ${price}
                  <span className="text-sm text-subtle"> / mo</span>
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-5"
                  variant={p.popular ? "default" : "secondary"}
                  onClick={() => {
                    addCredits(p.id === "free" ? 20 : 250);
                    toast.success(`Prototype ${p.name} unlocked. Credits added.`);
                  }}
                >
                  Get {p.name}
                </Button>
              </div>
            );
          })}
        </div>

        <h2 className="mt-14 text-xl font-medium tracking-tight">One-time credit packs</h2>
        <p className="mt-2 text-sm text-muted">Never expire. In this prototype they just add to the local balance.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CREDIT_PACKS.map((c) => (
            <button
              key={c.credits}
              type="button"
              className="rounded-xl bg-surface p-4 text-left shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              onClick={() => {
                addCredits(c.credits);
                toast.success(`Added ${c.credits} credits.`);
              }}
            >
              <p className="font-mono text-lg tabular-nums">{c.credits.toLocaleString()} cr</p>
              <p className="text-sm text-muted">${c.price}</p>
              <p className="text-[11px] text-subtle">${c.per.toFixed(4)} / credit</p>
              {"best" in c && c.best ? <Badge variant="primary" className="mt-2">Best value</Badge> : null}
            </button>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
