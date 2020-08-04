import React, { Component, ReactNode, ReactElement } from "react";
import { View } from "react-native";

import { INavigation } from "../../Navigation";
import { FlatList } from "react-native-gesture-handler";
import { DashboardListItem, EmptyDashboardListItem } from "./DashboardListItem";
import { DashboardModel } from "./DashboardModel";

type Props = {
    navigation: INavigation
};

export class DashboardListScreen extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public shouldComponentUpdate(): boolean {
        return false;
    }

    public render(): ReactNode {
        const dashboards: DashboardModel[] = [
            {
                name: "inventory-change-tracker",
                url: "http://40.69.83.250/public/dashboards/OeLpkqJ8fcLgoLq44Ciq59KyohVISWhQhdMfpRW5?org_slug=default",
                description: "This is a dashboard I quickly made so I'd have something to work with"
            }
        ];

        return <View style={{ flex: 1 }}>
            <FlatList
                data={dashboards}
                renderItem={obj => <DashboardListItem model={obj.item} navigation={this.props.navigation} />}
                keyExtractor={(item) => item.name}
                ListEmptyComponent={<EmptyDashboardListItem />}
            />
        </View>;
    }
}
