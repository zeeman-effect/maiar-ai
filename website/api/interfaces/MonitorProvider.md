[@maiar-ai/core](../index.md) / MonitorProvider

# Interface: MonitorProvider

Defined in: [packages/core/src/monitor/types.ts:35](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L35)

Interface that all monitor providers must implement.

Monitors are responsible for observing and recording the agent's state
and activities. They can be used for debugging, logging, visualization,
or integration with external monitoring systems.

The runtime can use multiple monitors simultaneously, allowing different
visualization or tracking mechanisms to operate in parallel.

## Properties

### id

> `readonly` **id**: `string`

Defined in: [packages/core/src/monitor/types.ts:37](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L37)

Unique identifier for this monitor provider

***

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/monitor/types.ts:40](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L40)

Human-readable name of this monitor

***

### description

> `readonly` **description**: `string`

Defined in: [packages/core/src/monitor/types.ts:43](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L43)

Description of what this monitor does

## Methods

### init()?

> `optional` **init**(): `Promise`\<`void`\>

Defined in: [packages/core/src/monitor/types.ts:49](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L49)

Initialize the monitor with any necessary setup.
Called when the runtime starts.

#### Returns

`Promise`\<`void`\>

***

### publishEvent()

> **publishEvent**(`event`): `Promise`\<`void`\>

Defined in: [packages/core/src/monitor/types.ts:57](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L57)

Publish a specific event in the monitoring system.
Used to track important actions or state changes.

#### Parameters

##### event

Event details including type, message, and metadata

###### type

`string`

Category or type of event

###### message

`string`

Human-readable message describing the event

###### timestamp

`number`

When the event occurred

###### metadata

`Record`\<`string`, `unknown`\>

Optional additional data about the event

#### Returns

`Promise`\<`void`\>

***

### checkHealth()

> **checkHealth**(): `Promise`\<`void`\>

Defined in: [packages/core/src/monitor/types.ts:76](https://github.com/UraniumCorporation/maiar-ai/blob/main/packages/core/src/monitor/types.ts#L76)

Check the health of the monitoring system.
Used to verify the monitor is operational.
Should resolve successfully if healthy, or throw an error if not.

#### Returns

`Promise`\<`void`\>
