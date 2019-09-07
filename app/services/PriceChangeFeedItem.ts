import { ProductSummary } from "./ProductSummary";

export class PriceChangeFeedItem {
    public static Make(dto: any): PriceChangeFeedItem {
        return new PriceChangeFeedItem(
            ProductSummary.Make(dto.productSummary), dto.date, dto.priceChange
            );
    }

    constructor(
        public productSummary: ProductSummary,
        public date: Date,
        public priceChange: number
    ) {}
}
