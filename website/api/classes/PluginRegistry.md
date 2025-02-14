[@maiar-ai/core](../index.md) / PluginRegistry

# Class: PluginRegistry

Defined in: [packages/core/src/registry/index.ts:10](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/index.ts#L10)

Registry for managing plugins

## Implements

- [`PluginRegistryInterface`](../interfaces/PluginRegistryInterface.md)

## Constructors

### new PluginRegistry()

> **new PluginRegistry**(): [`PluginRegistry`](PluginRegistry.md)

#### Returns

[`PluginRegistry`](PluginRegistry.md)

## Methods

### register()

> **register**(`plugin`): `void`

Defined in: [packages/core/src/registry/index.ts:45](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/index.ts#L45)

Register a new plugin

#### Parameters

##### plugin

[`Plugin`](../interfaces/Plugin.md)

#### Returns

`void`

#### Implementation of

[`PluginRegistryInterface`](../interfaces/PluginRegistryInterface.md).[`register`](../interfaces/PluginRegistryInterface.md#register)

***

### getPlugin()

> **getPlugin**(`id`): `undefined` \| [`Plugin`](../interfaces/Plugin.md)

Defined in: [packages/core/src/registry/index.ts:75](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/index.ts#L75)

Get a plugin by id

#### Parameters

##### id

`string`

#### Returns

`undefined` \| [`Plugin`](../interfaces/Plugin.md)

#### Implementation of

[`PluginRegistryInterface`](../interfaces/PluginRegistryInterface.md).[`getPlugin`](../interfaces/PluginRegistryInterface.md#getplugin)

***

### getAllPlugins()

> **getAllPlugins**(): [`Plugin`](../interfaces/Plugin.md)[]

Defined in: [packages/core/src/registry/index.ts:90](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/registry/index.ts#L90)

Get all registered plugins

#### Returns

[`Plugin`](../interfaces/Plugin.md)[]

#### Implementation of

[`PluginRegistryInterface`](../interfaces/PluginRegistryInterface.md).[`getAllPlugins`](../interfaces/PluginRegistryInterface.md#getallplugins)
