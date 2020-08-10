import { injectable, inject } from "inversify";

import { Appsettings } from "../AppSettings";
import { Dashboard } from "./Dashboard";
import { makeDashboardResponse } from "./DashboardResponse";

function putThisInFilesWithInjectDecorator(): any {
    throw Error("Don't call this"); return inject("");
}

export interface IRedashApi {
    getDashboards(): Promise<Dashboard[]>;
}

@injectable()
export class RedashApi implements IRedashApi {
    constructor(@inject("Appsettings") private appSettings: Appsettings) { }

    public async getDashboards(): Promise<Dashboard[]> {
        return (await this.getResource(makeDashboardResponse, "/dashboards")).data;
    }

    private async getResource<TResource>(make: (dto: any) => TResource, link: string): Promise<TResource> {
        const response: Response = await fetch(this.appSettings.redashApiBaseUri + link);
        const responseJson: any = await response.json();
        return make(responseJson);
    }
}
