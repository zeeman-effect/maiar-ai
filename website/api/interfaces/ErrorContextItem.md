[@maiar-ai/core](../index.md) / ErrorContextItem

# Interface: ErrorContextItem

Defined in: [packages/core/src/runtime/types.ts:86](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L86)

Represents an error that occurred during pipeline execution

## Extends

- [`BaseContextItem`](BaseContextItem.md)

## Properties

### type

> **type**: `"error"`

Defined in: [packages/core/src/runtime/types.ts:87](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L87)

#### Overrides

[`BaseContextItem`](BaseContextItem.md).[`type`](BaseContextItem.md#type)

***

### error

> **error**: `string`

Defined in: [packages/core/src/runtime/types.ts:88](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L88)

***

### failedStep?

> `optional` **failedStep**: `object`

Defined in: [packages/core/src/runtime/types.ts:89](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L89)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`

***

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
