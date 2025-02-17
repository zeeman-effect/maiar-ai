[@maiar-ai/core](../index.md) / LoggingModelDecorator

# Class: LoggingModelDecorator

Defined in: [packages/core/src/models/base.ts:36](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L36)

Decorator that adds logging to any ModelInterface implementation.
Logs all prompts, responses, and errors to the model interactions log file.

This follows the decorator pattern to add logging behavior to any model
without requiring the model implementations to handle logging themselves.

## Implements

- [`ModelInterface`](../interfaces/ModelInterface.md)

## Constructors

### new LoggingModelDecorator()

> **new LoggingModelDecorator**(`model`, `modelId`): [`LoggingModelDecorator`](LoggingModelDecorator.md)

Defined in: [packages/core/src/models/base.ts:37](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L37)

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

Defined in: [packages/core/src/models/base.ts:42](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L42)

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

Defined in: [packages/core/src/models/base.ts:81](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L81)

Initialize the model with any necessary setup

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ModelInterface`](../interfaces/ModelInterface.md).[`init`](../interfaces/ModelInterface.md#init)

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/models/base.ts:87](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/models/base.ts#L87)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ModelInterface`](../interfaces/ModelInterface.md).[`checkHealth`](../interfaces/ModelInterface.md#checkhealth)
