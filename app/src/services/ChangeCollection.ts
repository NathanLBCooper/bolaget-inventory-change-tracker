import * as dayJs from "dayjs";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

import { Change } from "./Change";

export class ChangeCollection {
    public static Make(dto: any): ChangeCollection {
        return new ChangeCollection(createDayJs(dto.timestamp), (dto.changes as any[]).map(c => Change.Make(c)));
    }
    
    constructor(
        public timestamp: dayJs.Dayjs,
        public changes: Change[]
    ) { }
}
