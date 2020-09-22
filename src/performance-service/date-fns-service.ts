import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import add from "date-fns/add";
import differenceInMonths from "date-fns/differenceInMonths";
import isBefore from "date-fns/isBefore";

import { DateTimeService } from "./date-time-service";

const DATE_TIME_INSTANCE = parseISO("2016-05-25T09:24:15");
const ANOTHER_DATE_TIME_INSTANCE_ = parseISO("2017-08-22T15:23:00");

export const DateFnsService: DateTimeService = class {
  static parseISO() {
    parseISO("2016-05-25T09:24:15");
  }

  static formatInstance() {
    format(DATE_TIME_INSTANCE, "R-MM-dd");
  }

  static tranformInstance() {
    add(DATE_TIME_INSTANCE, { years: 2 });
  }

  static diffBetweenInstances() {
    differenceInMonths(DATE_TIME_INSTANCE, ANOTHER_DATE_TIME_INSTANCE_);
  }

  static compareInstances() {
    return isBefore(DATE_TIME_INSTANCE, ANOTHER_DATE_TIME_INSTANCE_);
  }
};
