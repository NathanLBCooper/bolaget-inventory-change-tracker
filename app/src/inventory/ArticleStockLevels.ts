import * as dayJs from "dayjs";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

export class ArticleStockLevels {
    public static Make(dto: any): ArticleStockLevels {
        return new ArticleStockLevels(
            dto.id, (dto.stockLevels as any[]).map(c => [createDayJs(c[0]), c[1]]), dto.article, dto.uri
        );
    }

    constructor(
        public id: number,
        public stockLevels: [dayJs.Dayjs, number][],
        public article: string,
        public uri: string
    ) { }
}
