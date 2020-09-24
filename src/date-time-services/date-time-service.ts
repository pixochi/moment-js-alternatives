import {dateTimeDataset} from '../date-time-dataset'

export abstract class DateTimeService {
  abstract parseISO: VoidFunction
  abstract formatInstance: VoidFunction
  abstract tranformInstance: VoidFunction
  abstract diffBetweenInstances: VoidFunction
  abstract compareInstances: () => boolean;
}
