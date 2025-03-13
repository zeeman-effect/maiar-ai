[@maiar-ai/core](../index.md) / ModelService

# Class: ModelService

Defined in: [packages/core/src/models/service.ts:18](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L18)

Service for managing operations on models

## Constructors

### new ModelService()

> **new ModelService**(): [`ModelService`](ModelService.md)

Defined in: [packages/core/src/models/service.ts:23](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L23)

#### Returns

[`ModelService`](ModelService.md)

## Methods

### registerModel()

> **registerModel**(`model`): `void`

Defined in: [packages/core/src/models/service.ts:28](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L28)

Register a model

#### Parameters

##### model

[`ModelProvider`](../interfaces/ModelProvider.md)

#### Returns

`void`

***

### registerCapabilityAlias()

> **registerCapabilityAlias**(`alias`, `canonicalId`): `void`

Defined in: [packages/core/src/models/service.ts:54](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L54)

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

> **executeCapability**\<`I`, `O`\>(`capabilityId`, `input`, `config`?, `modelId`?): `Promise`\<`O`\>

Defined in: [packages/core/src/models/service.ts:65](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L65)

Execute a capability with the given input

#### Type Parameters

• **I**

• **O**

#### Parameters

##### capabilityId

`string`

##### input

`I`

##### config?

`OperationConfig`

##### modelId?

`string`

#### Returns

`Promise`\<`O`\>

***

### getAvailableCapabilities()

> **getAvailableCapabilities**(): `string`[]

Defined in: [packages/core/src/models/service.ts:113](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L113)

Get all available capabilities

#### Returns

`string`[]

***

### getModelsWithCapability()

> **getModelsWithCapability**(`capabilityId`): `string`[]

Defined in: [packages/core/src/models/service.ts:120](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L120)

Get all models that support a capability

#### Parameters

##### capabilityId

`string`

#### Returns

`string`[]

***

### setDefaultModelForCapability()

> **setDefaultModelForCapability**(`capabilityId`, `modelId`): `void`

Defined in: [packages/core/src/models/service.ts:128](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L128)

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

Defined in: [packages/core/src/models/service.ts:136](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L136)

Check if any model supports a capability

#### Parameters

##### capabilityId

`string`

#### Returns

`boolean`
