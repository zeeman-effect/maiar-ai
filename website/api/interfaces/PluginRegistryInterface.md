[@maiar-ai/core](../index.md) / PluginRegistryInterface

# Interface: PluginRegistryInterface

Defined in: [packages/core/src/registry/types.ts:3](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/types.ts#L3)

## Methods

### register()

> **register**(`plugin`): `void`

Defined in: [packages/core/src/registry/types.ts:4](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/types.ts#L4)

#### Parameters

##### plugin

[`Plugin`](Plugin.md)

#### Returns

`void`

***

### getPlugin()

> **getPlugin**(`id`): `undefined` \| [`Plugin`](Plugin.md)

Defined in: [packages/core/src/registry/types.ts:5](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/types.ts#L5)

#### Parameters

##### id

`string`

#### Returns

`undefined` \| [`Plugin`](Plugin.md)

***

### getAllPlugins()

> **getAllPlugins**(): [`Plugin`](Plugin.md)[]

Defined in: [packages/core/src/registry/types.ts:6](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/types.ts#L6)

#### Returns

[`Plugin`](Plugin.md)[]
