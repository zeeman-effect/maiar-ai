import { TemplateFunction } from "./base";
import * as z from "zod";

// Text template
export const generateTextTemplate: TemplateFunction<string> = (
  prompt: string
) => prompt;

// Boolean template
export const generateBooleanTemplate: TemplateFunction<string> = (prompt) =>
  `Based on the following question, respond with a JSON object containing a single 'result' field that is true or false.
Consider the question carefully and respond with true only if you are highly confident.

Question: ${prompt}

Remember to respond with ONLY a JSON object like: {"result": true} or {"result": false}`;

// Object template interfaces
export interface ObjectTemplateContext {
  schema: string;
  prompt: string;
}

export interface RetryTemplateContext extends ObjectTemplateContext {
  lastResponse: string;
  error: string;
}

// Object templates
export const generateObjectTemplate: TemplateFunction<
  ObjectTemplateContext
> = ({
  schema,
  prompt
}) => `You are a structured data extraction assistant. Extract the requested information from the input and format it according to the JSON schema below.

SCHEMA:
${schema}

INPUT:
${prompt}

Respond ONLY with a valid JSON object that matches the schema. Do not include any explanations, markdown formatting, or code blocks.`;

export const generateRetryTemplate: TemplateFunction<RetryTemplateContext> = ({
  schema,
  prompt,
  lastResponse,
  error
}) => `You are a structured data extraction assistant. Extract the requested information from the input and format it according to the JSON schema below.

SCHEMA:
${schema}

INPUT:
${prompt}

Your previous response had an error: ${error}

Previous response:
${lastResponse}

Please correct your response and provide a valid JSON object that matches the schema. Do not include any explanations, markdown formatting, or code blocks.`;

// Helper to extract and clean JSON from a string
export function extractJson(str: string): string {
  // Remove markdown code blocks
  str = str.replace(/```(?:\w*\s*)\n?/g, "").replace(/```/g, "");

  // Find the last occurrence of a JSON structure (after any thinking tags)
  const matches = str.match(/\{[\s\S]*\}|\[[\s\S]*\]/g);
  if (!matches) {
    throw new Error("No JSON-like structure found in response");
  }

  // Return the last match (after any thinking/reasoning)
  return matches[matches.length - 1] ?? "";
}

// Clean JSON string by removing common issues
export function cleanJsonString(str: string): string {
  return str
    .trim()
    .replace(/,\s*}/g, "}") // Remove trailing commas in objects
    .replace(/,\s*]/g, "]"); // Remove trailing commas in arrays
}

// Schema for boolean response
export const booleanResponseSchema = z
  .object({
    result: z.boolean()
  })
  .describe("A boolean response object");
