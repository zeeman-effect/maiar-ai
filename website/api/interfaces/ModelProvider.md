[@maiar-ai/core](../index.md) / ModelProvider

# Interface: ModelProvider

Defined in: [packages/core/src/models/service.ts:14](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L14)

Interface for model providers
Each provider should implement this interface and be instantiated with its config

## Extends

- [`ModelInterface`](ModelInterface.md)

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/models/service.ts:15](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L15)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/models/service.ts:16](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L16)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/models/service.ts:17](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/service.ts#L17)

## Methods

### getText()

> **getText**(`prompt`, `config`?): `Promise`\<`string`\>

Defined in: [packages/core/src/models/base.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L19)

Get a text completion from the model

#### Parameters

##### prompt

`string`

##### config?

[`ModelRequestConfig`](ModelRequestConfig.md)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ModelInterface`](ModelInterface.md).[`getText`](ModelInterface.md#gettext)

***

### init()?

> `optional` **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:24](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L24)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ModelInterface`](ModelInterface.md).[`init`](ModelInterface.md#init)

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:26](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L26)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ModelInterface`](ModelInterface.md).[`checkHealth`](ModelInterface.md#checkhealth)
