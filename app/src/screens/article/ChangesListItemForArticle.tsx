import React, { Component, ReactNode } from 'react';
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { ListItem } from 'react-native-elements';

import { ChangeModel } from '../changes/ChangeModel';

type Props = {
    model: ChangeModel,
    index: number
};

export class ChangesListItemForArticle extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public shouldComponentUpdate(): boolean {
        return false;
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

        return <ListItem
            key={index}
            title={`${model.changeName}`}
            subtitle={`changed from "${model.oldValue}" to "${model.newValue}"`}
            rightTitle={`${model.timeStamp.format('D MMM')}`}
            style={styles.item}
        />;
    }
}
