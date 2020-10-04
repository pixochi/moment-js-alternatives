import { DateTime, Settings } from "luxon";

import { DateTimeService } from "./date-time-service";
import * as Constants from "./constants";

const DATE_TIME_INSTANCE = DateTime.fromISO(Constants.DATE_TIME_ISO);
const ANOTHER_DATE_TIME_INSTANCE_ = DateTime.fromISO(
  Constants.ANOTHER_DATE_TIME_ISO
);

export const LuxonService: DateTimeService = class {
  static parseISO() {
    DateTime.fromISO(Constants.DATE_TIME_ISO);
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

  static timezone() {
    DateTime.fromISO(Constants.DATE_TIME_ISO).setZone(Constants.TIMEZONE);
  }

  static setGlobalLocale() {
    Settings.defaultLocale = "en-nz";
  }
};
