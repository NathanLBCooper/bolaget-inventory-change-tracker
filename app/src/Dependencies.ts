import { Container } from "inversify";
import { IChangeFeedService, ChangeFeedService } from "./services/ChangeFeedService";
import { Appsettings } from "./AppSettings";
import { IClock, Clock } from "./lib/clock";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container: Container = new Container();

    container.bind<IChangeFeedService>("IChangeFeedService").toConstantValue(new ChangeFeedService(settings.baseUrl));
    container.bind<IClock>("IClock").to(Clock);

    return container;
}
