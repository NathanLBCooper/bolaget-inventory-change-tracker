import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightslategrey"
  },
  textBlock: {
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20
  }
});

const hexagonStyles: any = StyleSheet.create({
  hexagon: {
    width: 300,
    height: 165
  },
  hexagonInner: {
    width: 300,
    height: 165,
    backgroundColor: '#fae1e6'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -75,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 150,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderTopWidth: 75,
    borderTopColor: '#fae1e6'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -75,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 150,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderBottomWidth: 75,
    borderBottomColor: '#fae1e6'
  }
});

export class SplashScreen extends React.Component<{
  navigation: any;
}> {
  public render(): React.ReactNode {
    return (<View style={styles.container}>
      <View style={hexagonStyles.hexagon}>
        <View style={hexagonStyles.hexagonInner}>
          <View style={styles.textBlock}>
            <Text style={styles.title}>BOLAGET</Text>
            <Text>+/-</Text>
            <Text style={styles.subtitle}>Inventory Change Tracker</Text>
          </View>
        </View>
        <View style={hexagonStyles.hexagonBefore} />
        <View style={hexagonStyles.hexagonAfter} />
      </View>
    </View>);
  }
  public componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 2000);
  }
}
