import * as dayJs from "dayjs";

import { Change, makeChange } from "./Change";

export type ChangeCollection = {
    timestamp: dayJs.Dayjs;
    changes: Change[];
};

export function makeChangeCollection(dto: any): ChangeCollection {
    return {
        timestamp: dayJs(dto.timestamp || 0),
        changes: dto.changes == null ? [] : (dto.changes as any[]).map(c => makeChange(c))
    };
}
