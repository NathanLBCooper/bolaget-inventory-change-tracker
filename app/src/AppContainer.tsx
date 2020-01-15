import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationContainer, NavigationProp, NavigationNavigator, NavigationState } from 'react-navigation';

import { ChangesScreen } from './screens/changes/ChangesScreen';
import { SplashScreen } from './screens/splash/SplashScreen';

export function createMyAppContainer(): NavigationContainer {
    const AppNavigator: NavigationNavigator<{}, NavigationProp<NavigationState>> = createSwitchNavigator(
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
