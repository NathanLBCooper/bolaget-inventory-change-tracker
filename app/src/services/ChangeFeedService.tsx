import { PriceChangeFeedItem } from "./PriceChangeFeedItem";

export class ChangeFeedService {
    constructor(private baseUri: string) {}

    public async getPriceChangeFeed(): Promise<PriceChangeFeedItem[]> {
        const response = await fetch(this.baseUri + "/PriceFeed/");
        const responseJson: any[] = await response.json();
        return responseJson.map(feedItemDto => PriceChangeFeedItem.Make(feedItemDto));
    }
}