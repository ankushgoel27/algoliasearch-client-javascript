// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

/**
 * The type of the task reflect how it can be used:   - onDemand: a task that runs manually   - schedule: a task that runs regularly, following a given cron expression   - subscription: a task that runs after a subscription event is received from an integration (e.g. Webhook).
 */
export type TriggerType = 'onDemand' | 'schedule' | 'subscription';
