import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
});

export class SplashScreen extends React.Component<{
  navigation: any;
}> {
  public render(): React.ReactNode {
    return (<View style={styles.container}>
      <Image source={require("../../images/wine.png")} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 30 }}>Secrets of Systemet</Text>
    </View>);
  }
  public componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate('Changes');
    }, 2000);
  }
}
