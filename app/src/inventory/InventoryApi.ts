import { injectable, inject } from "inversify";

import { Appsettings } from "../AppSettings";
import { ChangeFeed, makeChangeFeed } from "./ChangeFeed";
import { Article, makeArticle } from "./Article";
import { CategoryCollection, makeCategoryCollection } from "./CategoryCollection";
import { ArticleSummaryCollection, makeArticleSummaryCollection } from "./ArticleCollection";
import { Category } from "./Category";
import { ArticleStockLevels, makeArticleStockLevels } from "./ArticleStockLevels";

function putThisInFilesWithInjectDecorator(): any {
    throw Error("Don't call this"); return inject("");
}

export interface IInventoryApi {
    getCategories(): Promise<CategoryCollection>;
    getArticlesByCategory(category: Category): Promise<ArticleSummaryCollection>;
    getChangeFeed(): Promise<ChangeFeed>;
    getArticle(id: number): Promise<Article>;
    getStockLevels(article: Article): Promise<ArticleStockLevels>;
}

@injectable()
export class InventoryApi implements IInventoryApi {
    constructor(@inject("Appsettings") private appSettings: Appsettings) { }

    public async getCategories(): Promise<CategoryCollection> {
        return this.getResource(makeCategoryCollection, "/assortment");
    }

    public async getArticlesByCategory(category: Category): Promise<ArticleSummaryCollection> {
        return this.getResource(makeArticleSummaryCollection, category.uri);
    }

    public async getChangeFeed(): Promise<ChangeFeed> {
        return this.getResource(makeChangeFeed, "/change/recent");
    }

    public async getArticle(id: number): Promise<Article> {
        return this.getResource(makeArticle, "/article/" + id);
    }

    public async getStockLevels(article: Article): Promise<ArticleStockLevels> {
        return this.getResource(makeArticleStockLevels, article.stock);
    }

    private async getResource<TResource>(make: (dto: any) => TResource, link: string): Promise<TResource> {
        const response: Response = await fetch(this.appSettings.inventoryApiBaseUri + link);
        const responseJson: any = await response.json();
        return make(responseJson);
    }
}
