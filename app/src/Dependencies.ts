import { Container } from "inversify";
import { IInventoryApi, InventoryApi } from "./inventory/InventoryApi";
import { Appsettings } from "./AppSettings";
import { IClock, Clock } from "./lib/clock";
import { IRedashApi, RedashApi } from "./redash/redashApi";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container: Container = new Container();

    container.bind<Appsettings>("Appsettings").toConstantValue(settings);

    container.bind<IInventoryApi>("IInventoryApi").to(InventoryApi).inSingletonScope();
    container.bind<IRedashApi>("IRedashApi").to(RedashApi).inSingletonScope();
    container.bind<IClock>("IClock").to(Clock);

    return container;
}
