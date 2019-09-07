import React from 'react';
import { Text, View, Image, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabIcon from './components/TabIcon';
import { PriceChangesScreen } from './screens/PriceChangesScreen';
import { Styles } from "./screens/ScreenStyles";

class AdditionsScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>This is where additions content goes</Text>
      </View>
    );
  }
}

class ApkScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>This is where APK content goes</Text>
      </View>
    );
  }
}

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image source={require("./images/wine.png")} style={{ width: 200, height: 200 }}/>
        <Text style={{ fontSize: 30 }}>apk.dev</Text>
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props["navigation"].navigate('Apk')
    }, 2000);
  }
}

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