[@maiar-ai/core](../index.md) / PipelineGenerationContext

# Interface: PipelineGenerationContext

Defined in: [packages/core/src/runtime/types.ts:68](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L68)

Context passed to the LLM for pipeline generation

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/runtime/types.ts:69](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L69)

***

### availablePlugins

> **availablePlugins**: `AvailablePlugin`[]

Defined in: [packages/core/src/runtime/types.ts:70](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L70)

***

### currentContext

> **currentContext**: `object`

Defined in: [packages/core/src/runtime/types.ts:71](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L71)

#### platform

> **platform**: `string`

#### message

> **message**: `string`

#### conversationHistory

> **conversationHistory**: `ConversationMessage`[]
