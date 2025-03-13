[@maiar-ai/core](../index.md) / Runtime

# Class: Runtime

Defined in: [packages/core/src/runtime/index.ts:188](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L188)

Runtime class that manages the execution of plugins and agent state

## Constructors

### new Runtime()

> **new Runtime**(`config`): [`Runtime`](Runtime.md)

Defined in: [packages/core/src/runtime/index.ts:361](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L361)

#### Parameters

##### config

[`RuntimeConfig`](../interfaces/RuntimeConfig.md)

#### Returns

[`Runtime`](Runtime.md)

## Properties

### operations

> `readonly` **operations**: `object`

Defined in: [packages/core/src/runtime/index.ts:201](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L201)

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

#### executeCapability()

> **executeCapability**: \<`I`, `O`\>(`capabilityId`, `input`, `config`?, `modelId`?) => `Promise`\<`O`\>

##### Type Parameters

• **I**

• **O**

##### Parameters

###### capabilityId

`string`

###### input

`I`

###### config?

`OperationConfig`

###### modelId?

`string`

##### Returns

`Promise`\<`O`\>

## Accessors

### memory

#### Get Signature

> **get** **memory**(): [`MemoryService`](MemoryService.md)

Defined in: [packages/core/src/runtime/index.ts:224](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L224)

Access to the memory service for plugins

##### Returns

[`MemoryService`](MemoryService.md)

***

### monitor

#### Get Signature

> **get** **monitor**(): [`MonitorService`](MonitorService.md)

Defined in: [packages/core/src/runtime/index.ts:231](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L231)

Access to the monitor service for plugins

##### Returns

[`MonitorService`](MonitorService.md)

***

### context

#### Get Signature

> **get** **context**(): `undefined` \| [`AgentContext`](../interfaces/AgentContext.md)

Defined in: [packages/core/src/runtime/index.ts:238](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L238)

Access to the current context

##### Returns

`undefined` \| [`AgentContext`](../interfaces/AgentContext.md)

## Methods

### registerPlugin()

> **registerPlugin**(`plugin`): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:403](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L403)

Register a plugin with the runtime

#### Parameters

##### plugin

[`Plugin`](../interfaces/Plugin.md)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:432](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L432)

Start the runtime

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:490](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L490)

Stop the runtime

#### Returns

`Promise`\<`void`\>

***

### getPlugins()

> **getPlugins**(): [`Plugin`](../interfaces/Plugin.md)[]

Defined in: [packages/core/src/runtime/index.ts:509](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L509)

Get all registered plugins

#### Returns

[`Plugin`](../interfaces/Plugin.md)[]

***

### pushContext()

> **pushContext**(`context`): `void`

Defined in: [packages/core/src/runtime/index.ts:516](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L516)

Push a new context to the event queue

#### Parameters

##### context

[`AgentContext`](../interfaces/AgentContext.md)

#### Returns

`void`

***

### pushToContextChain()

> **pushToContextChain**(`item`): `void`

Defined in: [packages/core/src/runtime/index.ts:523](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L523)

Context management methods for plugins

#### Parameters

##### item

[`BaseContextItem`](../interfaces/BaseContextItem.md)

#### Returns

`void`

***

### createEvent()

> **createEvent**(`initialContext`, `platformContext`?): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:544](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L544)

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

### executeCapability()

> **executeCapability**\<`I`, `O`\>(`id`, `input`, `config`?): `Promise`\<`O`\>

Defined in: [packages/core/src/runtime/index.ts:1050](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L1050)

Execute a capability on the model service

#### Type Parameters

• **I** = `unknown`

• **O** = `unknown`

#### Parameters

##### id

`string`

##### input

`I`

##### config?

[`ModelRequestConfig`](../interfaces/ModelRequestConfig.md)

#### Returns

`Promise`\<`O`\>
