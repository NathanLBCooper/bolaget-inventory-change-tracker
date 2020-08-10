import * as dayJs from "dayjs";

import { Category, makeCategory } from "./Category";

export type CategoryCollection = {
    etag: string;
    timestamp: dayJs.Dayjs;
    data: Category[];
};

export function makeCategoryCollection(dto: any): CategoryCollection {
    return {
        etag: dto.etag,
        timestamp: dayJs(dto.timestamp || 0),
        data: dto.data == null ? [] : (dto.data as any[]).map(c => makeCategory(c))
    };
}
