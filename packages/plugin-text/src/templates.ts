import { BaseContextItem } from "@maiar-ai/core";

export function generateTextTemplate(
  prompt: string,
  contextChain: BaseContextItem[]
): string {
  return `Generate text in response to the following prompt, using any relevant information from the context chain.

Context Chain:
${JSON.stringify(contextChain, null, 2)}

Prompt: ${prompt}

Generate text that directly answers or responds to the prompt. If there is relevant information in the context chain (like current time, previous responses, etc), incorporate it naturally into the response.

Return a JSON object with a single "text" field containing your response.
Do NOT include any meta-commentary about how you generated the response or what information you used.
Respond as if you are directly answering the user's request.`;
}
