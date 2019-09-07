export class ProductSummary {
    public static Make(dto: any): ProductSummary {
        return new ProductSummary(
            dto.id, dto.name, dto.name2, dto.priceIncMoms, dto.volume
            );
    }

    constructor(
        public id: number,
        public name: string,
        public name2: string,
        public priceIncMoms: number,
        public volume: number
    ) { }
}
