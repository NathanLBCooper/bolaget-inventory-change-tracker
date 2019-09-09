import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MainNavigatorTabIcon } from './components/MainNavigatorTabIcon';
import { PriceChangesScreen } from './screens/PriceChangesScreen';
import { AdditionsScreen } from './screens/AdditionsScreen';
import { ApkScreen } from './screens/ApkScreen';
import { SplashScreen } from './screens/SplashScreen';

export function createMyAppContainer(): NavigationContainer {
    const MainNavigator: NavigationContainer = createBottomTabNavigator(
        {
            Apk: {
                screen: ApkScreen,
                navigationOptions: {
                    tabBarLabel: 'Alkohol per kr',
                    tabBarIcon: () => <MainNavigatorTabIcon name="calculator" />
                }
            },
            PriceChanges: {
                screen: PriceChangesScreen,
                navigationOptions: {
                    tabBarLabel: 'Price Changes',
                    tabBarIcon: () => <MainNavigatorTabIcon name="tag" />
                }
            },
            Additions: {
                screen: AdditionsScreen,
                navigationOptions: {
                    tabBarLabel: 'New',
                    tabBarIcon: () => <MainNavigatorTabIcon name="bell" />
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

    const AppNavigator: NavigationContainer = createSwitchNavigator(
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

    return createAppContainer(AppNavigator);
}
