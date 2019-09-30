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

export type Pair = {
    key: string,
    checked: boolean
};

type Props = {
    pairs: Pair[],
    onPress: (pairs: Pair[], updated: Pair) => void
};

type State = {
    pairs: Pair[]
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

export class ChangesListFilter extends Component<Props> {
    public state: State = {
        pairs: []
    };

    constructor(props: Props) {
        super(props);

        this.renderCheckboxes = this.renderCheckboxes.bind(this);

        this.state.pairs = props.pairs;
    }

    public render(): ReactNode {
        return <View style={styles.container}>
            {<CollapsingPanel
                summary={<Text style={styles.title}>Filter results</Text>}
                detail={this.renderCheckboxes()}/>}
        </View>;
    }

    private renderCheckboxes(): ReactElement {
        const { pairs } = this.state;

        return <FlatList
            data={pairs}
            renderItem={({ item }) => {
                return <CheckBox containerStyle={checkBoxStyles.container} textStyle={checkBoxStyles.text} title={item.key}
                    checked={item.checked} onPress={() => this.onPress(item)}
                />;
            }} numColumns={4} extraData={this.state}/>;
    }

    private onPress(pressedPair: Pair): void {
        const updatedPairs: Pair[] = this.state.pairs.map(p => (
            { key: p.key, checked: p.key === pressedPair.key ? !p.checked : p.checked }
        ));

        this.setState({
            pairs: updatedPairs
        });

        this.props.onPress(updatedPairs, { key: pressedPair.key, checked: !pressedPair.checked });
    }
}
