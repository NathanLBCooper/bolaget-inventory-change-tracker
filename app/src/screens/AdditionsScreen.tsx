import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from "../styles/ScreenStyles";
export class AdditionsScreen extends React.Component {
  public render(): React.ReactNode {
    return (<View style={Styles.container}>
      <Text>This is where additions content goes</Text>
    </View>);
  }
}
