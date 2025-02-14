import { PipelineGenerationContext } from "./types";

interface ConversationMessage {
  timestamp: number;
  role: string;
  content: string;
}

// Helper functions for formatting
const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp).toISOString();
};

const formatPluginDescriptions = (
  context: PipelineGenerationContext
): string => {
  return context.availablePlugins
    .map(
      (plugin) => `Plugin: ${plugin.name} (${plugin.id})
Description: ${plugin.description}
Executors:
${plugin.executors.map((e) => `  - ${e.name}: ${e.description}`).join("\n")}
`
    )
    .join("\n\n");
};

const formatConversationHistory = (messages: ConversationMessage[]): string => {
  if (!messages || messages.length === 0) return "";

  const formattedMessages = messages
    .map(
      (msg) => `[${formatTimestamp(msg.timestamp)}]
Role: ${msg.role}
Message: ${msg.content}
---`
    )
    .join("\n\n");

  return `<conversation_history>
${formattedMessages}
</conversation_history>`;
};

const formatCurrentContext = (context: Record<string, unknown>): string => {
  const contextOrder = {
    platform: 1,
    conversation_history: 2,
    current_message: 3
  };

  return Object.entries(context)
    .map(([key, value]) => {
      if (key === "conversationHistory") {
        if (Array.isArray(value) && value.every(isConversationMessage)) {
          return formatConversationHistory(value);
        }
        return "";
      }
      if (key === "platform") return `<platform>${String(value)}</platform>`;
      if (key === "message")
        return `<current_message>${String(value)}</current_message>`;
      return `${key}: ${value}`;
    })
    .filter(Boolean)
    .sort((a, b) => {
      const getOrder = (str: string) => {
        if (str.includes("<platform>")) return contextOrder.platform;
        if (str.includes("<conversation_history>"))
          return contextOrder.conversation_history;
        if (str.includes("<current_message>"))
          return contextOrder.current_message;
        return 99;
      };
      return getOrder(a) - getOrder(b);
    })
    .join("\n\n");
};

// Type guard for ConversationMessage
function isConversationMessage(value: unknown): value is ConversationMessage {
  return (
    typeof value === "object" &&
    value !== null &&
    "timestamp" in value &&
    typeof (value as ConversationMessage).timestamp === "number" &&
    "role" in value &&
    typeof (value as ConversationMessage).role === "string" &&
    "content" in value &&
    typeof (value as ConversationMessage).content === "string"
  );
}

// Template sections
const EXAMPLES_SECTION = `<examples>

The examples below are not meant to demonstrate specific use cases, but rather to illustrate the different ways in which the agent can interact with the world via the plugin syntax.
Do not take the exact pipeline steps as steps you must follow, come up with your own steps based on the context and the plugins available.

Example 1 - User asks for current time via terminal:
[
  {
    "pluginId": "plugin-time",
    "action": "get_current_time"
  },
  {
    "pluginId": "plugin-terminal",
    "action": "send_response"
  }
]

Example 2 - User asks to generate an image via HTTP:
[
  {
    "pluginId": "plugin-text",
    "action": "generate_text" 
  },
  {
    "pluginId": "plugin-image-generation",
    "action": "generate_image"
  },
  {
    "pluginId": "plugin-express",
    "action": "send_response"
  }
]

Example 3 - User asks for a greeting via WebSocket:
[
  {
    "pluginId": "plugin-text",
    "action": "generate_text"
  },
  {
    "pluginId": "plugin-websocket",
    "action": "send_response"
  }
]

Example 4 - User mentions the agent account on X (formerly Twitter):
[
  {
    "pluginId": "plugin-text",
    "action": "generate_text"
  },
  {
    "pluginId": "plugin-x",
    "action": "send_post"
  }
]
</examples>`;

const RULES_SECTION = `<rules>
1. Your job is to generate the NEXT steps to handle this request. The trigger event has already happened.
2. The final response MUST be sent back through the same plugin that triggered the request using its response executor (e.g. send_response)
3. Each plugin has its own response executor(s) for sending responses back to its platform
4. The response executor must be the LAST step in the pipeline
5. The response should be exactly what a user would expect to see based on their initial message:
   - If they ask for a story, the response should be just the story
   - If they ask for the time, the response should be just the time
   - If they ask for data, the response should be just that data
   - NEVER include meta-information about how the response was generated
   - NEVER mention plugins, actions, or system details in the response
   - Respond as if you were directly answering their message
6. NEVER include the same action twice in the pipeline - each action should only be called once
7. If you need data from a plugin (like the current time), get it ONCE and use that result
8. You can ONLY use the executors listed under each plugin's "Executors" section
9. If there is conversation history, use it to maintain context and provide more relevant responses
10. Make sure your response acknowledges and builds upon any previous conversation context when appropriate
11. A response executor (send_response) MUST NOT be used alone - it must be preceded by a step that generates the content to send (e.g. generate_text, get_current_time, etc.)
</rules>`;

const TASK_SECTION = `<task>
Generate a sequence of steps to handle this context. Each step should use an available plugin executor.

IMPORTANT: Return ONLY the raw JSON array. Do NOT wrap it in code blocks or add any other text.
</task>`;

export function generatePipelineTemplate(
  context: PipelineGenerationContext
): string {
  const pluginSection = `<plugins>\n${formatPluginDescriptions(context)}\n</plugins>`;
  const contextSection = `<context>\n${formatCurrentContext(context.currentContext)}\n</context>`;

  return [
    pluginSection,
    EXAMPLES_SECTION,
    RULES_SECTION,
    contextSection,
    TASK_SECTION
  ].join("\n\n");
}
