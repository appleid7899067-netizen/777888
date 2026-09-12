import { createFileRoute } from "@tanstack/react-router";
import { Loader2, Play, Sparkles, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/app-shell";
import { MarkdownOutput } from "@/components/markdown-output";
import { LanguagePicker, ModelPicker } from "@/components/pickers";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { runFleet } from "@/lib/ai";
import { useFleet } from "@/lib/store";

export const Route = createFileRoute("/runner")({ component: RunnerPage });

const SAMPLE = `const nums = [3, 1, 4, 1, 5, 9];
console.log("sum", nums.reduce((a, b) => a + b, 0));
console.log("sorted", [...nums].sort((a, b) => a - b));`;

function isJs(lang: string) {
  return /javascript|typescript|node|\bjs\b|\bts\b|html/i.test(lang);
}

function RunnerPage() {
  const storeLang = useFleet((s) => s.language);
  const setStoreLang = useFleet((s) => s.setLanguage);
  const [language, setLanguage] = useState("JavaScript");
  const modelId = useFleet((s) => s.modelId);
  const spend = useFleet((s) => s.spend);
  const addCredits = useFleet((s) => s.addCredits);
  const [code, setCode] = useState(SAMPLE);
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [aiHelp, setAiHelp] = useState("");
  const [busy, setBusy] = useState(false);
  const [running, setRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
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
    const src = `<!doctype html><html><body><script>
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
    </script></body></html>`;
    iframe.srcdoc = src;
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
      const res = await runFleet({
        data: {
          mode: "runner",
          prompt: "Execute this program and report stdout, stderr, exit code. Be literal.",
          code,
          language,
        },
      });
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
      const res = await runFleet({
        data: {
          mode: "runner",
          prompt: `Help with this ${language} snippet. ${stderr ? "It failed:\\n" + stderr : "Optimize or explain the output."}\\n\\nOutput so far:\\n${stdout}`,
          code,
          language,
          modelId,
        },
      });
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

  return (
    <AppShell>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-2">
        <section>
          <div className="mb-3 flex flex-wrap items-end gap-3">
            <div className="flex-1">
              <LanguagePicker
                value={language}
                onChange={(v) => {
                  setLanguage(v);
                  setStoreLang(v);
                }}
                label="Runtime"
              />
            </div>
            <Button onClick={() => void run()} disabled={running}>
              {running ? <Loader2 className="size-4 animate-spin" /> : <Play className="size-4" />}
              Run
            </Button>
            <Button variant="ghost" onClick={() => setCode("")} aria-label="Clear">
              <Trash2 className="size-4" />
            </Button>
          </div>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="min-h-[28rem] font-mono text-[13px] leading-relaxed"
            spellCheck={false}
          />
        </section>
        <section className="flex min-h-0 flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">Console</p>
            <div className="flex items-center gap-2">
              <ModelPicker compact />
              <Button size="sm" variant="secondary" onClick={() => void askAi()} disabled={busy}>
                {busy ? <Loader2 className="size-3.5 animate-spin" /> : <Sparkles className="size-3.5" />}
                AI help
              </Button>
            </div>
          </div>
          <pre className="min-h-40 flex-1 overflow-auto rounded-xl bg-surface p-4 font-mono text-[13px] text-ok shadow-[var(--shadow-border)] whitespace-pre-wrap">
            {stdout || (running ? "running…" : "stdout is quiet.")}
          </pre>
          {stderr ? (
            <pre className="overflow-auto rounded-xl bg-surface p-4 font-mono text-[13px] text-danger shadow-[var(--shadow-border)] whitespace-pre-wrap">
              {stderr}
            </pre>
          ) : null}
          {aiHelp ? (
            <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              <MarkdownOutput text={aiHelp} />
            </div>
          ) : null}
        </section>
        <iframe ref={iframeRef} title="sandbox" sandbox="allow-scripts" className="hidden" />
      </div>
    </AppShell>
  );
}
