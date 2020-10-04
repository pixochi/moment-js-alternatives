import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone"; // dependent on utc plugin
import "dayjs/locale/en-nz"; // load on demand

import { DateTimeService } from "./date-time-service";
import * as Constants from "./constants";

// Registers dayJs plugins
dayjs.extend(timezone);
dayjs.extend(utc);

const DATE_TIME_INSTANCE = dayjs(Constants.DATE_TIME_ISO);
const ANOTHER_DATE_TIME_INSTANCE = dayjs(Constants.ANOTHER_DATE_TIME_ISO);

export const DayJsService: DateTimeService = class {
  static parseISO() {
    dayjs(Constants.DATE_TIME_ISO);
  }

  static formatInstance() {
    DATE_TIME_INSTANCE.format("YYYY-MM-DD");
  }

  static tranformInstance() {
    DATE_TIME_INSTANCE.add(2, "year");
  }

  static diffBetweenInstances() {
    DATE_TIME_INSTANCE.diff(ANOTHER_DATE_TIME_INSTANCE, "month");
  }

  static compareInstances() {
    return DATE_TIME_INSTANCE.isBefore(ANOTHER_DATE_TIME_INSTANCE, "day");
  }

  static timezone() {
    dayjs(Constants.DATE_TIME_ISO).tz(Constants.TIMEZONE);
  }

  static setGlobalLocale() {
    dayjs.locale("en-nz");
  }
};
