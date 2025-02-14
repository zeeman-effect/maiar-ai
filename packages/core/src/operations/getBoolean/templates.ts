import { TemplateFunction } from "../base";

export const generateBooleanTemplate: TemplateFunction<string> = (prompt) =>
  `Based on the following question, respond with a JSON object containing a single 'result' field that is true or false.
Consider the question carefully and respond with true only if you are highly confident.

Question: ${prompt}

Remember to respond with ONLY a JSON object like: {"result": true} or {"result": false}`;
