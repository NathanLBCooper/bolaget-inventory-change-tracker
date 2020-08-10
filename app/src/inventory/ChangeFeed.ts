import * as dayJs from "dayjs";

import { ChangeFeedItem, makeChangeFeedItem } from "./ChangeFeedItem";

export type ChangeFeed = {
    timestamp: dayJs.Dayjs;
    data: ChangeFeedItem[];
};

export function makeChangeFeed(dto: any): ChangeFeed {
    return {
        timestamp: dayJs(dto.timestamp || 0),
        data: dto.data == null ? [] : (dto.data as any[]).map(c => makeChangeFeedItem(c))
    };
}
