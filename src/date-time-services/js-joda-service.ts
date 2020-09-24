import {
  ChronoUnit,
  DateTimeFormatter,
  LocalDateTime,
  Period,
  ZoneId,
} from "@js-joda/core";
import "@js-joda/timezone"; // Automatically adds timezone support

import { DateTimeService } from "./date-time-service";
import * as Constants from "./constants";

const DATE_TIME_INSTANCE = LocalDateTime.parse(Constants.DATE_TIME_ISO);
const ANOTHER_DATE_TIME_INSTANCE = LocalDateTime.parse(
  Constants.ANOTHER_DATE_TIME_ISO
);

export const JsJodaService: DateTimeService = class {
  static parseISO() {
    LocalDateTime.parse(Constants.DATE_TIME_ISO);
  }

  static formatInstance() {
    DATE_TIME_INSTANCE.format(DateTimeFormatter.ofPattern("yyyy-M-d"));
  }

  static tranformInstance() {
    DATE_TIME_INSTANCE.plusYears(2);
  }

  static diffBetweenInstances() {
    DATE_TIME_INSTANCE.until(ANOTHER_DATE_TIME_INSTANCE, ChronoUnit.MONTHS);
  }

  static compareInstances() {
    // `isBefore` in days
    return (
      Math.abs(
        Period.between(
          DATE_TIME_INSTANCE.toLocalDate(),
          ANOTHER_DATE_TIME_INSTANCE.toLocalDate()
        ).days()
      ) < 0
    );
  }

  static timezone() {
    LocalDateTime.parse(Constants.DATE_TIME_ISO).atZone(
      ZoneId.of(Constants.TIMEZONE)
    );
  }
};
