import { Container } from "inversify";
import { IChangeFeedService, ChangeFeedService } from "./services/ChangeFeedService";
import { Appsettings } from "./AppSettings";

export function ConfigureDependencies(settings: Appsettings): Container {
    const container = new Container();

    container.bind<IChangeFeedService>("IChangeFeedService").toConstantValue(new ChangeFeedService(settings.baseUrl));

    return container;
}