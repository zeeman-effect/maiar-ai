[@maiar-ai/core](../index.md) / PluginBase

# Class: `abstract` PluginBase

Defined in: [packages/core/src/plugin/index.ts:64](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L64)

Base class that implements common plugin functionality

## Implements

- [`Plugin`](../interfaces/Plugin.md)

## Constructors

### new PluginBase()

> **new PluginBase**(`config`): [`PluginBase`](PluginBase.md)

Defined in: [packages/core/src/plugin/index.ts:73](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L73)

#### Parameters

##### config

###### id

`string`

###### name

`string`

###### description

`string`

###### capabilities

[`Capability`](../interfaces/Capability.md)[]

#### Returns

[`PluginBase`](PluginBase.md)

## Properties

### runtime

> **runtime**: [`Runtime`](Runtime.md)

Defined in: [packages/core/src/plugin/index.ts:67](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L67)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/plugin/index.ts:68](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L68)

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`id`](../interfaces/Plugin.md#id)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/plugin/index.ts:69](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L69)

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`name`](../interfaces/Plugin.md#name)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/plugin/index.ts:70](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L70)

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`description`](../interfaces/Plugin.md#description)

***

### capabilitiesList

> `readonly` **capabilitiesList**: [`Capability`](../interfaces/Capability.md)[] = `[]`

Defined in: [packages/core/src/plugin/index.ts:71](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L71)

## Accessors

### executors

#### Get Signature

> **get** **executors**(): [`Executor`](../interfaces/Executor.md)[]

Defined in: [packages/core/src/plugin/index.ts:89](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L89)

##### Returns

[`Executor`](../interfaces/Executor.md)[]

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`executors`](../interfaces/Plugin.md#executors)

***

### triggers

#### Get Signature

> **get** **triggers**(): [`Trigger`](../interfaces/Trigger.md)[]

Defined in: [packages/core/src/plugin/index.ts:96](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L96)

##### Returns

[`Trigger`](../interfaces/Trigger.md)[]

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`triggers`](../interfaces/Plugin.md#triggers)

***

### capabilities

#### Get Signature

> **get** **capabilities**(): [`Capability`](../interfaces/Capability.md)[]

Defined in: [packages/core/src/plugin/index.ts:100](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L100)

##### Returns

[`Capability`](../interfaces/Capability.md)[]

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`capabilities`](../interfaces/Plugin.md#capabilities)

## Methods

### init()

> **init**(`runtime`): `Promise`\<`void`\>

Defined in: [packages/core/src/plugin/index.ts:85](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L85)

eslint-disable-next-line @typescript-eslint/no-explicit-any

#### Parameters

##### runtime

[`Runtime`](Runtime.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`init`](../interfaces/Plugin.md#init)

***

### addExecutor()

> **addExecutor**(`executor`): `void`

Defined in: [packages/core/src/plugin/index.ts:104](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L104)

#### Parameters

##### executor

[`ExecutorImplementation`](../interfaces/ExecutorImplementation.md)

#### Returns

`void`

***

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [packages/core/src/plugin/index.ts:108](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L108)

#### Parameters

##### trigger

[`Trigger`](../interfaces/Trigger.md)

#### Returns

`void`

***

### addCapability()

> **addCapability**(`capability`): `void`

Defined in: [packages/core/src/plugin/index.ts:112](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L112)

#### Parameters

##### capability

[`Capability`](../interfaces/Capability.md)

#### Returns

`void`

***

### execute()

> **execute**(`action`, `context`): `Promise`\<[`PluginResult`](../interfaces/PluginResult.md)\>

Defined in: [packages/core/src/plugin/index.ts:116](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L116)

#### Parameters

##### action

`string`

##### context

[`AgentContext`](../interfaces/AgentContext.md)

#### Returns

`Promise`\<[`PluginResult`](../interfaces/PluginResult.md)\>

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`execute`](../interfaces/Plugin.md#execute)
