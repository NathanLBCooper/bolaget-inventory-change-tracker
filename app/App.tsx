import React from 'react';
import { Platform, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { TabIcon } from './src/components/TabIcon';
import { PriceChangesScreen } from './src/screens/PriceChangesScreen';
import { AdditionsScreen } from './src/screens/AdditionsScreen';
import { ApkScreen } from './src/screens/ApkScreen';
import { SplashScreen } from './src/screens/SplashScreen';

const MainNavigator = createBottomTabNavigator(
  {
    Apk: {
      screen: ApkScreen,
      navigationOptions: {
        tabBarLabel: 'Alkohol per kr',
        tabBarIcon: () => <TabIcon name="calculator" />
      }
    },
    PriceChanges: {
      screen: PriceChangesScreen,
      navigationOptions: {
        tabBarLabel: 'Price Changes',
        tabBarIcon: () => <TabIcon name="tag" />
      }
    },
    Additions: {
      screen: AdditionsScreen,
      navigationOptions: {
        tabBarLabel: 'New',
        tabBarIcon: () => <TabIcon name="bell" />
      }
    },
  },
  {
    initialRouteName: "Apk",
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      }
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Main: MainNavigator,
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

export default createAppContainer(AppNavigator);