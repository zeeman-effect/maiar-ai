[@maiar-ai/core](../index.md) / ModelInterface

# Interface: ModelInterface

Defined in: [packages/core/src/models/base.ts:15](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L15)

Base interface that all LLM models must implement

## Extended by

- [`ModelProvider`](ModelProvider.md)

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

***

### init()?

> `optional` **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:24](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L24)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>
