[@maiar-ai/core](../index.md) / Runtime

# Class: Runtime

Defined in: [packages/core/src/runtime/index.ts:83](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L83)

Runtime class that manages the execution of plugins and agent state

## Constructors

### new Runtime()

> **new Runtime**(`config`): [`Runtime`](Runtime.md)

Defined in: [packages/core/src/runtime/index.ts:248](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L248)

#### Parameters

##### config

[`RuntimeConfig`](../interfaces/RuntimeConfig.md)

#### Returns

[`Runtime`](Runtime.md)

## Properties

### operations

> `readonly` **operations**: `object`

Defined in: [packages/core/src/runtime/index.ts:96](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L96)

Operations that can be used by plugins

#### getObject()

> **getObject**: \<`T`\>(`schema`, `prompt`, `config`?) => `Promise`\<`TypeOf`\<`T`\>\>

##### Type Parameters

• **T** *extends* `ZodType`\<`unknown`, `unknown`\>

##### Parameters

###### schema

`T`

###### prompt

`string`

###### config?

`OperationConfig`

##### Returns

`Promise`\<`TypeOf`\<`T`\>\>

#### getText()

> **getText**: (`prompt`, `config`?) => `Promise`\<`string`\>

##### Parameters

###### prompt

`string`

###### config?

`GetObjectConfig`

##### Returns

`Promise`\<`string`\>

#### getBoolean()

> **getBoolean**: (`prompt`, `config`?) => `Promise`\<`boolean`\>

##### Parameters

###### prompt

`string`

###### config?

`GetObjectConfig`

##### Returns

`Promise`\<`boolean`\>

## Accessors

### llm

#### Get Signature

> **get** **llm**(): [`LLMService`](LLMService.md)

Defined in: [packages/core/src/runtime/index.ts:111](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L111)

Access to the LLM service for plugins

##### Returns

[`LLMService`](LLMService.md)

***

### memory

#### Get Signature

> **get** **memory**(): [`MemoryService`](MemoryService.md)

Defined in: [packages/core/src/runtime/index.ts:118](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L118)

Access to the memory service for plugins

##### Returns

[`MemoryService`](MemoryService.md)

***

### context

#### Get Signature

> **get** **context**(): `undefined` \| [`AgentContext`](../interfaces/AgentContext.md)

Defined in: [packages/core/src/runtime/index.ts:125](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L125)

Access to the current context

##### Returns

`undefined` \| [`AgentContext`](../interfaces/AgentContext.md)

## Methods

### registerPlugin()

> **registerPlugin**(`plugin`): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:258](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L258)

Register a plugin with the runtime

#### Parameters

##### plugin

[`Plugin`](../interfaces/Plugin.md)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:287](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L287)

Start the runtime

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:313](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L313)

Stop the runtime

#### Returns

`Promise`\<`void`\>

***

### getPlugins()

> **getPlugins**(): [`Plugin`](../interfaces/Plugin.md)[]

Defined in: [packages/core/src/runtime/index.ts:324](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L324)

Get all registered plugins

#### Returns

[`Plugin`](../interfaces/Plugin.md)[]

***

### pushContext()

> **pushContext**(`context`): `void`

Defined in: [packages/core/src/runtime/index.ts:331](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L331)

Push a new context to the event queue

#### Parameters

##### context

[`AgentContext`](../interfaces/AgentContext.md)

#### Returns

`void`

***

### pushToContextChain()

> **pushToContextChain**(`item`): `void`

Defined in: [packages/core/src/runtime/index.ts:338](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L338)

Context management methods for plugins

#### Parameters

##### item

[`BaseContextItem`](../interfaces/BaseContextItem.md)

#### Returns

`void`

***

### createEvent()

> **createEvent**(`initialContext`, `platformContext`?): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:359](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L359)

#### Parameters

##### initialContext

[`UserInputContext`](../interfaces/UserInputContext.md)

##### platformContext?

###### platform

`string`

###### responseHandler

(`response`) => `void`

###### metadata

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`void`\>

***

### subscribeToContext()

> **subscribeToContext**(`callback`): () => `void`

Defined in: [packages/core/src/runtime/index.ts:780](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L780)

Subscribe to context changes
Returns an unsubscribe function

#### Parameters

##### callback

(`context`) => `void`

#### Returns

`Function`

##### Returns

`void`
