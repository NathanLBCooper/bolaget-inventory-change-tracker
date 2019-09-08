import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from "./ScreenStyles";
export class ApkScreen extends React.Component {
  public render() {
    return (<View style={Styles.container}>
      <Text>This is where APK content goes</Text>
    </View>);
  }
}
