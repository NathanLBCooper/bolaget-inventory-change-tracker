import * as dayJs from "dayjs";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;
import { ArticleSummary } from "./ArticleSummary";

export class ArticleSummaryCollection {
    public static Make(dto: any): ArticleSummaryCollection {
        return new ArticleSummaryCollection(dto.etag, createDayJs(dto.timestamp), (dto.data as any[]).map(c => ArticleSummary.Make(c)));
    }
    constructor(
        public etag: string,
        public timestamp: dayJs.Dayjs,
        public data: ArticleSummary[]
    ) { }
}
