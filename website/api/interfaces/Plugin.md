[@maiar-ai/core](../index.md) / Plugin

# Interface: Plugin

Defined in: [packages/core/src/plugin/index.ts:49](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L49)

Plugin interface that all plugins must implement

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/plugin/index.ts:50](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L50)

***

### name

> **name**: `string`

Defined in: [packages/core/src/plugin/index.ts:51](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L51)

***

### description

> **description**: `string`

Defined in: [packages/core/src/plugin/index.ts:52](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L52)

***

### executors

> **executors**: [`Executor`](Executor.md)[]

Defined in: [packages/core/src/plugin/index.ts:53](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L53)

***

### triggers

> **triggers**: [`Trigger`](Trigger.md)[]

Defined in: [packages/core/src/plugin/index.ts:54](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L54)

***

### capabilities

> **capabilities**: [`Capability`](Capability.md)[]

Defined in: [packages/core/src/plugin/index.ts:55](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L55)

***

### init()?

> `optional` **init**: (`runtime`) => `Promise`\<`void`\>

Defined in: [packages/core/src/plugin/index.ts:57](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L57)

eslint-disable-next-line @typescript-eslint/no-explicit-any

#### Parameters

##### runtime

`any`

#### Returns

`Promise`\<`void`\>

***

### execute()

> **execute**: (`action`, `context`) => `Promise`\<[`PluginResult`](PluginResult.md)\>

Defined in: [packages/core/src/plugin/index.ts:58](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L58)

#### Parameters

##### action

`string`

##### context

[`AgentContext`](AgentContext.md)

#### Returns

`Promise`\<[`PluginResult`](PluginResult.md)\>
