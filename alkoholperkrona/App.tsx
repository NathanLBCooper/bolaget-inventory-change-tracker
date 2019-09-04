import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabIcon from './components/TabIcon';

class PriceChangesScreen extends React.Component {
  render() {
    return (
      <View style={pageStyles.container}>
        <Text>This is where price change content goes</Text>
      </View>
    );
  }
}

class AdditionsScreen extends React.Component {
  render() {
    return (
      <View style={pageStyles.container}>
        <Text>This is where additions content goes</Text>
      </View>
    );
  }
}

class ApkScreen extends React.Component {
  render() {
    return (
      <View style={pageStyles.container}>
        <Text>This is where APK content goes</Text>
      </View>
    );
  }
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const AppNavigator = createBottomTabNavigator(
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
    initialRouteName: "PriceChanges",
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      }
    }
  }
);

export default createAppContainer(AppNavigator);