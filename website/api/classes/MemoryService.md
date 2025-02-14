[@maiar-ai/core](../index.md) / MemoryService

# Class: MemoryService

Defined in: [packages/core/src/memory/service.ts:16](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L16)

Service for managing memory operations

## Constructors

### new MemoryService()

> **new MemoryService**(`provider`): [`MemoryService`](MemoryService.md)

Defined in: [packages/core/src/memory/service.ts:19](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L19)

#### Parameters

##### provider

[`MemoryProvider`](../interfaces/MemoryProvider.md)

#### Returns

[`MemoryService`](MemoryService.md)

## Methods

### storeUserInteraction()

> **storeUserInteraction**(`user`, `platform`, `message`, `timestamp`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/service.ts:40](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L40)

Store a user interaction in memory

#### Parameters

##### user

`string`

##### platform

`string`

##### message

`string`

##### timestamp

`number`

#### Returns

`Promise`\<`void`\>

***

### storeAssistantInteraction()

> **storeAssistantInteraction**(`user`, `platform`, `response`, `contextChain`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/service.ts:97](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L97)

Store an assistant interaction and its context in memory

#### Parameters

##### user

`string`

##### platform

`string`

##### response

`string`

##### contextChain

[`BaseContextItem`](../interfaces/BaseContextItem.md)[]

#### Returns

`Promise`\<`void`\>

***

### storeMessage()

> **storeMessage**(`message`, `conversationId`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/service.ts:185](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L185)

#### Parameters

##### message

[`Message`](../interfaces/Message.md)

##### conversationId

`string`

#### Returns

`Promise`\<`void`\>

***

### storeContext()

> **storeContext**(`context`, `conversationId`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/service.ts:194](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L194)

#### Parameters

##### context

[`Context`](../interfaces/Context.md)

##### conversationId

`string`

#### Returns

`Promise`\<`void`\>

***

### getMessages()

> **getMessages**(`options`): `Promise`\<[`Message`](../interfaces/Message.md)[]\>

Defined in: [packages/core/src/memory/service.ts:203](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L203)

#### Parameters

##### options

[`MemoryQueryOptions`](../interfaces/MemoryQueryOptions.md)

#### Returns

`Promise`\<[`Message`](../interfaces/Message.md)[]\>

***

### getContexts()

> **getContexts**(`conversationId`): `Promise`\<[`Context`](../interfaces/Context.md)[]\>

Defined in: [packages/core/src/memory/service.ts:211](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L211)

#### Parameters

##### conversationId

`string`

#### Returns

`Promise`\<[`Context`](../interfaces/Context.md)[]\>

***

### getConversation()

> **getConversation**(`conversationId`): `Promise`\<[`Conversation`](../interfaces/Conversation.md)\>

Defined in: [packages/core/src/memory/service.ts:219](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L219)

#### Parameters

##### conversationId

`string`

#### Returns

`Promise`\<[`Conversation`](../interfaces/Conversation.md)\>

***

### createConversation()

> **createConversation**(`options`?): `Promise`\<`string`\>

Defined in: [packages/core/src/memory/service.ts:227](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L227)

#### Parameters

##### options?

###### id

`string`

###### metadata

`Record`\<`string`, `any`\>

eslint-disable-next-line @typescript-eslint/no-explicit-any

#### Returns

`Promise`\<`string`\>

***

### deleteConversation()

> **deleteConversation**(`conversationId`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/service.ts:239](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L239)

#### Parameters

##### conversationId

`string`

#### Returns

`Promise`\<`void`\>

***

### getOrCreateConversation()

> **getOrCreateConversation**(`user`, `platform`): `Promise`\<`string`\>

Defined in: [packages/core/src/memory/service.ts:246](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L246)

Get or create a conversation for a user on a platform

#### Parameters

##### user

`string`

##### platform

`string`

#### Returns

`Promise`\<`string`\>

***

### getRecentConversationHistory()

> **getRecentConversationHistory**(`user`, `platform`, `limit`): `Promise`\<`object`[]\>

Defined in: [packages/core/src/memory/service.ts:264](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/memory/service.ts#L264)

Get recent conversation history for a user/platform

#### Parameters

##### user

`string`

##### platform

`string`

##### limit

`number` = `5`

#### Returns

`Promise`\<`object`[]\>
