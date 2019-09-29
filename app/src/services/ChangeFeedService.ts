import { injectable } from "inversify";

import { ChangeFeed } from "./ChangeFeed";
import { Article } from "./Article";

export interface IChangeFeedService {
    getChangeFeed(): Promise<ChangeFeed>;
    getFilteredChangeFeed(types: string[]): Promise<ChangeFeed>;
    getArticle(id: number): Promise<Article>;
}

@injectable()
export class ChangeFeedService implements IChangeFeedService {
    constructor(private baseUri: string) { }

    public async getChangeFeed(): Promise<ChangeFeed> {
        const response: Response = await fetch(this.baseUri + "/change/recent/");
        const responseJson: any = await response.json();
        return ChangeFeed.Make(responseJson);
    }

    public async getFilteredChangeFeed(types: string[]): Promise<ChangeFeed> {
        // todo, this is a bad fit for multiple calls all of 100 size
        if (types.length < 1) { throw new Error("Types must have length of 1 or more"); }
        const changeFeeds: ChangeFeed[] = [];

        for (const type of types) {
            const response: Response = await fetch(this.baseUri + "/change/recent/" + type);
            const responseJson: any = await response.json();
            changeFeeds.push(ChangeFeed.Make(responseJson));
        }

        // We haven't bothered to regroup articles, but we're going to tear it apart in the caller anyway
        return new ChangeFeed(changeFeeds[0].timestamp, [].concat.apply([], changeFeeds.map(f => f.data)));
    }

    public async getArticle(id: number): Promise<Article> {
        const response: Response = await fetch(this.baseUri + "/article/" + id);
        const responseJson: any = await response.json();
        return Article.Make(responseJson);
    }
}
