import { Container } from "inversify";
import { IChangeFeedService, ChangeFeedService } from "./services/ChangeFeedService";

const container = new Container();
container.bind<IChangeFeedService>("IChangeFeedService").toConstantValue(new ChangeFeedService("http://localhost:3000"));

export { container };
