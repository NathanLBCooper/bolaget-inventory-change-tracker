import { Container, inject } from "inversify";
import { IInventoryApi, InventoryApi, IInventoryLinksApi, InventoryLinksApi } from "./api/InventoryApi";
import { Appsettings } from "./AppSettings";
import { IClock, Clock } from "./lib/clock";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container: Container = new Container();

    container.bind<Appsettings>("Appsettings").toConstantValue(settings);

    container.bind<IInventoryApi>("IInventoryApi").to(InventoryApi).inSingletonScope();
    container.bind<IInventoryLinksApi>("IInventoryLinksApi").to(InventoryLinksApi).inSingletonScope();
    container.bind<IClock>("IClock").to(Clock);

    return container;
}
