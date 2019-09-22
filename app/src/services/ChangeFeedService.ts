import { injectable } from "inversify";
import { ChangeFeed } from "./ChangeFeed";

export interface IChangeFeedService {
    getChangeFeed(): Promise<ChangeFeed>;
}

@injectable()
export class ChangeFeedService implements IChangeFeedService {
    constructor(private baseUri: string) { }

    public async getChangeFeed(): Promise<ChangeFeed> {
        const response: Response = await fetch(this.baseUri + "/change/recent/")
        const responseJson: any = await response.json();
        return ChangeFeed.Make(responseJson);
    }
}
