// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type ClickThroughRateEvent = {
  /**
   * The click-through rate.
   */
  rate: number;

  /**
   * The number of click event.
   */
  clickCount: number;

  /**
   * The number of tracked search click.
   */
  trackedSearchCount: number;

  /**
   * Date of the event.
   */
  date: string;
};
