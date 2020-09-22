import dayjs from "dayjs";

import { DateTimeService } from "./date-time-service";

const DATE_TIME_INSTANCE = dayjs("2016-05-25T09:24:15");
const ANOTHER_DATE_TIME_INSTANCE_ = dayjs("2017-08-22T15:23:00");

export const DayJsService: DateTimeService = class {
  static parseISO() {
    dayjs("2016-05-25T09:24:15");
  }

  static formatInstance() {
    DATE_TIME_INSTANCE.format("YYYY-MM-DD");
  }

  static tranformInstance() {
    DATE_TIME_INSTANCE.add(2, "year");
  }

  static diffBetweenInstances() {
    DATE_TIME_INSTANCE.diff(ANOTHER_DATE_TIME_INSTANCE_, "month");
  }

  static compareInstances() {
    return DATE_TIME_INSTANCE.isBefore(ANOTHER_DATE_TIME_INSTANCE_, "day");
  }
};
