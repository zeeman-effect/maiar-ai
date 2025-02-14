[@maiar-ai/core](../index.md) / LoggingModelDecorator

# Class: LoggingModelDecorator

Defined in: [packages/core/src/models/base.ts:34](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L34)

Decorator that adds logging to any ModelInterface implementation.
Logs all prompts, responses, and errors to the model interactions log file.

This follows the decorator pattern to add logging behavior to any model
without requiring the model implementations to handle logging themselves.

## Implements

- [`ModelInterface`](../interfaces/ModelInterface.md)

## Constructors

### new LoggingModelDecorator()

> **new LoggingModelDecorator**(`model`, `modelId`): [`LoggingModelDecorator`](LoggingModelDecorator.md)

Defined in: [packages/core/src/models/base.ts:35](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L35)

#### Parameters

##### model

[`ModelInterface`](../interfaces/ModelInterface.md)

##### modelId

`string`

#### Returns

[`LoggingModelDecorator`](LoggingModelDecorator.md)

## Methods

### getText()

> **getText**(`prompt`, `config`?): `Promise`\<`string`\>

Defined in: [packages/core/src/models/base.ts:40](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L40)

Get a text completion from the model

#### Parameters

##### prompt

`string`

##### config?

[`ModelRequestConfig`](../interfaces/ModelRequestConfig.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`ModelInterface`](../interfaces/ModelInterface.md).[`getText`](../interfaces/ModelInterface.md#gettext)

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:79](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L79)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ModelInterface`](../interfaces/ModelInterface.md).[`init`](../interfaces/ModelInterface.md#init)
