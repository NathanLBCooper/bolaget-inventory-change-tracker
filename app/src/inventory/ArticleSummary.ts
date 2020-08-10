export type ArticleSummary = {
    id: number;
    name: string;
    name2: string;
    price: number;
    pricePerLitre: number;
    alcohol: string;
    volume: number;
    uri: string;
};

export function makeArticleSummary(dto: any): ArticleSummary {
    return {
        id: dto.id,
        name: dto.name,
        name2: dto.name2,
        price: dto.price,
        pricePerLitre: dto.pricePerLitre,
        alcohol: dto.alcohol,
        volume: dto.volume,
        uri: dto.uri
    };
}
