[@maiar-ai/core](../index.md) / ModelService

# Class: ModelService

Defined in: [packages/core/src/models/service.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L19)

Service for managing operations on models

## Constructors

### new ModelService()

> **new ModelService**(): [`ModelService`](ModelService.md)

Defined in: [packages/core/src/models/service.ts:24](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L24)

#### Returns

[`ModelService`](ModelService.md)

## Methods

### registerModel()

> **registerModel**(`model`): `void`

Defined in: [packages/core/src/models/service.ts:29](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L29)

Register a model

#### Parameters

##### model

[`ModelProvider`](../interfaces/ModelProvider.md)

#### Returns

`void`

***

### registerCapabilityAlias()

> **registerCapabilityAlias**(`alias`, `canonicalId`): `void`

Defined in: [packages/core/src/models/service.ts:55](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L55)

Register a capability alias

#### Parameters

##### alias

`string`

##### canonicalId

`string`

#### Returns

`void`

***

### executeCapability()

> **executeCapability**\<`K`\>(`capabilityId`, `input`, `config`?, `modelId`?): `Promise`\<[`ICapabilities`](../interfaces/ICapabilities.md)\[`K`\]\[`"output"`\]\>

Defined in: [packages/core/src/models/service.ts:66](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L66)

Execute a capability with the given input

#### Type Parameters

• **K** *extends* `"text-generation"`

#### Parameters

##### capabilityId

`K`

##### input

[`ICapabilities`](../interfaces/ICapabilities.md)\[`K`\]\[`"input"`\]

##### config?

`OperationConfig`

##### modelId?

`string`

#### Returns

`Promise`\<[`ICapabilities`](../interfaces/ICapabilities.md)\[`K`\]\[`"output"`\]\>

***

### getAvailableCapabilities()

> **getAvailableCapabilities**(): `string`[]

Defined in: [packages/core/src/models/service.ts:116](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L116)

Get all available capabilities

#### Returns

`string`[]

***

### getModelsWithCapability()

> **getModelsWithCapability**(`capabilityId`): `string`[]

Defined in: [packages/core/src/models/service.ts:123](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L123)

Get all models that support a capability

#### Parameters

##### capabilityId

`string`

#### Returns

`string`[]

***

### setDefaultModelForCapability()

> **setDefaultModelForCapability**(`capabilityId`, `modelId`): `void`

Defined in: [packages/core/src/models/service.ts:131](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L131)

Set the default model for a capability

#### Parameters

##### capabilityId

`string`

##### modelId

`string`

#### Returns

`void`

***

### hasCapability()

> **hasCapability**(`capabilityId`): `boolean`

Defined in: [packages/core/src/models/service.ts:139](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L139)

Check if any model supports a capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`
