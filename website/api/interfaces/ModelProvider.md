[@maiar-ai/core](../index.md) / ModelProvider

# Interface: ModelProvider

Defined in: [packages/core/src/models/base.ts:17](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L17)

Base interface for model providers

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/models/base.ts:18](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L18)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/models/base.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L19)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/models/base.ts:20](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L20)

***

### capabilities

> `readonly` **capabilities**: `Map`\<`string`, `ModelCapability`\>

Defined in: [packages/core/src/models/base.ts:21](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L21)

## Methods

### addCapability()

> **addCapability**(`capability`): `void`

Defined in: [packages/core/src/models/base.ts:26](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L26)

Add a capability to the model

#### Parameters

##### capability

`ModelCapability`

#### Returns

`void`

***

### getCapabilities()

> **getCapabilities**(): `ModelCapability`[]

Defined in: [packages/core/src/models/base.ts:31](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L31)

Get all capabilities supported by this model

#### Returns

`ModelCapability`[]

***

### hasCapability()

> **hasCapability**(`capabilityId`): `boolean`

Defined in: [packages/core/src/models/base.ts:36](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L36)

Check if the model supports a specific capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`

***

### getCapability()

> **getCapability**\<`I`, `O`\>(`capabilityId`): `undefined` \| `ModelCapability`\<`I`, `O`\>

Defined in: [packages/core/src/models/base.ts:41](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L41)

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

Defined in: [packages/core/src/models/base.ts:46](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L46)

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

Defined in: [packages/core/src/models/base.ts:55](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L55)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:60](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L60)

Check model health

#### Returns

`Promise`\<`void`\>
