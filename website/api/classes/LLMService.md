[@maiar-ai/core](../index.md) / LLMService

# Class: LLMService

Defined in: [packages/core/src/models/service.ts:23](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L23)

Service for managing LLM operations

## Constructors

### new LLMService()

> **new LLMService**(`model`?): [`LLMService`](LLMService.md)

Defined in: [packages/core/src/models/service.ts:27](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L27)

#### Parameters

##### model?

[`ModelProvider`](../interfaces/ModelProvider.md)

#### Returns

[`LLMService`](LLMService.md)

## Methods

### registerModel()

> **registerModel**(`model`, `modelId`): `void`

Defined in: [packages/core/src/models/service.ts:37](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L37)

Register a model

#### Parameters

##### model

[`ModelProvider`](../interfaces/ModelProvider.md)

##### modelId

`string`

#### Returns

`void`

***

### getText()

> **getText**(`prompt`, `config`?): `Promise`\<`string`\>

Defined in: [packages/core/src/models/service.ts:61](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L61)

Get text completion from the default or specified model

#### Parameters

##### prompt

`string`

##### config?

[`ModelRequestConfig`](../interfaces/ModelRequestConfig.md) & `object`

#### Returns

`Promise`\<`string`\>

***

### setDefaultModel()

> **setDefaultModel**(`modelId`): `void`

Defined in: [packages/core/src/models/service.ts:81](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L81)

Set the default model

#### Parameters

##### modelId

`string`

#### Returns

`void`

***

### getDefaultModelId()

> **getDefaultModelId**(): `null` \| `string`

Defined in: [packages/core/src/models/service.ts:92](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L92)

Get the current default model ID

#### Returns

`null` \| `string`

***

### getModelIds()

> **getModelIds**(): `string`[]

Defined in: [packages/core/src/models/service.ts:99](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L99)

Get all registered model IDs

#### Returns

`string`[]
