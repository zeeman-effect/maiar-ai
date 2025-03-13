[@maiar-ai/core](../index.md) / ModelProviderBase

# Class: `abstract` ModelProviderBase

Defined in: [packages/core/src/models/base.ts:65](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L65)

Base class for model providers

## Extended by

- [`LoggingModelDecorator`](LoggingModelDecorator.md)

## Implements

- [`ModelProvider`](../interfaces/ModelProvider.md)

## Constructors

### new ModelProviderBase()

> **new ModelProviderBase**(`id`, `name`, `description`): [`ModelProviderBase`](ModelProviderBase.md)

Defined in: [packages/core/src/models/base.ts:71](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L71)

#### Parameters

##### id

`string`

##### name

`string`

##### description

`string`

#### Returns

[`ModelProviderBase`](ModelProviderBase.md)

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/models/base.ts:66](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L66)

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`id`](../interfaces/ModelProvider.md#id)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/models/base.ts:67](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L67)

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`name`](../interfaces/ModelProvider.md#name)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/models/base.ts:68](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L68)

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`description`](../interfaces/ModelProvider.md#description)

***

### capabilities

> `readonly` **capabilities**: `Map`\<`string`, `ModelCapability`\>

Defined in: [packages/core/src/models/base.ts:69](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L69)

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`capabilities`](../interfaces/ModelProvider.md#capabilities)

## Methods

### addCapability()

> **addCapability**(`capability`): `void`

Defined in: [packages/core/src/models/base.ts:78](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L78)

Add a capability to the model

#### Parameters

##### capability

`ModelCapability`

#### Returns

`void`

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`addCapability`](../interfaces/ModelProvider.md#addcapability)

***

### getCapability()

> **getCapability**\<`I`, `O`\>(`capabilityId`): `undefined` \| `ModelCapability`\<`I`, `O`\>

Defined in: [packages/core/src/models/base.ts:82](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L82)

Get a specific capability instance

#### Type Parameters

• **I**

• **O**

#### Parameters

##### capabilityId

`string`

#### Returns

`undefined` \| `ModelCapability`\<`I`, `O`\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`getCapability`](../interfaces/ModelProvider.md#getcapability)

***

### getCapabilities()

> **getCapabilities**(): `ModelCapability`[]

Defined in: [packages/core/src/models/base.ts:90](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L90)

Get all capabilities supported by this model

#### Returns

`ModelCapability`[]

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`getCapabilities`](../interfaces/ModelProvider.md#getcapabilities)

***

### hasCapability()

> **hasCapability**(`capabilityId`): `boolean`

Defined in: [packages/core/src/models/base.ts:94](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L94)

Check if the model supports a specific capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`hasCapability`](../interfaces/ModelProvider.md#hascapability)

***

### executeCapability()

> **executeCapability**\<`I`, `O`\>(`capabilityId`, `input`, `config`?): `Promise`\<`O`\>

Defined in: [packages/core/src/models/base.ts:98](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L98)

Execute a capability

#### Type Parameters

• **I**

• **O**

#### Parameters

##### capabilityId

`string`

##### input

`I`

##### config?

[`ModelRequestConfig`](../interfaces/ModelRequestConfig.md)

#### Returns

`Promise`\<`O`\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`executeCapability`](../interfaces/ModelProvider.md#executecapability)

***

### checkHealth()

> `abstract` **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:112](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L112)

Check model health

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`checkHealth`](../interfaces/ModelProvider.md#checkhealth)
