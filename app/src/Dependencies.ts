import { Container } from "inversify";
import { IInventoryApi, InventoryApi } from "./services/InventoryApi";
import { Appsettings } from "./AppSettings";
import { IClock, Clock } from "./lib/clock";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container: Container = new Container();

    container.bind<IInventoryApi>("IInventoryApi").toConstantValue(new InventoryApi(settings.baseUrl));
    container.bind<IClock>("IClock").to(Clock);

    return container;
}
