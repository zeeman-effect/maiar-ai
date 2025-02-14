---
title: Model Providers
description: Learn how to use model providers in Maiar
sidebar_position: 1
---

# Models in Maiar

Maiar's model system provides a simple interface for integrating any Language Model (LLM) into your agent. The framework comes with providers for popular services like OpenAI and Ollama, but its true power lies in its extensibility.

## The Model Provider System

At its core, a model provider in Maiar is just a way to get text from an LLM. The interface is intentionally minimal:

```typescript
interface ModelProvider {
  init?(): Promise<void>;
  getText(prompt: string, config?: ModelRequestConfig): Promise<string>;
}

interface ModelRequestConfig {
  temperature?: number; // Controls randomness (0-1)
  maxTokens?: number; // Maximum tokens in response
  stopSequences?: string[]; // Sequences that stop generation
}
```

This simplicity is what makes Maiar's model system so flexible. You can:

- Use our maintained providers (OpenAI, Ollama)
- Create custom providers for other services
- Wrap existing providers to add functionality

## Why Custom Providers Matter

Let's look at a real example. When using the Deepseek model through Ollama, the output includes the model's reasoning process with think tags:

```
Human: What's 2+2?
Assistant: Let me help you with that.

<think>
Let me solve this simple arithmetic problem.
2 + 2 is a basic addition.
The answer is clearly 4.
</think>

The answer is 4.
```

While these think tags are valuable for debugging and understanding the model's reasoning, we might want to hide them from end users. Here's how we implemented a custom provider to clean the output:

```typescript
import { ModelProvider, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

const log = createLogger("models");

export interface DeepseekConfig {
  baseUrl: string;
  model: string;
}

export class DeepseekProvider implements ModelProvider {
  readonly id = "deepseek";
  readonly name = "Deepseek";
  readonly description = "Deepseek models running through Ollama";

  private baseUrl: string;
  private model: string;

  constructor(config: DeepseekConfig) {
    if (!config.baseUrl) {
      throw new Error("baseUrl is required");
    }
    if (!config.model) {
      throw new Error("model is required");
    }

    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.model = config.model;
  }

  async getText(prompt: string, config?: ModelRequestConfig): Promise<string> {
    try {
      log.info("Sending prompt to Deepseek:", prompt);

      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: this.model,
          prompt: `${prompt}\n\nAssistant: Let me help you with that.`,
          stream: false,
          options: {
            temperature: config?.temperature ?? 0.7,
            stop: config?.stopSequences
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const text = data.response;

      log.info("Received response from Deepseek:", text);

      // Clean up the model's reasoning process and think tags
      const cleanedText = text
        .replace(/^Assistant: Let me help you with that\.\s*/, "")
        .replace(/<think>[\s\S]*?<\/think>\s*/g, "");

      return cleanedText;
    } catch (error) {
      log.error("Error getting text from Deepseek:", error);
      throw error;
    }
  }
}
```

Now when we use this provider:

```typescript
const runtime = createRuntime({
  model: new DeepseekProvider({
    baseUrl: "http://localhost:11434",
    model: "deepseek-coder:6.7b"
  })
});

const answer = await runtime.model.getText("What's 2+2?");
console.log(answer); // "The answer is 4."
```

The output is clean and user-friendly, while still preserving the model's reasoning capabilities internally through logging.

## Built-in Providers

Maiar maintains several official providers:

### OpenAI Provider

```typescript
import { OpenAIProvider } from "@maiar-ai/model-openai";

const runtime = createRuntime({
  model: new OpenAIProvider({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo"
  })
});
```

### Ollama Provider

```typescript
import { OllamaProvider } from "@maiar-ai/model-ollama";

const runtime = createRuntime({
  model: new OllamaProvider({
    baseUrl: "http://localhost:11434",
    model: "llama2"
  })
});
```
