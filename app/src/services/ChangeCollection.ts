import * as dayJs from "dayjs";
import { Change } from "./Change";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

export class ChangeCollection {
    public static Make(dto: any): ChangeCollection {
        return new ChangeCollection(createDayJs(dto.timestamp), (dto.changes as any[]).map(c => Change.Make(c)));
    }
    constructor(
        public timestamp: dayJs.Dayjs,
        public changes: Change[]
    ) { }
}
