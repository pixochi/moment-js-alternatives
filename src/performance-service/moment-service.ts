import moment from "moment-timezone";

import { DateTimeService } from "./date-time-service";

const DATE_TIME_INSTANCE = moment("2016-05-25T09:24:15");
const ANOTHER_DATE_TIME_INSTANCE_ = moment("2017-08-22T15:23:00");

export const MomentService: DateTimeService = class {
  static parseISO() {
    moment("2016-05-25T09:24:15");
  }

  static formatInstance() {
    DATE_TIME_INSTANCE.format("YYYY-MM-DD");
  }

  static tranformInstance() {
    DATE_TIME_INSTANCE.add(2, "years");
  }

  static diffBetweenInstances() {
    DATE_TIME_INSTANCE.diff(ANOTHER_DATE_TIME_INSTANCE_, "months");
  }

  static compareInstances() {
    return DATE_TIME_INSTANCE.isBefore(ANOTHER_DATE_TIME_INSTANCE_, "days");
  }
};
