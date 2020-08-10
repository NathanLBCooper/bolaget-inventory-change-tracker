import * as dayJs from "dayjs";

import { ArticleSummary, makeArticleSummary } from "./ArticleSummary";

export type ArticleSummaryCollection = {
    etag: string;
    timestamp: dayJs.Dayjs;
    data: ArticleSummary[];
};

export function makeArticleSummaryCollection(dto: any): ArticleSummaryCollection {
    return {
        etag: dto.etag,
        timestamp: dayJs(dto.timestamp || 0),
        data: dto.data == null ? [] : (dto.data as any[]).map(c => makeArticleSummary(c))
    };
}
