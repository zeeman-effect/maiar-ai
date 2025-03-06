[@maiar-ai/core](../index.md) / MonitorService

# Class: MonitorService

Defined in: [packages/core/src/monitor/service.ts:17](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L17)

Service for managing monitoring operations.

The MonitorService acts as a facade over multiple monitor implementations,
allowing the runtime to easily communicate with all registered monitors.
It handles the distribution of state updates and event logging to all
registered monitor providers.

This service is designed to:
- Support zero, one, or multiple monitor providers
- Handle failures in individual monitors gracefully
- Provide consistent logging across all monitoring activities

## Constructors

### new MonitorService()

> **new MonitorService**(`providers`?): [`MonitorService`](MonitorService.md)

Defined in: [packages/core/src/monitor/service.ts:26](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L26)

Creates a new MonitorService with the specified providers.

#### Parameters

##### providers?

One or more monitor providers to initialize the service with

[`MonitorProvider`](../interfaces/MonitorProvider.md) | [`MonitorProvider`](../interfaces/MonitorProvider.md)[]

#### Returns

[`MonitorService`](MonitorService.md)

## Methods

### publishEvent()

> **publishEvent**(`event`): `Promise`\<`void`\>

Defined in: [packages/core/src/monitor/service.ts:55](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L55)

Publishes an event to all registered monitor providers.

#### Parameters

##### event

Event details to publish

###### type

`string`

###### message

`string`

###### timestamp

`number`

###### metadata

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`void`\>

Promise that resolves when all providers have published the event (or failed)

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/monitor/service.ts:92](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/service.ts#L92)

Checks the health of all registered monitor providers.

#### Returns

`Promise`\<`void`\>

Promise that resolves when all health checks complete (or fail)
