import {
  ChronoUnit,
  DateTimeFormatter,
  LocalDateTime,
  Period,
} from "@js-joda/core";

import { DateTimeService } from "./date-time-service";

const DATE_TIME_INSTANCE = LocalDateTime.parse("2016-05-25T09:24:15");
const ANOTHER_DATE_TIME_INSTANCE = LocalDateTime.parse("2017-08-22T15:23:00");

export const JsJodaService: DateTimeService = class {
  static parseISO() {
    LocalDateTime.parse("2016-05-25T09:24:15");
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
    // isBefore in days
    return (
      Math.abs(
        Period.between(
          DATE_TIME_INSTANCE.toLocalDate(),
          ANOTHER_DATE_TIME_INSTANCE.toLocalDate()
        ).days()
      ) < 0
    );
  }
};
