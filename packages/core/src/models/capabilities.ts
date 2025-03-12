import { z } from "zod";
import { OperationConfig } from "../operations/base";

/**
 * Interface that model capabilities must implement
 */
export interface ModelCapability<InputType = unknown, OutputType = unknown> {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly input: z.ZodType<InputType>;
  readonly output: z.ZodType<OutputType>;

  execute(input: InputType, config?: OperationConfig): Promise<OutputType>;
}

/**
 * Registry for model capabilities
 */
export class CapabilityRegistry {
  private defaultModels = new Map<string, string>();
  private capabilities: Record<
    string,
    { input: z.ZodTypeAny; output: z.ZodTypeAny; models: Set<string> }
  > = {};

  /**
   * Register a capability for a model
   */
  registerCapability(capability: {
    id: string;
    input: z.ZodTypeAny;
    output: z.ZodTypeAny;
    model: string;
  }): void {
    if (!this.capabilities[capability.id]) {
      this.capabilities[capability.id] = {
        input: capability.input,
        output: capability.output,
        models:
          this.capabilities[capability.id]?.models.add(capability.model) ||
          new Set([capability.model])
      };
    }
  }

  /**
   * Set the default model for a capability
   */
  setDefaultModelForCapability(capabilityId: string, modelId: string): void {
    if (
      !this.capabilities[capabilityId] ||
      !this.capabilities[capabilityId].models.has(modelId)
    ) {
      throw new Error(
        `Model ${modelId} does not support capability ${capabilityId}`
      );
    }
    this.defaultModels.set(capabilityId, modelId);
  }

  /**
   * Get the default model for a capability
   */
  getDefaultModelForCapability(capabilityId: string): string | undefined {
    return this.defaultModels.get(capabilityId);
  }

  /**
   * Get all models that support a capability
   */
  getModelsWithCapability(capabilityId: string): string[] {
    return Array.from(this.capabilities[capabilityId]?.models || new Set());
  }

  /**
   * Get all registered capabilities
   */
  getAllCapabilities(): string[] {
    return Array.from(Object.keys(this.capabilities));
  }

  /**
   * Check if any model supports a capability
   */
  hasCapability(capabilityId: string): boolean {
    return (
      (this.capabilities[capabilityId] ?? false) &&
      (this.capabilities[capabilityId]?.models.size ?? 0) > 0
    );
  }
}
