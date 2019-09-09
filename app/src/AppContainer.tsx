import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

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
                    tabBarIcon: () => <Icon name="calculator" type="font-awesome"/>
                }
            },
            PriceChanges: {
                screen: PriceChangesScreen,
                navigationOptions: {
                    tabBarLabel: 'Price Changes',
                    tabBarIcon: () => <Icon name="tag" type="font-awesome"/>
                }
            },
            Additions: {
                screen: AdditionsScreen,
                navigationOptions: {
                    tabBarLabel: 'New',
                    tabBarIcon: () => <Icon name="envelope-open" type="font-awesome"/>
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
