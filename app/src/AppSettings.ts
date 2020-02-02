import { injectable } from "inversify";

@injectable()
export class Appsettings {
    constructor(public baseUrl: string) { }
}
