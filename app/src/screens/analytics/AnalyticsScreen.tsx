import React, { Component, ReactNode } from "react";
import { View, Platform } from "react-native";
import { Text } from "react-native-elements";

export class AnalyticsScreen extends Component {
    public render(): ReactNode {
        return <View style={{flex: 1}}>
            {
                Platform.OS === "web" ?
                    <iframe
                        src={"http://40.69.83.250/public/dashboards/OeLpkqJ8fcLgoLq44Ciq59KyohVISWhQhdMfpRW5?org_slug=default"}
                        style={{ height: "100%" }} /> :
                    <Text>Hello, I'm a page that's going to contain some redash stuff</Text>
            }
        </View>;
    }
}
