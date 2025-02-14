[@maiar-ai/core](../index.md) / PluginBase

# Class: `abstract` PluginBase

Defined in: [packages/core/src/plugin/index.ts:54](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L54)

Base class that implements common plugin functionality

## Implements

- [`Plugin`](../interfaces/Plugin.md)

## Constructors

### new PluginBase()

> **new PluginBase**(`config`): [`PluginBase`](PluginBase.md)

Defined in: [packages/core/src/plugin/index.ts:62](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L62)

#### Parameters

##### config

###### id

`string`

###### name

`string`

###### description

`string`

#### Returns

[`PluginBase`](PluginBase.md)

## Properties

### runtime

> **runtime**: [`Runtime`](Runtime.md)

Defined in: [packages/core/src/plugin/index.ts:57](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L57)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/plugin/index.ts:58](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L58)

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`id`](../interfaces/Plugin.md#id)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/plugin/index.ts:59](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L59)

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`name`](../interfaces/Plugin.md#name)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/plugin/index.ts:60](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L60)

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`description`](../interfaces/Plugin.md#description)

## Accessors

### executors

#### Get Signature

> **get** **executors**(): [`Executor`](../interfaces/Executor.md)[]

Defined in: [packages/core/src/plugin/index.ts:72](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L72)

##### Returns

[`Executor`](../interfaces/Executor.md)[]

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`executors`](../interfaces/Plugin.md#executors)

***

### triggers

#### Get Signature

> **get** **triggers**(): [`Trigger`](../interfaces/Trigger.md)[]

Defined in: [packages/core/src/plugin/index.ts:79](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L79)

##### Returns

[`Trigger`](../interfaces/Trigger.md)[]

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`triggers`](../interfaces/Plugin.md#triggers)

## Methods

### init()

> **init**(`runtime`): `Promise`\<`void`\>

Defined in: [packages/core/src/plugin/index.ts:68](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L68)

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

Defined in: [packages/core/src/plugin/index.ts:83](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L83)

#### Parameters

##### executor

[`ExecutorImplementation`](../interfaces/ExecutorImplementation.md)

#### Returns

`void`

***

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [packages/core/src/plugin/index.ts:87](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L87)

#### Parameters

##### trigger

[`Trigger`](../interfaces/Trigger.md)

#### Returns

`void`

***

### execute()

> **execute**(`action`, `context`): `Promise`\<[`PluginResult`](../interfaces/PluginResult.md)\>

Defined in: [packages/core/src/plugin/index.ts:91](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/plugin/index.ts#L91)

#### Parameters

##### action

`string`

##### context

[`AgentContext`](../interfaces/AgentContext.md)

#### Returns

`Promise`\<[`PluginResult`](../interfaces/PluginResult.md)\>

#### Implementation of

[`Plugin`](../interfaces/Plugin.md).[`execute`](../interfaces/Plugin.md#execute)
