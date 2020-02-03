import * as dayJs from "dayjs";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

import { ChangeCollection } from "./ChangeCollection";

export class Article {
    public static Make(dto: any): Article {
        return new Article(dto.id, dto.articleId, dto.name, dto.name2, dto.producer, dto.importer, dto.type, dto.category, dto.origin,
            dto.countryOfOrigin, dto.packaging, dto.vintage, dto.price, dto.pricePerLitre, dto.alcohol, dto.volume, dto.expired,
            dto.history == null ? [] : (dto.history as any[]).map(c => ChangeCollection.Make(c)), createDayJs(dto.timestamp), dto.stock,
            dto.uri);
    }

    constructor(
        public id: number,
        public articleId: number,
        public name: string,
        public name2: string,
        public producer: string,
        public importer: string,
        public type: string,
        public category: string,
        public origin: string,
        public countryOfOrigin: string,
        public packaging: string,
        public vintage: string,
        public price: number,
        public pricePerLitre: number,
        public alcohol: string,
        public volume: number,
        public expired: boolean,
        public history: ChangeCollection[],
        public timestamp: dayJs.Dayjs,
        public stock: string,
        public uri: string
    ) { }
}
