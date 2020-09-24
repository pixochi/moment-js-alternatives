import { DateTimeService } from "../date-time-services/date-time-service";
import { getMedian } from "./helpers";

const MEASURES_COUNT = 5;
const OPERATION_COUNT = 100_000;

/*
|---------------------------------------------------------------------------------
| Takes a certain number of measurements for an operation
| and calculates the median value.
|---------------------------------------------------------------------------------
*/
const medianOfOperation = (operation: VoidFunction) => {
  const measurements = [];

  // Repeats the performance measurement
  for (let measureIndex = 0; measureIndex < MEASURES_COUNT; measureIndex++) {
    const startTime = window.performance.now();

    // Repeats the operation
    for (
      let operationIndex = 0;
      operationIndex < OPERATION_COUNT;
      operationIndex++
    ) {
      operation();
    }

    // Calculates the time taken by a single measurement
    const endTime = window.performance.now();
    const timeElapsed = endTime - startTime;
    measurements.push(timeElapsed);
  }

  // Calculates the median of all the measurements
  const median = getMedian(measurements);

  // Rounds the median to 2 decimal places
  const formattedMedian = Math.round(median * 1e2) / 1e2;

  return formattedMedian;
};

/*
|---------------------------------------------------------------------------------
| Calculates stats for the most common operations of DateTimeService.
|---------------------------------------------------------------------------------
*/

type Stats = { [K in keyof DateTimeService]: number };

export const dateTimeServiceStats = (
  dateTimeService: DateTimeService
): Stats => {
  return {
    parseISO: medianOfOperation(dateTimeService.parseISO),
    formatInstance: medianOfOperation(dateTimeService.formatInstance),
    tranformInstance: medianOfOperation(dateTimeService.tranformInstance),
    diffBetweenInstances: medianOfOperation(
      dateTimeService.diffBetweenInstances
    ),
    compareInstances: medianOfOperation(dateTimeService.compareInstances),
  };
};
