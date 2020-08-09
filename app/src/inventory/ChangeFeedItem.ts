import { ChangeCollection } from "./ChangeCollection";

export class ChangeFeedItem {
    public static Make(dto: any): ChangeFeedItem {
        return new ChangeFeedItem(dto.id, dto.name, dto.name2, dto.category, ChangeCollection.Make(dto.changes), dto.uri);
    }
    constructor(
        public id: number,
        public name: string,
        public name2: string,
        public category: string,
        public changes: ChangeCollection,
        public uri: string
    ) { }
}
