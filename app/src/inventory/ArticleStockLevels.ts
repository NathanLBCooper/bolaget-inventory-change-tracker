import * as dayJs from "dayjs";

export type ArticleStockLevels = {
    id: number;
    stockLevels: [dayJs.Dayjs, number][],
    article: string;
    uri: string;
};

export function makeArticleStockLevels(dto: any): ArticleStockLevels {
    return {
        id: dto.id,
        stockLevels: dto.stockLevels == null ? [] : (dto.stockLevels as any[]).map(c => [dayJs(c[0] || 0), c[1]]),
        article: dto.article,
        uri: dto.uri
    };
}
