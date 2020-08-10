import { ChangeCollection, makeChangeCollection } from "./ChangeCollection";

export type ChangeFeedItem = {
    id: number,
    name: string,
    name2: string,
    category: string,
    changes: ChangeCollection,
    uri: string
};

export function makeChangeFeedItem(dto: any): ChangeFeedItem {
    return {
        id: dto.id,
        name: dto.name,
        name2: dto.name2,
        category: dto.category,
        changes: makeChangeCollection(dto.changes),
        uri: dto.uri
    };
}
