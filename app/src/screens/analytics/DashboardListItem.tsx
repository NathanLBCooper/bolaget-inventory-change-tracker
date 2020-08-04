import React, { Component, ReactNode } from 'react';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

import { INavigation } from '../../Navigation';
import { Dashboard } from '../../redash/Dashboard';

type Props = {
    dashboard: Dashboard,
    navigation: INavigation
};

export class DashboardListItem extends Component<Props> {
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

        const { dashboard, navigation } = this.props;

        return <TouchableOpacity onPress={() => navigation.navigate("Dashboard", { uri: dashboard.uri })}><ListItem
            key={dashboard.name}
            title={
                <View><Text style={styles.itemTitle}>{`${dashboard.name}`}</Text></View>
            }
            subtitle={`${dashboard.description}`}
            style={styles.item}
        /></TouchableOpacity>;
    }
}

export class EmptyDashboardListItem extends Component {
    public shouldComponentUpdate(): boolean {
        return false;
    }

    public render(): ReactNode {
        return <ListItem
            key={0}
            title={<Text>no dashboards</Text>}
            style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: "rgba(0, 0, 0, 0.12)"
            }}
        />;
    }
}
