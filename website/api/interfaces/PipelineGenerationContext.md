[@maiar-ai/core](../index.md) / PipelineGenerationContext

# Interface: PipelineGenerationContext

Defined in: [packages/core/src/runtime/types.ts:73](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L73)

Context passed to the runtime for pipeline generation

## Properties

### contextChain

> **contextChain**: [`BaseContextItem`](BaseContextItem.md)[]

Defined in: [packages/core/src/runtime/types.ts:74](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L74)

***

### availablePlugins

> **availablePlugins**: `AvailablePlugin`[]

Defined in: [packages/core/src/runtime/types.ts:75](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L75)

***

### currentContext

> **currentContext**: `object`

Defined in: [packages/core/src/runtime/types.ts:76](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L76)

#### platform

> **platform**: `string`

#### message

> **message**: `string`

#### conversationHistory

> **conversationHistory**: `ConversationMessage`[]
