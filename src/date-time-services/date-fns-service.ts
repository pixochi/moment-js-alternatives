import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import add from "date-fns/add";
import differenceInMonths from "date-fns/differenceInMonths";
import differenceInDays from "date-fns/differenceInDays";
import { zonedTimeToUtc } from "date-fns-tz";

import { DateTimeService } from "./date-time-service";
import * as Constants from "./constants";

const DATE_TIME_INSTANCE = parseISO(Constants.DATE_TIME_ISO);
const ANOTHER_DATE_TIME_INSTANCE_ = parseISO(Constants.ANOTHER_DATE_TIME_ISO);

export const DateFnsService: DateTimeService = class {
  static parseISO() {
    parseISO(Constants.DATE_TIME_ISO);
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
    return (
      differenceInDays(DATE_TIME_INSTANCE, ANOTHER_DATE_TIME_INSTANCE_) < 0
    );
  }

  static timezone() {
    zonedTimeToUtc(Constants.DATE_TIME_ISO, Constants.TIMEZONE);
  }
};
