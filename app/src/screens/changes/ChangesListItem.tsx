import React, { Component, ReactElement, ReactNode } from 'react';
import { View, ViewStyle, StyleSheet, TextStyle, FlatList } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

import { ChangeModel } from './ChangeModel';

type Props = {
    model: ChangeModel,
    index: number
};

export class ChangesListItem extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render(): ReactNode {
        const styles: {
            item: ViewStyle,
            itemTitle: TextStyle,
            itemSubtitle: TextStyle
        } = {
            item: {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: "rgba(0, 0, 0, 0.12)"
            },
            itemTitle: {
                fontWeight: "bold"
            },
            itemSubtitle: {
                fontStyle: "italic"
            },
        };

        const { model, index } = this.props;

        const renderNames: () => ReactElement = () => {
            return model.name2 != null && model.name2.length > 0 ?
                <Text><Text style={styles.itemTitle}>{`${model.name2},  `}</Text>{`${model.name}`}</Text> :
                <Text style={styles.itemTitle}>{`${model.name}`}</Text>;
        };

        return <ListItem
            key={index}
            title={
                <View>{renderNames()}<Text style={styles.itemSubtitle}>{`${model.category}`}</Text></View>
            }
            subtitle={`${model.changeName} changed from "${model.oldValue}" to "${model.newValue}"`}
            rightSubtitle={`${model.timeStamp.format('D MMM')}`}
            rightTitle={`${model.changeName}`}
            style={styles.item}
        />;
    }
}
