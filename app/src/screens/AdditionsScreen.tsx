import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
});

export class AdditionsScreen extends React.Component {
  public render(): React.ReactNode {
    return (<View style={styles.container}>
      <Text>This is where additions content goes</Text>
    </View>);
  }
}
