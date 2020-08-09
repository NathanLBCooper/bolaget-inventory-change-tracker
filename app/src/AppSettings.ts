import { injectable } from "inversify";

@injectable()
export class Appsettings {
    constructor(
        public inventoryApiBaseUri: string,
        public redashApiBaseUri: string
        ) { }
}
