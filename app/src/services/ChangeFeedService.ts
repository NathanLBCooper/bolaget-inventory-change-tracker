import { injectable } from "inversify";
import { PriceChangeFeedItem } from "./PriceChangeFeedItem";

export interface IChangeFeedService {
    getPriceChangeFeed(): Promise<PriceChangeFeedItem[]>
}

@injectable()
export class ChangeFeedService implements IChangeFeedService {
    constructor(private baseUri: string) {}

    public async getPriceChangeFeed(): Promise<PriceChangeFeedItem[]> {
        const response: Response = await fetch(this.baseUri + "/PriceFeed/");
        const responseJson: any[] = await response.json();
        return responseJson.map(feedItemDto => PriceChangeFeedItem.Make(feedItemDto));
    }
}
