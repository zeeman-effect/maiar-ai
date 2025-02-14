import { TemplateFunction } from "../base";

interface ObjectTemplateContext {
  schema: string;
  prompt: string;
}

interface RetryTemplateContext extends ObjectTemplateContext {
  lastResponse: string;
  error: string;
}

export const generateObjectTemplate: TemplateFunction<ObjectTemplateContext> = (
  context
) => `
You are a helpful AI that generates JSON objects according to specifications.
Please generate a JSON object that matches the following schema:

${context.schema}

Return ONLY the JSON object, with no additional text or explanation.
The response must be valid JSON that can be parsed with JSON.parse().

    IMPORTANT: Your response MUST be valid JSON:
    - Use double quotes (") not single quotes (')
    - Escape any quotes within strings with backslash (")
    - Do not use smart/curly quotes
    - The response must be parseable by JSON.parse()

    The object should satisfy this requirement:
${context.prompt}
`;

export const generateRetryTemplate: TemplateFunction<RetryTemplateContext> = (
  context
) => `
You are a helpful AI that generates JSON objects according to specifications.
Your previous response failed to parse as valid JSON. Here's what went wrong:

Error: ${context.error}

Your previous response:
${context.lastResponse}

Please try again to generate a JSON object that matches this schema:

${context.schema}

Return ONLY the JSON object, with no additional text or explanation.
The response must be valid JSON that can be parsed with JSON.parse().

    IMPORTANT: Your response MUST be valid JSON:
    - Use double quotes (") not single quotes (')
    - Escape any quotes within strings with backslash (")
    - Do not use smart/curly quotes
    - The response must be parseable by JSON.parse()

    The object should satisfy this requirement:
${context.prompt}
`;
