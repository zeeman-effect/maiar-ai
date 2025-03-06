[@maiar-ai/core](../index.md) / PipelineEvaluationContext

# Interface: PipelineEvaluationContext

Defined in: [packages/core/src/runtime/types.ts:93](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L93)

Context passed to the LLM for pipeline modification evaluation

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/runtime/types.ts:94](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L94)

***

### currentStep

> **currentStep**: `object`

Defined in: [packages/core/src/runtime/types.ts:95](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L95)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`

***

### availablePlugins

> **availablePlugins**: `AvailablePlugin`[]

Defined in: [packages/core/src/runtime/types.ts:96](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L96)

***

### pipeline

> **pipeline**: `object`[]

Defined in: [packages/core/src/runtime/types.ts:97](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L97)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`
