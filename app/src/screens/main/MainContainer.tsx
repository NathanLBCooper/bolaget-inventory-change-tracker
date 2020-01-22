import React, { Component, ReactNode } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { NavigationRouter, NavigationNavigator, NavigationProp, NavigationState } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import * as MediaPxWidths from "../../style/MediaPxWidths";
import { ChangesScreen } from "../changes/ChangesScreen";
import { ArticleScreen } from "../article/ArticleScreen";
import { AssortmentScreen } from "../assortment/AssortmentScreen";

const ChangesNavigation: NavigationNavigator<any, NavigationProp<NavigationState>> = createStackNavigator(
    {
        Changes: {
            screen: ChangesScreen,
            path: 'changes',
            navigationOptions: {
                headerShown: false,
            }
        },
        Article: {
            screen: ArticleScreen,
            path: 'changes/:articleId'
        },
    },
    {
        initialRouteName: "Changes",
        headerMode: 'screen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "lightslategray"
            },
            headerTitleStyle: {
                color: "white"
            }
        }
    }
);

const AssortmentNavigation: NavigationNavigator<any, NavigationProp<NavigationState>> = createStackNavigator(
    {
        Assortment: {
            screen: AssortmentScreen,
            path: 'assortment',
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
        initialRouteName: "Assortment",
        headerMode: 'screen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "lightslategray"
            },
            headerTitleStyle: {
                color: "white"
            }
        }
    }
);

const TabNavigator: NavigationNavigator<any, NavigationProp<NavigationState>> = createBottomTabNavigator(
    {
        Changes: ChangesNavigation,
        Assortment: AssortmentNavigation,
    },
    {
        initialRouteName: 'Changes',
        tabBarOptions: {
            showIcon: false,
            style: {
                backgroundColor: "#DFDFDF",
            },
            labelStyle: {
                fontSize: 20,
                paddingBottom: 10
            }
        }
    }
);

type State = {
    width: number;
};

export default class MainContainer extends Component<any, State> {
    public static router: NavigationRouter<any, {}> = TabNavigator.router;
    public state: State = {
        width: undefined
    };

    constructor(props: any) {
        super(props);

        const { width } = Dimensions.get("window");
        this.state.width = width;
        Dimensions.addEventListener("change", (e) => { this.setState({ width: e.window.width }); }); // todo cleanup
    }

    public render(): ReactNode {
        const { width } = this.state;
        const { navigation } = this.props;

        const responsiveStyles: any = StyleSheet.create({
            container: {
                marginRight: width > MediaPxWidths.TabletsInLandscape ? "calc((50%) * (2 / 3) )" : undefined,
                marginLeft: width > MediaPxWidths.TabletsInLandscape ? "calc((50%) * (1 / 3))" : undefined
            }
        });

        return (
            <View style={[{ flex: 1 }, responsiveStyles.container]}>
                <TabNavigator navigation={navigation} />
            </View>
        );
    }
}
