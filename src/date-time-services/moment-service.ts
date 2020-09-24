import moment from "moment-timezone";

import { DateTimeService } from "./date-time-service";
import * as Constants from "./constants";

const DATE_TIME_INSTANCE = moment(Constants.DATE_TIME_ISO);

const ANOTHER_DATE_TIME_INSTANCE_ = moment(Constants.ANOTHER_DATE_TIME_ISO);

export const MomentService: DateTimeService = class {
  static parseISO() {
    moment(Constants.DATE_TIME_ISO);
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

  static timezone() {
    moment(Constants.DATE_TIME_ISO).tz(Constants.TIMEZONE);
  }
};
