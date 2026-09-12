import { createServerFn } from "@tanstack/react-start";
import { SYSTEM_PROMPTS } from "@/lib/catalog";

export type FleetRequest = {
  mode: keyof typeof SYSTEM_PROMPTS | string;
  prompt: string;
  code?: string;
  language?: string;
  targetLanguage?: string;
  modelId?: string;
  extras?: string;
};

export type FleetResponse =
  | { ok: true; text: string; model: string }
  | { ok: false; error: string };

function buildUserMessage(data: FleetRequest) {
  const parts: string[] = [];
  if (data.language) parts.push(`Language: ${data.language}`);
  if (data.targetLanguage) parts.push(`Target language: ${data.targetLanguage}`);
  if (data.extras) parts.push(data.extras);
  if (data.prompt) parts.push(data.prompt);
  if (data.code?.trim()) {
    const lang = (data.language ?? "").toLowerCase().split(/[\s/]/)[0] || "";
    parts.push(`\nCode:\n\`\`\`${lang}\n${data.code}\n\`\`\``);
  }
  return parts.filter(Boolean).join("\n\n");
}

export const runFleet = createServerFn({ method: "POST" })
  .validator((input: FleetRequest) => input)
  .handler(async ({ data }): Promise<FleetResponse> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "AI is not available in this environment." };
    }

    const system =
      SYSTEM_PROMPTS[data.mode] ??
      SYSTEM_PROMPTS.chat;

    const user = buildUserMessage(data);
    if (!user.trim()) {
      return { ok: false, error: "Write a prompt or paste some code first." };
    }

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.3,
        max_tokens: data.mode === "agents" ? 2800 : 1800,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user.slice(0, 24000) },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return {
        ok: false,
        error: `Model error ${res.status}${errText ? `: ${errText.slice(0, 180)}` : ""}`,
      };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content ?? "";
    if (!text.trim()) return { ok: false, error: "Empty response from the model." };
    return { ok: true, text, model: "grok-4.5" };
  });
