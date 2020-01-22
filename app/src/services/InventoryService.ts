import { injectable } from "inversify";

import { ChangeFeed } from "./ChangeFeed";
import { Article } from "./Article";
import { CategoryCollection } from "./CategoryCollection";

export interface IInventoryService {
    getChangeFeed(): Promise<ChangeFeed>;
    getArticle(id: number): Promise<Article>;
    getCategories(): Promise<CategoryCollection>;
}

@injectable()
export class InventoryService implements IInventoryService {
    constructor(private baseUri: string) { }

    public async getChangeFeed(): Promise<ChangeFeed> {
        const response: Response = await fetch(this.baseUri + "/change/recent/");
        const responseJson: any = await response.json();
        return ChangeFeed.Make(responseJson);
    }

    public async getArticle(id: number): Promise<Article> {
        const response: Response = await fetch(this.baseUri + "/article/" + id);
        const responseJson: any = await response.json();
        return Article.Make(responseJson);
    }

    public async getCategories(): Promise<CategoryCollection> {
        const response: Response = await fetch(this.baseUri + "/assortment/");
        const responseJson: any = await response.json();
        return CategoryCollection.Make(responseJson);
    }
}
