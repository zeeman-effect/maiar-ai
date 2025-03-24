[@maiar-ai/core](../index.md) / getObject

# Function: getObject()

> **getObject**\<`T`\>(`service`, `schema`, `prompt`, `config`?): `Promise`\<`z.infer`\<`T`\>\>

Defined in: [packages/core/src/runtime/index.ts:125](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/runtime/index.ts#L125)

## Type Parameters

• **T** *extends* `ZodType`

## Parameters

### service

[`ModelService`](../classes/ModelService.md)

### schema

`T`

### prompt

`string`

### config?

[`GetObjectConfig`](../interfaces/GetObjectConfig.md)

## Returns

`Promise`\<`z.infer`\<`T`\>\>
