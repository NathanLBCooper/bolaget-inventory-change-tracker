import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from "../styles/ScreenStyles";
export class ApkScreen extends React.Component {
  public render(): React.ReactNode {
    return (<View style={Styles.container}>
      <Text>This is where APK content goes</Text>
    </View>);
  }
}
