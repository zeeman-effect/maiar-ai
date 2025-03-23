[@maiar-ai/core](../index.md) / Runtime

# Class: Runtime

Defined in: [packages/core/src/runtime/index.ts:203](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L203)

Runtime class that manages the execution of plugins and agent state

## Constructors

### new Runtime()

> **new Runtime**(`config`): [`Runtime`](Runtime.md)

Defined in: [packages/core/src/runtime/index.ts:376](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L376)

#### Parameters

##### config

[`RuntimeConfig`](../interfaces/RuntimeConfig.md)

#### Returns

[`Runtime`](Runtime.md)

## Properties

### operations

> `readonly` **operations**: `object`

Defined in: [packages/core/src/runtime/index.ts:216](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L216)

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

Defined in: [packages/core/src/runtime/index.ts:239](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L239)

Access to the memory service for plugins

##### Returns

[`MemoryService`](MemoryService.md)

***

### monitor

#### Get Signature

> **get** **monitor**(): [`MonitorService`](MonitorService.md)

Defined in: [packages/core/src/runtime/index.ts:246](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L246)

Access to the monitor service for plugins

##### Returns

[`MonitorService`](MonitorService.md)

***

### context

#### Get Signature

> **get** **context**(): `undefined` \| [`AgentContext`](../interfaces/AgentContext.md)

Defined in: [packages/core/src/runtime/index.ts:253](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L253)

Access to the current context

##### Returns

`undefined` \| [`AgentContext`](../interfaces/AgentContext.md)

## Methods

### registerPlugin()

> **registerPlugin**(`plugin`): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:416](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L416)

Register a plugin with the runtime

#### Parameters

##### plugin

[`Plugin`](../interfaces/Plugin.md)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:445](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L445)

Start the runtime

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:501](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L501)

Stop the runtime

#### Returns

`Promise`\<`void`\>

***

### getPlugins()

> **getPlugins**(): [`Plugin`](../interfaces/Plugin.md)[]

Defined in: [packages/core/src/runtime/index.ts:518](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L518)

Get all registered plugins

#### Returns

[`Plugin`](../interfaces/Plugin.md)[]

***

### pushContext()

> **pushContext**(`context`): `void`

Defined in: [packages/core/src/runtime/index.ts:525](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L525)

Push a new context to the event queue

#### Parameters

##### context

[`AgentContext`](../interfaces/AgentContext.md)

#### Returns

`void`

***

### pushToContextChain()

> **pushToContextChain**(`item`): `void`

Defined in: [packages/core/src/runtime/index.ts:532](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L532)

Context management methods for plugins

#### Parameters

##### item

[`BaseContextItem`](../interfaces/BaseContextItem.md)

#### Returns

`void`

***

### createEvent()

> **createEvent**(`initialContext`, `platformContext`?): `Promise`\<`void`\>

Defined in: [packages/core/src/runtime/index.ts:553](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L553)

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

Defined in: [packages/core/src/runtime/index.ts:1064](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L1064)

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
