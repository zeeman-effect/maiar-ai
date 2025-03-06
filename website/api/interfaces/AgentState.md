[@maiar-ai/core](../index.md) / AgentState

# Interface: AgentState

Defined in: [packages/core/src/monitor/types.ts:8](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L8)

The state of the agent that can be monitored.
This represents a snapshot of the runtime's current state
which monitor providers can use to track system activity.

## Properties

### currentContext?

> `optional` **currentContext**: [`AgentContext`](AgentContext.md)

Defined in: [packages/core/src/monitor/types.ts:10](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L10)

The current context of the agent's execution

***

### queueLength

> **queueLength**: `number`

Defined in: [packages/core/src/monitor/types.ts:13](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L13)

Number of pending contexts waiting for processing

***

### isRunning

> **isRunning**: `boolean`

Defined in: [packages/core/src/monitor/types.ts:16](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L16)

Whether the agent is currently processing events

***

### lastUpdate

> **lastUpdate**: `number`

Defined in: [packages/core/src/monitor/types.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L19)

Timestamp of when this state was last updated

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [packages/core/src/monitor/types.ts:22](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L22)

Optional metadata with additional state information
