import React, { Component, ReactNode, ReactElement } from 'react';
import { View, TextStyle, FlatList, ViewStyle } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';

import { Accordian } from '../../components/Accordion';

const styles: { container: TextStyle, title: TextStyle } = {
    container: {
        backgroundColor: "#DFDFDF",
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 8,
        marginBottom: 10
    },
    title: {
        color: "slategrey",
        fontWeight: "bold"
    }
};

const checkBoxStyles: { container: ViewStyle, text: TextStyle } = {
    container: {
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderRadius: 20,
        backgroundColor: "#DFDFDF",
        borderColor: "slategrey"
    },
    text: {
        fontSize: 14,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: "normal"
    }
};

export class ChangesListFilter extends Component {
    constructor(props: {}) {
        super(props);

        this.renderCheckboxes = this.renderCheckboxes.bind(this);
    }

    public render(): ReactNode {
        return <View style={styles.container}>
            <Accordian
                summary={<Text style={styles.title}>Filter results</Text>}
                detail={this.renderCheckboxes} />
        </View>;
    }

    private renderCheckboxes(): ReactElement {
        return <FlatList
            data={[
                { key: "Alcohol", checked: false },
                { key: "Vintage", checked: false },
                { key: "Price", checked: false },
                { key: "These", checked: false },
                { key: "Aren't", checked: false },
                { key: "Implemented", checked: false },
                { key: "Yet", checked: false },
                { key: "Sorry", checked: false }
            ]}
            renderItem={({ item }) =>
                <CheckBox containerStyle={checkBoxStyles.container} textStyle={checkBoxStyles.text} title={item.key} checked={item.checked}
                />} numColumns={4} />;
    }
}
