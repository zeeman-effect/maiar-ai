[@maiar-ai/core](../index.md) / HistoryContextItem

# Interface: HistoryContextItem

Defined in: [packages/core/src/types/agent.ts:25](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L25)

History context item

## Extends

- [`BaseContextItem`](BaseContextItem.md)

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/types/agent.ts:3](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L3)

#### Inherited from

[`BaseContextItem`](BaseContextItem.md).[`id`](BaseContextItem.md#id)

***

### pluginId

> **pluginId**: `string`

Defined in: [packages/core/src/types/agent.ts:4](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L4)

#### Inherited from

[`BaseContextItem`](BaseContextItem.md).[`pluginId`](BaseContextItem.md#pluginid)

***

### action

> **action**: `string`

Defined in: [packages/core/src/types/agent.ts:5](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L5)

#### Inherited from

[`BaseContextItem`](BaseContextItem.md).[`action`](BaseContextItem.md#action)

***

### content

> **content**: `string`

Defined in: [packages/core/src/types/agent.ts:7](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L7)

#### Inherited from

[`BaseContextItem`](BaseContextItem.md).[`content`](BaseContextItem.md#content)

***

### timestamp

> **timestamp**: `number`

Defined in: [packages/core/src/types/agent.ts:8](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L8)

#### Inherited from

[`BaseContextItem`](BaseContextItem.md).[`timestamp`](BaseContextItem.md#timestamp)

***

### helpfulInstruction?

> `optional` **helpfulInstruction**: `string`

Defined in: [packages/core/src/types/agent.ts:9](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L9)

#### Inherited from

[`BaseContextItem`](BaseContextItem.md).[`helpfulInstruction`](BaseContextItem.md#helpfulinstruction)

***

### type

> **type**: `"history"`

Defined in: [packages/core/src/types/agent.ts:26](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L26)

#### Overrides

[`BaseContextItem`](BaseContextItem.md).[`type`](BaseContextItem.md#type)

***

### messages

> **messages**: `object`[]

Defined in: [packages/core/src/types/agent.ts:27](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L27)

#### role

> **role**: `string`

#### content

> **content**: `string`

#### timestamp

> **timestamp**: `number`
