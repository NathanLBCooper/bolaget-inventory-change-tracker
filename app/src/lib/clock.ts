import * as dayJs from "dayjs";
import { injectable } from "inversify";
const createDayJs: () => dayJs.Dayjs = (dayJs)["default"] || dayJs;

export interface IClock {
    now(): dayJs.Dayjs;
}

@injectable()
export class Clock implements IClock {
    public now(): dayJs.Dayjs {
        return createDayJs();
    }
}
