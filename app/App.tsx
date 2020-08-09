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

import appSettings_Prod from "./appsettings.json";
import appSettings_Dev from "./appsettings.dev.json";

import { SplashScreen } from './src/screens/splash/SplashScreen';
import MainContainer from "./src/screens/main/MainContainer";

declare global {
  const global: {
    serviceLocator: Container
  };
}

function loadAppSettings(): Appsettings {
  if (!__DEV__) {
    return appSettings_Prod;
  }

  return { ...appSettings_Prod, ...appSettings_Dev };
}

global.serviceLocator = ConfigureDependencies(loadAppSettings());

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
