import { Container } from "inversify";
import { IInventoryService, InventoryService } from "./services/InventoryService";
import { Appsettings } from "./AppSettings";
import { IClock, Clock } from "./lib/clock";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container: Container = new Container();

    container.bind<IInventoryService>("IInventoryService").toConstantValue(new InventoryService(settings.baseUrl));
    container.bind<IClock>("IClock").to(Clock);

    return container;
}
