[@maiar-ai/core](../index.md) / PipelineModificationContext

# Interface: PipelineModificationContext

Defined in: [packages/core/src/runtime/types.ts:97](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L97)

Context passed to the runtime for pipeline modification evaluation

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/runtime/types.ts:98](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L98)

***

### currentStep

> **currentStep**: `object`

Defined in: [packages/core/src/runtime/types.ts:99](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L99)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`

***

### availablePlugins

> **availablePlugins**: `AvailablePlugin`[]

Defined in: [packages/core/src/runtime/types.ts:100](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L100)

***

### pipeline

> **pipeline**: `object`[]

Defined in: [packages/core/src/runtime/types.ts:101](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L101)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`
