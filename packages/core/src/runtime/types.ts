import { z } from "zod";
import { Plugin } from "../plugin";
import { LLMService } from "../models/service";
import { MemoryService } from "../memory/service";
import { MemoryProvider } from "../memory/types";
import { ModelProvider } from "../models/service";
import { BaseContextItem } from "../types/agent";

/**
 * A step in the execution pipeline
 */
export const PipelineStepSchema = z
  .object({
    pluginId: z.string().describe("ID of the plugin to execute"),
    action: z.string().describe("Name of the executor/action to run")
  })
  .describe("A single step in the execution pipeline");

export const PipelineSchema = z
  .array(PipelineStepSchema)
  .describe("A sequence of steps to execute in order");

export type PipelineStep = z.infer<typeof PipelineStepSchema>;
export type Pipeline = z.infer<typeof PipelineSchema>;

/**
 * Configuration options for the Runtime
 */
export interface RuntimeConfig {
  plugins?: Plugin[];
  llmService: LLMService;
  memoryService: MemoryService;
}

/**
 * Options for creating a new Runtime instance
 */
export interface RuntimeOptions {
  model: ModelProvider;
  memory: MemoryProvider;
  plugins: Plugin[];
}

interface PluginExecutor {
  name: string;
  description: string;
}

interface AvailablePlugin {
  id: string;
  name: string;
  description: string;
  executors: PluginExecutor[];
}

interface ConversationMessage {
  role: string;
  content: string;
  timestamp: number;
}

/**
 * Context passed to the LLM for pipeline generation
 */
export interface PipelineGenerationContext {
  contextChain: BaseContextItem[];
  availablePlugins: AvailablePlugin[];
  currentContext: {
    platform: string;
    message: string;
    conversationHistory: ConversationMessage[];
  };
}
