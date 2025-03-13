[@maiar-ai/core](../index.md) / ModelProvider

# Interface: ModelProvider

Defined in: [packages/core/src/models/base.ts:16](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L16)

Base interface for model providers

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/models/base.ts:17](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L17)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/models/base.ts:18](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L18)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/models/base.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L19)

***

### capabilities

> `readonly` **capabilities**: `Map`\<`string`, `ModelCapability`\>

Defined in: [packages/core/src/models/base.ts:20](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L20)

## Methods

### addCapability()

> **addCapability**(`capability`): `void`

Defined in: [packages/core/src/models/base.ts:25](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L25)

Add a capability to the model

#### Parameters

##### capability

`ModelCapability`

#### Returns

`void`

***

### getCapabilities()

> **getCapabilities**(): `ModelCapability`[]

Defined in: [packages/core/src/models/base.ts:30](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L30)

Get all capabilities supported by this model

#### Returns

`ModelCapability`[]

***

### hasCapability()

> **hasCapability**(`capabilityId`): `boolean`

Defined in: [packages/core/src/models/base.ts:35](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L35)

Check if the model supports a specific capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`

***

### getCapability()

> **getCapability**\<`I`, `O`\>(`capabilityId`): `undefined` \| `ModelCapability`\<`I`, `O`\>

Defined in: [packages/core/src/models/base.ts:40](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L40)

Get a specific capability instance

#### Type Parameters

• **I**

• **O**

#### Parameters

##### capabilityId

`string`

#### Returns

`undefined` \| `ModelCapability`\<`I`, `O`\>

***

### executeCapability()

> **executeCapability**\<`I`, `O`\>(`capabilityId`, `input`, `config`?): `Promise`\<`O`\>

Defined in: [packages/core/src/models/base.ts:45](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L45)

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

[`ModelRequestConfig`](ModelRequestConfig.md)

#### Returns

`Promise`\<`O`\>

***

### init()?

> `optional` **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:54](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L54)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:59](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L59)

Check model health

#### Returns

`Promise`\<`void`\>
