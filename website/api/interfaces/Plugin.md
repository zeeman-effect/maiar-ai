[@maiar-ai/core](../index.md) / Plugin

# Interface: Plugin

Defined in: [packages/core/src/plugin/index.ts:40](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L40)

Base plugin interface that all plugins must implement

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/plugin/index.ts:41](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L41)

***

### name

> **name**: `string`

Defined in: [packages/core/src/plugin/index.ts:42](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L42)

***

### description

> **description**: `string`

Defined in: [packages/core/src/plugin/index.ts:43](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L43)

***

### executors

> **executors**: [`Executor`](Executor.md)[]

Defined in: [packages/core/src/plugin/index.ts:44](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L44)

***

### triggers

> **triggers**: [`Trigger`](Trigger.md)[]

Defined in: [packages/core/src/plugin/index.ts:45](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L45)

***

### init()?

> `optional` **init**: (`runtime`) => `Promise`\<`void`\>

Defined in: [packages/core/src/plugin/index.ts:47](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L47)

eslint-disable-next-line @typescript-eslint/no-explicit-any

#### Parameters

##### runtime

`any`

#### Returns

`Promise`\<`void`\>

***

### execute()

> **execute**: (`action`, `context`) => `Promise`\<[`PluginResult`](PluginResult.md)\>

Defined in: [packages/core/src/plugin/index.ts:48](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L48)

#### Parameters

##### action

`string`

##### context

[`AgentContext`](AgentContext.md)

#### Returns

`Promise`\<[`PluginResult`](PluginResult.md)\>
