import * as dayJs from "dayjs";

import { ChangeCollection, makeChangeCollection } from "./ChangeCollection";

export type Article = {
    id: number;
    articleId: number;
    name: string;
    name2: string;
    producer: string;
    importer: string;
    type: string;
    category: string;
    origin: string;
    countryOfOrigin: string;
    packaging: string;
    vintage: string;
    price: number;
    pricePerLitre: number;
    alcohol: string;
    volume: number;
    expired: boolean;
    history: ChangeCollection[];
    timestamp: dayJs.Dayjs;
    stock: string;
    uri: string;
};

export function makeArticle (dto: any): Article {
    return {
        id: dto.id,
        articleId: dto.articleId,
        name: dto.name,
        name2: dto.name2,
        producer: dto.producer,
        importer: dto.importer,
        type: dto.type,
        category: dto.category,
        origin: dto.origin,
        countryOfOrigin: dto.countryOfOrigin,
        packaging: dto.packaging,
        vintage: dto.vintage,
        price: dto.price,
        pricePerLitre: dto.pricePerLitre,
        alcohol: dto.alcohol,
        volume: dto.volume,
        expired: dto.expired,
        history: dto.history == null ? [] : (dto.history as any[]).map(c => makeChangeCollection(c)),
        timestamp: dayJs(dto.timestamp || 0),
        stock: dto.stock,
        uri: dto.uri
    };
}
