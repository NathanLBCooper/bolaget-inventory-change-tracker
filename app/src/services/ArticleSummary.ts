export class ArticleSummary {
    public static Make(dto: any): ArticleSummary {
        return new ArticleSummary(dto.id, dto.name, dto.name2, dto.price, dto.pricePerLitre, dto.alcohol, dto.volume, dto.uri);
    }

    constructor(
        public id: number,
        public name: string,
        public name2: string,
        public price: number,
        public pricePerLitre: number,
        public alcohol: string,
        public volume: number,
        public uri: string
    ) { }
}
