import React, { Component, ReactNode, ReactElement } from "react";
import { View, TextStyle, ViewStyle, FlatList, ScrollView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import MultiSelect from 'react-native-multiple-select';

type State = {
    selectedFields: string[];
};

export class CreateNotificationScreen extends Component<{}, State> {
    public state: State = {
        selectedFields: []
    };

    constructor(props: {}) {
        super(props);
    }

    public render(): ReactNode {
        const styles: {
            container: ViewStyle,
            formInputContainer: ViewStyle,
            formInput: ViewStyle,
            intraInputText: TextStyle,
            label: TextStyle,
            dropdown: ViewStyle
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
            },
            label: {
                color: "rgb(134, 147, 158)",
                fontSize: 16,
                fontWeight: "bold",
                paddingHorizontal: 10
            },
            dropdown: {
                marginVertical: 15,
                paddingHorizontal: 10
            }
        };

        const fieldOptions: {
            name: string;
            id: number;
        }[] = [
                { name: "Id", id: 10 },
                { name: "Name", id: 11 },
                { name: "Name2", id: 12 },
                { name: "Producer", id: 13 },
                { name: "Importer", id: 14 },
                { name: "Type", id: 15 },
                { name: "Category", id: 16 },
                { name: "Origin", id: 17 },
                { name: "Country of Origin", id: 18 },
                { name: "Packaging", id: 19 },
                { name: "Vintage", id: 20 },
                { name: "Price", id: 21 },
                { name: "Price per Litre", id: 22 },
                { name: "Alcohol", id: 23 },
                { name: "Volume", id: 24 },
                { name: "Expired", id: 25 },
                { name: "History", id: 26 },
                { name: "Timestamp", id: 27 },
                { name: "Uri", id: 28 }
            ];

        const { selectedFields } = this.state;

        return <View style={styles.container}>
            <ScrollView>
                <View style={styles.formInputContainer}>
                    <Text style={styles.intraInputText}>Notify me when...</Text>
                    <Input containerStyle={styles.formInput} label="One of these articles changes" />
                    <View style={styles.formInput}>
                        <Text style={styles.label}>and the change is to one of these fields</Text>
                        <MultiSelect
                            items={fieldOptions}
                            uniqueKey="id"
                            selectedItems={selectedFields}
                            onSelectedItemsChange={selected => { this.setState({ selectedFields: selected }); }}
                            styleMainWrapper={styles.dropdown}
                            styleItemsContainer={{ width: 120 }}
                        />
                    </View>
                </View>
                <Button title="Notify me" />
            </ScrollView>
        </View>;
    }
}

