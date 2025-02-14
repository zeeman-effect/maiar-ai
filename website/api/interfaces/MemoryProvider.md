[@maiar-ai/core](../index.md) / MemoryProvider

# Interface: MemoryProvider

Defined in: [packages/core/src/memory/types.ts:36](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L36)

Interface that all memory providers must implement

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/memory/types.ts:37](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L37)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/memory/types.ts:38](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L38)

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/memory/types.ts:39](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L39)

## Methods

### storeMessage()

> **storeMessage**(`message`, `conversationId`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/types.ts:42](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L42)

Store a new message

#### Parameters

##### message

[`Message`](Message.md)

##### conversationId

`string`

#### Returns

`Promise`\<`void`\>

***

### storeContext()

> **storeContext**(`context`, `conversationId`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/types.ts:45](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L45)

Store context used in generating a response

#### Parameters

##### context

[`Context`](Context.md)

##### conversationId

`string`

#### Returns

`Promise`\<`void`\>

***

### getMessages()

> **getMessages**(`options`): `Promise`\<[`Message`](Message.md)[]\>

Defined in: [packages/core/src/memory/types.ts:48](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L48)

Get recent messages

#### Parameters

##### options

[`MemoryQueryOptions`](MemoryQueryOptions.md)

#### Returns

`Promise`\<[`Message`](Message.md)[]\>

***

### getContexts()

> **getContexts**(`conversationId`): `Promise`\<[`Context`](Context.md)[]\>

Defined in: [packages/core/src/memory/types.ts:51](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L51)

Get contexts for a conversation

#### Parameters

##### conversationId

`string`

#### Returns

`Promise`\<[`Context`](Context.md)[]\>

***

### getConversation()

> **getConversation**(`conversationId`): `Promise`\<[`Conversation`](Conversation.md)\>

Defined in: [packages/core/src/memory/types.ts:54](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L54)

Get full conversation history

#### Parameters

##### conversationId

`string`

#### Returns

`Promise`\<[`Conversation`](Conversation.md)\>

***

### createConversation()

> **createConversation**(`options`?): `Promise`\<`string`\>

Defined in: [packages/core/src/memory/types.ts:57](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L57)

Create a new conversation

#### Parameters

##### options?

###### id

`string`

###### metadata

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`string`\>

***

### deleteConversation()

> **deleteConversation**(`conversationId`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/types.ts:63](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/types.ts#L63)

Delete a conversation and all its messages/contexts

#### Parameters

##### conversationId

`string`

#### Returns

`Promise`\<`void`\>
