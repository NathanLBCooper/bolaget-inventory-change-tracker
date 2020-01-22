import * as dayJs from "dayjs";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;
import { Category } from "./Category";

export class CategoryCollection {
    public static Make(dto: any): CategoryCollection {
        return new CategoryCollection(dto.etag, createDayJs(dto.timestamp), (dto.data as any[]).map(c => Category.Make(c)));
    }
    constructor(
        public etag: string,
        public timestamp: dayJs.Dayjs,
        public data: Category[]
    ) { }
}
