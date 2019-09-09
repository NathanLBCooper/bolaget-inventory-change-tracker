// Import once in application. Global singleton for inversify
import "reflect-metadata";

import { createMyAppContainer } from "./src/AppContainer";
import { ConfigureDependencies } from './src/Dependencies';
import { Appsettings } from './src/AppSettings';
import { Container } from "inversify";
import appSettingsJson from "./appsettings.json"

declare global {
  const global: {
    serviceLocator: Container
  };
}

global.serviceLocator = ConfigureDependencies(appSettingsJson as Appsettings);

export default createMyAppContainer();
