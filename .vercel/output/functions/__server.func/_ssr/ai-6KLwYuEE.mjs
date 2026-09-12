import { d as SYSTEM_PROMPTS } from "./catalog-Dl9lRGb5.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-6KLwYuEE.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function buildUserMessage(data) {
	const parts = [];
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
var runFleet_createServerFn_handler = createServerRpc({
	id: "b01eec4ae031d949d6120ad0aa199a1efa45a61de6c878711eed3aebd889a3d5",
	name: "runFleet",
	filename: "src/lib/ai.ts"
}, (opts) => runFleet.__executeServer(opts));
var runFleet = createServerFn({ method: "POST" }).validator((input) => input).handler(runFleet_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment."
	};
	const system = SYSTEM_PROMPTS[data.mode] ?? SYSTEM_PROMPTS.chat;
	const user = buildUserMessage(data);
	if (!user.trim()) return {
		ok: false,
		error: "Write a prompt or paste some code first."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .3,
			max_tokens: data.mode === "agents" ? 2800 : 1800,
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content: user.slice(0, 24e3)
			}]
		})
	});
	if (!res.ok) {
		const errText = await res.text().catch(() => "");
		return {
			ok: false,
			error: `Model error ${res.status}${errText ? `: ${errText.slice(0, 180)}` : ""}`
		};
	}
	const text = (await res.json()).choices?.[0]?.message?.content ?? "";
	if (!text.trim()) return {
		ok: false,
		error: "Empty response from the model."
	};
	return {
		ok: true,
		text,
		model: "grok-4.5"
	};
});
//#endregion
export { runFleet_createServerFn_handler };
