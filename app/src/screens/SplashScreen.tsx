import React from 'react';
import { Text, View, Image } from 'react-native';
import { Styles } from "./ScreenStyles";
export class SplashScreen extends React.Component<{
  navigation: any;
}> {
  public render() {
    return (<View style={Styles.container}>
      <Image source={require("../../images/wine.png")} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 30 }}>apk.dev</Text>
    </View>);
  }
  public componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Apk');
    }, 2000);
  }
}
