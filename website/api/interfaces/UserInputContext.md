[@maiar-ai/core](../index.md) / UserInputContext

# Interface: UserInputContext

Defined in: [packages/core/src/types/agent.ts:13](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L13)

Initial user input context

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

> **type**: `"user_input"`

Defined in: [packages/core/src/types/agent.ts:14](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L14)

#### Overrides

[`BaseContextItem`](BaseContextItem.md).[`type`](BaseContextItem.md#type)

***

### user

> **user**: `string`

Defined in: [packages/core/src/types/agent.ts:15](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L15)

***

### rawMessage

> **rawMessage**: `string`

Defined in: [packages/core/src/types/agent.ts:16](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L16)

***

### messageHistory?

> `optional` **messageHistory**: `object`[]

Defined in: [packages/core/src/types/agent.ts:17](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/types/agent.ts#L17)

#### role

> **role**: `string`

#### content

> **content**: `string`

#### timestamp

> **timestamp**: `number`
