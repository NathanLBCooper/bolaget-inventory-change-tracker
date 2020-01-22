import { injectable } from "inversify";
import APIPeline from "apipeline";

import { ChangeFeed } from "./ChangeFeed";
import { Article } from "./Article";
import { CategoryCollection } from "./CategoryCollection";
import { ArticleSummaryCollection } from "./ArticleCollection";

export interface IInventoryService {
    getChangeFeed(): Promise<ChangeFeed>;
    getArticle(id: number): Promise<Article>;
    getCategories(): Promise<CategoryCollection>;
    getArticlesByCategory(categoryName: string): Promise<ArticleSummaryCollection>;
}

@injectable()
export class InventoryService implements IInventoryService {
    constructor(private api: APIPeline) { }

    public async getChangeFeed(): Promise<ChangeFeed> {
        return ChangeFeed.Make(await this.api.fetch("change/recent"));
    }

    public async getArticle(id: number): Promise<Article> {
        return Article.Make(await this.api.fetch(`article/:id`, { pathParameters: { id } }));
    }

    public async getCategories(): Promise<CategoryCollection> {
        return CategoryCollection.Make(await this.api.fetch("assortment"));
    }

    public async getArticlesByCategory(categoryName: string): Promise<ArticleSummaryCollection> {
        return ArticleSummaryCollection.Make(await this.api.fetch(`assortment/:categoryName`, { pathParameters: { categoryName } }));
    }
}
