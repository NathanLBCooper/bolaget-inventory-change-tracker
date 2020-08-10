import { Dayjs } from "dayjs";

import { ChangeFeedItem } from "../../inventory/ChangeFeedItem";
import { ChangeCollection } from "../../inventory/ChangeCollection";
import { Change } from "../../inventory/Change";
import { Article } from "../../inventory/Article";

export type ChangeModel = {
    id: number,
    name: string,
    name2: string,
    category: string,
    uri: string,
    timestamp: Dayjs,
    changeName: string,
    oldValue: string,
    newValue: string
};

export function makeChangeModel(item: ChangeFeedItem, changeCollection: ChangeCollection, change: Change): ChangeModel {
    return {
        id: item.id,
        name: item.name,
        name2: item.name2,
        category: item.category,
        uri: item.uri,
        timestamp: changeCollection.timestamp,
        changeName: change.name,
        oldValue: change.oldValue,
        newValue: change.newValue
    };
}
export function makeChangeModelWithArticle(article: Article, changeCollection: ChangeCollection, change: Change): ChangeModel {
    return {
        id: article.id,
        name: article.name,
        name2: article.name2,
        category: article.category,
        uri: article.uri,
        timestamp: changeCollection.timestamp,
        changeName: change.name,
        oldValue: change.oldValue,
        newValue: change.newValue
    };
}
