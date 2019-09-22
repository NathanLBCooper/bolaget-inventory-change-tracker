import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

import { ChangesScreen } from './screens/ChangesScreen';
import { AdditionsScreen } from './screens/AdditionsScreen';
import { ApkScreen } from './screens/ApkScreen';
import { SplashScreen } from './screens/SplashScreen';

export function createMyAppContainer(): NavigationContainer {
    const MainNavigator: NavigationContainer = createBottomTabNavigator(
        {
            // Apk: {
            //     screen: ApkScreen,
            //     navigationOptions: {
            //         tabBarLabel: 'Alkohol per kr',
            //         tabBarIcon: () => <Icon name="calculator" type="font-awesome"/>
            //     }
            // },
            Changes: {
                screen: ChangesScreen,
                navigationOptions: {
                    tabBarLabel: 'Changes',
                    tabBarIcon: () => <Icon name="tag" type="font-awesome"/>
                }
            },
            // Additions: {
            //     screen: AdditionsScreen,
            //     navigationOptions: {
            //         tabBarLabel: 'New',
            //         tabBarIcon: () => <Icon name="envelope-open" type="font-awesome"/>
            //     }
            // },
        },
        {
            initialRouteName: "Changes",
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
