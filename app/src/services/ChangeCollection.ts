import * as dayJs from "dayjs";
import { Change } from "./Change";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

export class ChangeCollection {
    public static Make(dto: any): ChangeCollection {
        // todo this dto is actually a ChangeCollection[], to allow inclusion of changes at different times.
        // But only on the typed request. Wtf?
        if (dto["length"] != null ) {
            dto = dto[0];
        }

        return new ChangeCollection(createDayJs(dto.timestamp), (dto.changes as any[]).map(c => Change.Make(c)));
    }
    constructor(
        public timestamp: dayJs.Dayjs,
        public changes: Change[]
    ) { }
}
