import { ProductSummary } from "./ProductSummary";
import * as dayJs from "dayjs";
const createDayJs = (dayJs)["default"] || dayJs;

export class PriceChangeFeedItem {
    public static Make(dto: any): PriceChangeFeedItem {
        return new PriceChangeFeedItem(
            ProductSummary.Make(dto.productSummary), createDayJs(dto.date), dto.priceChange
            );
    }

    constructor(
        public productSummary: ProductSummary,
        public date: dayJs.Dayjs,
        public priceChange: number
    ) {}
}
