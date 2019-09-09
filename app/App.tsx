// Import once in application. Global singleton for inversify
import "reflect-metadata";

import React from "react";
import { NavigationContainer } from "react-navigation";
import { StatusBar, View } from "react-native";
import Constants from 'expo-constants';
import { Container } from "inversify";

import { createMyAppContainer } from "./src/AppContainer";
import { ConfigureDependencies } from './src/Dependencies';
import { Appsettings } from './src/AppSettings';
import appSettingsJson from "./appsettings.json"

declare global {
  const global: {
    serviceLocator: Container
  };
}

global.serviceLocator = ConfigureDependencies(appSettingsJson as Appsettings);

const AppContainer: NavigationContainer = createMyAppContainer();

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <StatusBar/>
        <AppContainer />
      </View>
    );
  }
}
