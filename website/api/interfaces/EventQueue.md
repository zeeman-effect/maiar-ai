[@maiar-ai/core](../index.md) / EventQueue

# Interface: EventQueue

Defined in: [packages/core/src/types/agent.ts:35](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L35)

Queue interface for managing agent contexts

## Properties

### push()

> **push**: (`context`) => `Promise`\<`void`\>

Defined in: [packages/core/src/types/agent.ts:36](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L36)

#### Parameters

##### context

`Omit`\<[`AgentContext`](AgentContext.md), `"eventQueue"`\>

#### Returns

`Promise`\<`void`\>

***

### shift()

> **shift**: () => `Promise`\<`undefined` \| [`AgentContext`](AgentContext.md)\>

Defined in: [packages/core/src/types/agent.ts:37](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L37)

#### Returns

`Promise`\<`undefined` \| [`AgentContext`](AgentContext.md)\>
