[@maiar-ai/core](../index.md) / PipelineModificationSchema

# Variable: PipelineModificationSchema

> `const` **PipelineModificationSchema**: `ZodObject`\<\{ `shouldModify`: `ZodBoolean`; `explanation`: `ZodString`; `modifiedSteps`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `pluginId`: `ZodString`; `action`: `ZodString`; \}, `"strip"`, \{ `pluginId`: `string`; `action`: `string`; \}, \{ `pluginId`: `string`; `action`: `string`; \}\>\>\>; \}, `"strip"`, \{ `shouldModify`: `boolean`; `explanation`: `string`; `modifiedSteps`: `object`[]; \}, \{ `shouldModify`: `boolean`; `explanation`: `string`; `modifiedSteps`: `object`[]; \}\>

Defined in: [packages/core/src/runtime/types.ts:103](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/types.ts#L103)

Schema for pipeline modification results from LLM
