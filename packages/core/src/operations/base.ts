import { z } from "zod";
import { ModelRequestConfig } from "../models/base";
import { ModelProvider } from "../models/base";

export interface OperationConfig extends ModelRequestConfig {
  model?: ModelProvider;
}

/**
 * Template function that takes input of type T and returns a string prompt
 */
export interface TemplateFunction<T = unknown> {
  (input: T): string;
}

/**
 * Formats a Zod schema into a human-readable format for the LLM
 */
export function formatZodSchema<T>(schema: z.ZodType<T>): string {
  const description = schema.description || "";

  // Handle different schema types
  if (schema instanceof z.ZodObject) {
    const shape = schema._def.shape();
    const fields = Object.entries(shape)
      .map(([key, value]) => {
        const fieldType = getSchemaType(value as z.ZodType<unknown>);
        const isOptional = value instanceof z.ZodOptional;
        return `  ${key}${isOptional ? "?" : ""}: ${fieldType}`;
      })
      .join("\n");

    return `${description}\n\nObject with fields:\n${fields}`;
  }

  if (schema instanceof z.ZodArray) {
    const elementType = getSchemaType(schema._def.type);
    return `${description}\n\nArray of: ${elementType}`;
  }

  return `${description}\n\nType: ${getSchemaType(schema)}`;
}

/**
 * Helper to get a human-readable type from a Zod schema
 */
function getSchemaType<T>(schema: z.ZodType<T>): string {
  if (schema instanceof z.ZodString) return "string";
  if (schema instanceof z.ZodNumber) return "number";
  if (schema instanceof z.ZodBoolean) return "boolean";
  if (schema instanceof z.ZodDate) return "date";
  if (schema instanceof z.ZodArray)
    return `array of ${getSchemaType(schema._def.type)}`;
  if (schema instanceof z.ZodObject) {
    const shape = schema._def.shape();
    const fields = Object.entries(shape)
      .map(
        ([key, value]) =>
          `${key}: ${getSchemaType(value as z.ZodType<unknown>)}`
      )
      .join(", ");
    return `{ ${fields} }`;
  }
  if (schema instanceof z.ZodOptional)
    return getSchemaType(schema._def.innerType);
  if (schema instanceof z.ZodEnum)
    return `enum(${schema._def.values.join(" | ")})`;
  if (schema instanceof z.ZodUnion)
    return schema._def.options
      .map((t: z.ZodType<unknown>) => getSchemaType(t))
      .join(" | ");

  return schema.constructor.name;
}
