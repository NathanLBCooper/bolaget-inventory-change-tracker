import * as dayJs from "dayjs";
import { ChangeCollection } from "./ChangeCollection";
export const createDayJs: (date: Date) => dayJs.Dayjs = (dayJs)["default"] || dayJs;

export class Article {
    public static Make(dto: any): Article {
        return new Article(dto.id, dto.name, dto.name2, dto.producer, dto.importer, dto.type, dto.category, dto.origin, dto.countryOfOrigin,
            dto.packaging, dto.vintage, dto.price, dto.pricePerLitre, dto.alcohol, dto.volume, dto.expired, dto.history, dto.timestamp,
            dto.uri);
    }

    constructor(
        public id: number,
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
        public history: ChangeCollection,
        public timestamp: dayJs.Dayjs,
        public uri: string
    ) { }
}
