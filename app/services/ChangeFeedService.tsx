import { PriceChangeFeedItem } from "./PriceChangeFeedItem";

export class ChangeFeedService {
    constructor(private baseUri: string) {}

    public async getPriceChangeFeed(): Promise<PriceChangeFeedItem[]> {
        let response = await fetch(this.baseUri + "/PriceFeed/");
        let responseJson: any[] = await response.json();
        return responseJson.map(feedItemDto => PriceChangeFeedItem.Make(feedItemDto));
    }
}