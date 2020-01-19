// Import once in application. Global singleton for inversify
import "reflect-metadata";

import React, { Component, ReactNode } from "react";
import {
  createAppContainer, createSwitchNavigator, NavigationContainer, NavigationProp, NavigationNavigator, NavigationState, NavigationRouter
} from 'react-navigation';
import { StatusBar, Platform, View } from "react-native";
import Constants from 'expo-constants';
import { Container } from "inversify";

import { ConfigureDependencies } from './src/Dependencies';
import { Appsettings } from './src/AppSettings';

import appSettingsJson from "./appsettings.json";

import { SplashScreen } from './src/screens/splash/SplashScreen';
import MainContainer, { MainNavigation } from "./src/screens/main/MainContainer";

declare global {
  const global: {
    serviceLocator: Container
  };
}

global.serviceLocator = ConfigureDependencies(appSettingsJson as Appsettings);

const AppNavigator: NavigationNavigator<{}, NavigationProp<NavigationState>> = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Main: MainContainer,
  },
  {
    ...Platform.select({
      default: {
        initialRouteName: "Splash"
      },
      web: {
        initialRouteName: "Main"
      }
    })
  }
);

const AppContainer: NavigationContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  public render(): ReactNode {
    return (
      <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <StatusBar />
        <AppContainer />
      </View>
    );
  }
}
