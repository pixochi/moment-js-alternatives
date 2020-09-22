import { DateTime } from "luxon";

import { DateTimeService } from "./date-time-service";

const DATE_TIME_INSTANCE = DateTime.fromISO("2016-05-25T09:24:15");
const ANOTHER_DATE_TIME_INSTANCE_ = DateTime.fromISO("2017-08-22T15:23:00");

export const LuxonService: DateTimeService = class {
  static parseISO() {
    DateTime.fromISO("2016-05-25T09:24:15");
  }

  static formatInstance() {
    DATE_TIME_INSTANCE.toFormat("yyyy-MM-dd");
  }

  static tranformInstance() {
    DATE_TIME_INSTANCE.plus({ years: 2 });
  }

  static diffBetweenInstances() {
    DATE_TIME_INSTANCE.diff(ANOTHER_DATE_TIME_INSTANCE_, "months").toObject();
  }

  static compareInstances() {
    return (
      DATE_TIME_INSTANCE.startOf("day") <
      ANOTHER_DATE_TIME_INSTANCE_.startOf("day")
    );
  }
};
