[@maiar-ai/core](../index.md) / PipelineEvaluationContext

# Interface: PipelineEvaluationContext

Defined in: [packages/core/src/runtime/types.ts:90](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L90)

Context passed to the LLM for pipeline modification evaluation

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/runtime/types.ts:91](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L91)

***

### currentStep

> **currentStep**: `object`

Defined in: [packages/core/src/runtime/types.ts:92](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L92)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`

***

### availablePlugins

> **availablePlugins**: `AvailablePlugin`[]

Defined in: [packages/core/src/runtime/types.ts:93](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L93)

***

### pipeline

> **pipeline**: `object`[]

Defined in: [packages/core/src/runtime/types.ts:94](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L94)

#### pluginId

> **pluginId**: `string`

#### action

> **action**: `string`
