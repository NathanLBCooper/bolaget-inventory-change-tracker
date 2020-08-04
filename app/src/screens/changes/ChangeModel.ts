import { Dayjs } from "dayjs";

import { ChangeFeedItem } from "../../inventory/ChangeFeedItem";
import { ChangeCollection } from "../../inventory/ChangeCollection";

import { Change } from "../../inventory/Change";
import { Article } from "../../inventory/Article";

export class ChangeModel {
    public static Make(item: ChangeFeedItem, changeCollection: ChangeCollection, change: Change): ChangeModel {
        return new ChangeModel(
            item.id, item.name, item.name2, item.category, item.uri,
            changeCollection.timestamp,
            change.name, change.oldValue, change.newValue
        );
    }

    public static MakeWithArticle(article: Article, changeCollection: ChangeCollection, change: Change): ChangeModel {
        return new ChangeModel(
            article.id, article.name, article.name2, article.category, article.uri,
            changeCollection.timestamp,
            change.name, change.oldValue, change.newValue
        );
    } 

    constructor(
        public id: number,
        public name: string,
        public name2: string,
        public category: string,
        public uri: string,
        public timeStamp: Dayjs,
        public changeName: string,
        public oldValue: string,
        public newValue: string
    ) { }
}
