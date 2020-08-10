import dayjs, * as dayJs from "dayjs";
import { injectable } from "inversify";

export interface IClock {
    now(): dayJs.Dayjs;
}

@injectable()
export class Clock implements IClock {
    public now(): dayJs.Dayjs {
        return dayjs();
    }
}
