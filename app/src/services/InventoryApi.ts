import { injectable, inject } from "inversify";

import { Appsettings } from "../AppSettings";
import { ChangeFeed } from "./ChangeFeed";
import { Article } from "./Article";
import { CategoryCollection } from "./CategoryCollection";
import { ArticleSummaryCollection } from "./ArticleCollection";
import { Category } from "./Category";
import { ArticleSummary } from "./ArticleSummary";

function putThisInFilesWithInjectDecorator(): any {
    throw Error("Don't call this"); return inject("");
}

export interface IInventoryApi {
    getChangeFeed(): Promise<ChangeFeed>;
    getArticle(id: number): Promise<Article>;
    getCategories(): Promise<CategoryCollection>;
    getArticlesByCategory(categoryName: string): Promise<ArticleSummaryCollection>;
}

@injectable()
export class InventoryApi implements IInventoryApi {
    constructor(@inject("Appsettings") private appSettings: Appsettings) { }

    public async getChangeFeed(): Promise<ChangeFeed> {
        return this.getResource(ChangeFeed.Make, "/change/recent");
    }

    public async getArticle(id: number): Promise<Article> {
        return this.getResource(Article.Make, "/article/" + id);
    }

    public async getCategories(): Promise<CategoryCollection> {
        return this.getResource(CategoryCollection.Make, "/assortment/");
    }

    public async getArticlesByCategory(categoryName: string): Promise<ArticleSummaryCollection> {
        return this.getResource(ArticleSummaryCollection.Make, "/assortment/" + categoryName);
    }

    private async getResource<TResource>(make: (dto: any) => TResource, link: string): Promise<TResource> {
        const response: Response = await fetch(this.appSettings.baseUrl + link);
        const responseJson: any = await response.json();
        return make(responseJson);
    }
}

export interface IInventoryLinksApi {
    getCategories(): Promise<Category[]>;
    getArticlesByCategory(category: Category): Promise<ArticleSummary[]>;
    getArticle(article: ArticleSummary): Promise<Article>;
}

@injectable()
export class InventoryLinksApi implements InventoryLinksApi {
    constructor(@inject("Appsettings") private appSettings: Appsettings) { }

    public async getCategories(): Promise<Category[]> {
        return (await this.getResource(CategoryCollection.Make, "/assortment/")).data;
    }

    public async getArticlesByCategory(category: Category): Promise<ArticleSummary[]> {
        return (await this.getResource(ArticleSummaryCollection.Make, category.uri)).data;
    }

    public async getArticle(article: ArticleSummary): Promise<Article> {
        return this.getResource(Article.Make, article.uri);
    }

    private async getResource<TResource>(make: (dto: any) => TResource, link: string): Promise<TResource> {
        const response: Response = await fetch(this.appSettings.baseUrl + link);
        const responseJson: any = await response.json();
        return make(responseJson);
    }
}
