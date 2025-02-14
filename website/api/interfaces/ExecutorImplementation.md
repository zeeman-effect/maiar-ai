[@maiar-ai/core](../index.md) / ExecutorImplementation

# Interface: ExecutorImplementation

Defined in: [packages/core/src/plugin/index.ts:25](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L25)

Implementation of a plugin executor

## Extends

- [`Executor`](Executor.md)

## Properties

### name

> **name**: `string`

Defined in: [packages/core/src/plugin/index.ts:18](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L18)

#### Inherited from

[`Executor`](Executor.md).[`name`](Executor.md#name)

***

### description

> **description**: `string`

Defined in: [packages/core/src/plugin/index.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L19)

#### Inherited from

[`Executor`](Executor.md).[`description`](Executor.md#description)

***

### execute()

> **execute**: (`context`) => `Promise`\<[`PluginResult`](PluginResult.md)\>

Defined in: [packages/core/src/plugin/index.ts:26](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L26)

#### Parameters

##### context

[`AgentContext`](AgentContext.md)

#### Returns

`Promise`\<[`PluginResult`](PluginResult.md)\>
