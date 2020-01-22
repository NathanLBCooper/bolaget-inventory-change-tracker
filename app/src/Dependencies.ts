import { AsyncStorage } from 'react-native';
import { Container } from "inversify";
import APIPeline from "apipeline";
import { IAPICacheDriver, IAPIOptions, IAPIServices } from 'apipeline/src/interfaces';

import { IInventoryService, InventoryService } from "./services/InventoryService";
import { Appsettings } from "./AppSettings";
import { IClock, Clock } from "./lib/clock";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container: Container = new Container();
    const api: APIPeline = configureCachingApi(settings.baseUrl);

    container.bind<IInventoryService>("IInventoryService").toConstantValue(new InventoryService(api));
    container.bind<IClock>("IClock").to(Clock);

    return container;
}

function configureCachingApi(baseUrl: string): APIPeline {
    const apiOptions: IAPIOptions = {
        // Why lambda?: it's important fetch resolves from the window at call-time, not now
        fetchMethod: (input: RequestInfo, init?: RequestInit) => fetch(input, init),
        domains: { default: baseUrl },
        prefixes: { default: "" },
        debugAPI: false,
        printNetworkRequests: false
    };

    const minutes: number = 60 * 1000;
    const hours: number = minutes * 60;
    const apiServices: IAPIServices = {
        "change/recent": {
            path: "change/recent",
            expiration: 30 * minutes
        },
        "article/:id": {
            path: "article/:id",
            expiration: 6 * hours
        },
        "assortment": {
            path: "assortment",
            expiration: 6 * hours
        },
        "assortment/:categoryName": {
            path: "assortment/:categoryName",
            expiration: 6 * hours
        }
    };

    return new APIPeline(apiOptions, apiServices, new AsyncStorageWrapper());
}

class AsyncStorageWrapper implements IAPICacheDriver {
    public getItem(key: string): Promise<any> {
        return AsyncStorage.getItem(key);
    }

    public setItem(key: string, value: string, callback?: (err: any, value: string) => any): Promise<any> {
        // This is the discrepancy that means we need a wrapper
        return AsyncStorage.setItem(key, value, callback == null ? undefined : (err: Error) => callback(err, undefined));
    }

    public removeItem(key: string): Promise<any> {
        return AsyncStorage.removeItem(key);
    }
}
