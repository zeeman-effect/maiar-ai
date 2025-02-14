[@maiar-ai/core](../index.md) / PipelineGenerationContext

# Interface: PipelineGenerationContext

Defined in: [packages/core/src/runtime/types.ts:65](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L65)

Context passed to the LLM for pipeline generation

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/runtime/types.ts:66](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L66)

***

### availablePlugins

> **availablePlugins**: `AvailablePlugin`[]

Defined in: [packages/core/src/runtime/types.ts:67](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L67)

***

### currentContext

> **currentContext**: `object`

Defined in: [packages/core/src/runtime/types.ts:68](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L68)

#### platform

> **platform**: `string`

#### message

> **message**: `string`

#### conversationHistory

> **conversationHistory**: `ConversationMessage`[]
