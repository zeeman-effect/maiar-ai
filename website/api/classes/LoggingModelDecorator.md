[@maiar-ai/core](../index.md) / LoggingModelDecorator

# Class: LoggingModelDecorator

Defined in: [packages/core/src/models/base.ts:133](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L133)

Decorator that adds logging to any ModelProvider implementation.
Logs all prompts, responses, and errors to the model interactions log file.

This follows the decorator pattern to add logging behavior to any model
without requiring the model implementations to handle logging themselves.

## Extends

- [`ModelProviderBase`](ModelProviderBase.md)

## Constructors

### new LoggingModelDecorator()

> **new LoggingModelDecorator**(`model`): [`LoggingModelDecorator`](LoggingModelDecorator.md)

Defined in: [packages/core/src/models/base.ts:134](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L134)

#### Parameters

##### model

[`ModelProvider`](../interfaces/ModelProvider.md)

#### Returns

[`LoggingModelDecorator`](LoggingModelDecorator.md)

#### Overrides

[`ModelProviderBase`](ModelProviderBase.md).[`constructor`](ModelProviderBase.md#constructors)

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/models/base.ts:68](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L68)

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`id`](ModelProviderBase.md#id-1)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/models/base.ts:69](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L69)

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`name`](ModelProviderBase.md#name-1)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/models/base.ts:70](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L70)

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`description`](ModelProviderBase.md#description-1)

***

### capabilities

> `readonly` **capabilities**: `Map`\<`string`, `ModelCapability`\>

Defined in: [packages/core/src/models/base.ts:71](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L71)

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`capabilities`](ModelProviderBase.md#capabilities)

## Accessors

### monitor

#### Get Signature

> **get** `protected` **monitor**(): *typeof* [`MonitorService`](MonitorService.md)

Defined in: [packages/core/src/models/base.ts:83](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L83)

Get access to the monitor service

##### Returns

*typeof* [`MonitorService`](MonitorService.md)

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`monitor`](ModelProviderBase.md#monitor)

## Methods

### addCapability()

> **addCapability**(`capability`): `void`

Defined in: [packages/core/src/models/base.ts:87](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L87)

Add a capability to the model

#### Parameters

##### capability

`ModelCapability`

#### Returns

`void`

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`addCapability`](ModelProviderBase.md#addcapability)

***

### getCapability()

> **getCapability**\<`I`, `O`\>(`capabilityId`): `undefined` \| `ModelCapability`\<`I`, `O`\>

Defined in: [packages/core/src/models/base.ts:91](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L91)

Get a specific capability instance

#### Type Parameters

• **I**

• **O**

#### Parameters

##### capabilityId

`string`

#### Returns

`undefined` \| `ModelCapability`\<`I`, `O`\>

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`getCapability`](ModelProviderBase.md#getcapability)

***

### getCapabilities()

> **getCapabilities**(): `ModelCapability`[]

Defined in: [packages/core/src/models/base.ts:99](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L99)

Get all capabilities supported by this model

#### Returns

`ModelCapability`[]

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`getCapabilities`](ModelProviderBase.md#getcapabilities)

***

### hasCapability()

> **hasCapability**(`capabilityId`): `boolean`

Defined in: [packages/core/src/models/base.ts:103](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L103)

Check if the model supports a specific capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`hasCapability`](ModelProviderBase.md#hascapability)

***

### executeCapability()

> **executeCapability**\<`K`\>(`capabilityId`, `input`, `config`?): `Promise`\<[`ICapabilities`](../interfaces/ICapabilities.md)\[`K`\]\[`"output"`\]\>

Defined in: [packages/core/src/models/base.ts:107](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L107)

Execute a capability

#### Type Parameters

• **K** *extends* `"text-generation"`

#### Parameters

##### capabilityId

`K`

##### input

[`ICapabilities`](../interfaces/ICapabilities.md)\[`K`\]\[`"input"`\]

##### config?

[`ModelRequestConfig`](../interfaces/ModelRequestConfig.md)

#### Returns

`Promise`\<[`ICapabilities`](../interfaces/ICapabilities.md)\[`K`\]\[`"output"`\]\>

#### Inherited from

[`ModelProviderBase`](ModelProviderBase.md).[`executeCapability`](ModelProviderBase.md#executecapability)

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:193](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L193)

Delegate checkHealth to the underlying model

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ModelProviderBase`](ModelProviderBase.md).[`checkHealth`](ModelProviderBase.md#checkhealth)

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:200](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L200)

Initialize the model if needed

#### Returns

`Promise`\<`void`\>
