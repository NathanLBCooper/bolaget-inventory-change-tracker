import * as dayJs from "dayjs";
import { ChangeFeedItem } from "./ChangeFeedItem";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

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
