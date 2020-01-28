import React, { Component, ReactNode, ReactElement } from "react";
import { View, TextStyle, ViewStyle, FlatList, ScrollView } from "react-native";
import { Text, Button, Input } from "react-native-elements";

export class CreateNotificationScreen extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): ReactNode {
        const styles: {
            container: ViewStyle,
            formInputContainer: ViewStyle,
            formInput: ViewStyle,
            intraInputText: TextStyle
        } = {
            container: {
                flex: 1,
                padding: 30
            },
            formInputContainer: {
                paddingTop: 10,
                paddingBottom: 20
            },
            formInput: {
                paddingVertical: 5
            },
            intraInputText: {
                color: "rgb(134, 147, 158)",
                fontSize: 20,
                fontWeight: "bold",
                paddingVertical: 15,
                paddingHorizontal: 10
            }
        };

        return <View style={styles.container}>
            <View style={styles.formInputContainer}>
                <Text style={styles.intraInputText}>Notify me when...</Text>
                <Input containerStyle={styles.formInput} label="One of these articles changes" />
                <Input containerStyle={styles.formInput} label="and the change is to one of these fields" />
            </View>
            <Button title="Notify me" />
        </View>;
    }
}

