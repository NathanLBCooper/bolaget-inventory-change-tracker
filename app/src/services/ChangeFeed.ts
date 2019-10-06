import * as dayJs from "dayjs";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

import { ChangeFeedItem } from "./ChangeFeedItem";

export class ChangeFeed {
    public static Make(dto: any): ChangeFeed {
        return new ChangeFeed(
            createDayJs(dto.timestamp), (dto.data as any[]).map(c => ChangeFeedItem.Make(c))
        );
    }

    constructor(
        public timestamp: dayJs.Dayjs,
        public data: ChangeFeedItem[]
    ) { }
}
