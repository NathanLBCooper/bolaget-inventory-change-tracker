import React, { Component, ReactNode, ReactElement } from 'react';
import { View, TextStyle, FlatList, ViewStyle } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';

import { CollapsingPanel } from '../../components/CollapsingPanel';

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

export type Item<T> = {
    key: T,
    text: string,
    checked: boolean
};

type Props<T> = {
    items: Item<T>[],
    onPress: (items: Item<T>[], updated: Item<T>) => void
};

type State<T> = {
    items: Item<T>[]
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

export class ChangesListFilter<T> extends Component<Props<T>, State<T>> {
    public state: State<T> = {
        items: []
    };

    constructor(props: Props<T>) {
        super(props);

        this.renderCheckboxes = this.renderCheckboxes.bind(this);

        this.state.items = props.items;
    }

    public render(): ReactNode {
        return <View style={styles.container}>
            {<CollapsingPanel
                summary={<Text style={styles.title}>Filter results</Text>}
                detail={this.renderCheckboxes()}/>}
        </View>;
    }

    private renderCheckboxes(): ReactElement {
        const { items } = this.state;

        return <FlatList
            data={items}
            renderItem={({ item }) => {
                return <CheckBox containerStyle={checkBoxStyles.container} textStyle={checkBoxStyles.text} title={item.text}
                    checked={item.checked} onPress={() => this.onPress(item)}
                />;
            }} numColumns={3} extraData={this.state}/>;
    }

    private onPress(pressedItem: Item<T>): void {
        const updatedItems: Item<T>[] = this.state.items.map(p => (
            { key: p.key, text: p.text, checked: p.key === pressedItem.key ? !p.checked : p.checked }
        ));

        this.setState({
            items: updatedItems
        });

        this.props.onPress(updatedItems, { key: pressedItem.key, text: pressedItem.text, checked: !pressedItem.checked });
    }
}
