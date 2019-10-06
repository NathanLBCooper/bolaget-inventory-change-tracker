import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';

import { ChangesScreen } from './screens/changes/ChangesScreen';
import { SplashScreen } from './screens/splash/SplashScreen';

export function createMyAppContainer(): NavigationContainer {
    const AppNavigator: NavigationContainer = createSwitchNavigator(
        {
            Splash: SplashScreen,
            Main: ChangesScreen,
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
