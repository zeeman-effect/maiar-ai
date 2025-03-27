/* eslint-disable no-useless-escape */
import { BaseContextItem } from "@maiar-ai/core";

export function generateUploadDocumnetTemplate(
  contextChain: BaseContextItem[]
): string {
  return `Generate a response based on the context chain. Your response shoudl be a JSON object with a single "content" field containing your response.
        The response should be the exact text that should be uploaded to the sandbox database for later use.

        IMPORTANT: Your response MUST be valid JSON:
        - Use double quotes (") not single quotes (')
        - Escape any quotes within strings with backslash (\")
        - Do not use smart/curly quotes
        - The response must be parseable by JSON.parse()

        Do NOT include any metadata, context information, or explanation of how the response was generated.
        Look for the relevant information in the most recent context items (e.g. generated text, current time, etc).

        Here is the Context Chain, it contains all messages from the user and plugin response. Your job is to find the content
        that the user or plugin wants to upload to the database for future use and generate a response with just that information.
        Make sure to keep the content exactly how it was presented by the user or plugin.
        ${JSON.stringify(contextChain, null, 2)}

        Example of a valid response:
        {
            "content": "This is example text to upload to the database"
        }
    `;
}

export function generateQueryTemplate(contextChain: BaseContextItem[]): string {
  return `Generate a response based on the context chain. Your response should be a JSON object with fields corresponding to the fields
        in the database to filter with. The response will be used to search a JSON file database, so your response should be 
        only those property values that can be used to filter the database.
        The available fields are:
        - id
        - conversationId
        - content
        - timestamp

        You only need to respond with non-null fields, if you cannot construct fields to query with return an empty object.

        IMPORTANT: Your response MUST be valid JSON:
        - Use double quotes (") not single quotes (')
        - Escape any quotes within strings with backslash (\")
        - Do not use smart/curly quotes
        - The response must be parseable by JSON.parse()

        Do NOT include any metadata, context information, or explanation of how the response was generated.
        Look for the relevant information in the most recent context items (e.g. generated text, current time, etc).

        Here is the context chain, it contains all messages from the user and plugin responses. Your job is to construct
        the values for each available field that will then be used to filter the JSON database file.
        ${JSON.stringify(contextChain, null, 2)}

        Example of a valid response that filters the database by content that contains the word "test":
        {
            "content": "test",
        }

        Example of a valid response that filters the database by ids that contain "doc":
        {
            "id": "doc",
        }
    `;
}
