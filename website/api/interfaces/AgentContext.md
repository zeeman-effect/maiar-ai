[@maiar-ai/core](../index.md) / AgentContext

# Interface: AgentContext

Defined in: [packages/core/src/types/agent.ts:41](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L41)

The full context chain container

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/types/agent.ts:42](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L42)

***

### eventQueue?

> `optional` **eventQueue**: [`EventQueue`](EventQueue.md)

Defined in: [packages/core/src/types/agent.ts:43](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L43)

***

### platformContext?

> `optional` **platformContext**: `object`

Defined in: [packages/core/src/types/agent.ts:44](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L44)

#### platform

> **platform**: `string`

#### responseHandler()?

> `optional` **responseHandler**: (`response`) => `void`

##### Parameters

###### response

`unknown`

##### Returns

`void`

#### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>
