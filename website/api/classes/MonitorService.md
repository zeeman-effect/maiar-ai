[@maiar-ai/core](../index.md) / MonitorService

# Class: MonitorService

Defined in: [packages/core/src/monitor/service.ts:12](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L12)

Global monitor service that can be accessed by any component

## Methods

### getInstance()

> `static` **getInstance**(): [`MonitorService`](MonitorService.md)

Defined in: [packages/core/src/monitor/service.ts:21](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L21)

Get the singleton instance of the monitor service

#### Returns

[`MonitorService`](MonitorService.md)

***

### init()

> `static` **init**(`providers`): `void`

Defined in: [packages/core/src/monitor/service.ts:32](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L32)

Initialize the monitor service with providers
This should be called during runtime creation

#### Parameters

##### providers

[`MonitorProvider`](../interfaces/MonitorProvider.md)[]

#### Returns

`void`

***

### publishEvent()

> `static` **publishEvent**(`event`): `void`

Defined in: [packages/core/src/monitor/service.ts:40](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L40)

Publish an event to all registered monitors

#### Parameters

##### event

[`MonitorEvent`](../interfaces/MonitorEvent.md)

#### Returns

`void`

***

### checkHealth()

> `static` **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/monitor/service.ts:55](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L55)

Checks the health of all registered monitor providers.

#### Returns

`Promise`\<`void`\>
