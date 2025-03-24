[@maiar-ai/core](../index.md) / ModelProvider

# Interface: ModelProvider

Defined in: [packages/core/src/models/base.ts:18](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L18)

Base interface for model providers

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/models/base.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L19)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/models/base.ts:20](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L20)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/models/base.ts:21](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L21)

***

### capabilities

> `readonly` **capabilities**: `Map`\<`string`, `ModelCapability`\>

Defined in: [packages/core/src/models/base.ts:22](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L22)

## Methods

### addCapability()

> **addCapability**(`capability`): `void`

Defined in: [packages/core/src/models/base.ts:27](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L27)

Add a capability to the model

#### Parameters

##### capability

`ModelCapability`

#### Returns

`void`

***

### getCapabilities()

> **getCapabilities**(): `ModelCapability`[]

Defined in: [packages/core/src/models/base.ts:32](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L32)

Get all capabilities supported by this model

#### Returns

`ModelCapability`[]

***

### hasCapability()

> **hasCapability**(`capabilityId`): `boolean`

Defined in: [packages/core/src/models/base.ts:37](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L37)

Check if the model supports a specific capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`

***

### getCapability()

> **getCapability**\<`I`, `O`\>(`capabilityId`): `undefined` \| `ModelCapability`\<`I`, `O`\>

Defined in: [packages/core/src/models/base.ts:42](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L42)

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

> **executeCapability**\<`K`\>(`capabilityId`, `input`, `config`?): `Promise`\<[`ICapabilities`](ICapabilities.md)\[`K`\]\[`"output"`\]\>

Defined in: [packages/core/src/models/base.ts:47](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L47)

Execute a capability

#### Type Parameters

• **K** *extends* `"text-generation"`

#### Parameters

##### capabilityId

`K`

##### input

[`ICapabilities`](ICapabilities.md)\[`K`\]\[`"input"`\]

##### config?

[`ModelRequestConfig`](ModelRequestConfig.md)

#### Returns

`Promise`\<[`ICapabilities`](ICapabilities.md)\[`K`\]\[`"output"`\]\>

***

### init()?

> `optional` **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:56](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L56)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:61](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L61)

Check model health

#### Returns

`Promise`\<`void`\>
