import React, { Component, ReactNode } from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { Text } from "react-native-elements";
import { Container } from "inversify";

import { INavigation } from "../../Navigation";
import { FlatList } from "react-native-gesture-handler";
import { DashboardListItem, EmptyDashboardListItem } from "./DashboardListItem";
import { IRedashApi } from "../../redash/redashApi";
import { Dashboard } from "../../redash/Dashboard";
import { LoadingSpinner } from "../../components/LoadingSpinner";

type Props = {
    navigation: INavigation
};

type State = {
    dashboards: Dashboard[],
    hasLoaded: boolean,
    hasError: boolean
};

export class DashboardListScreen extends Component<Props, State> {
    public state: State = {
        dashboards: [],
        hasLoaded: false,
        hasError: false
    };

    private readonly redashApi: IRedashApi;

    constructor(props: Props) {
        super(props);

        const serviceLocator: Container = global.serviceLocator;
        this.redashApi = serviceLocator.get("IRedashApi");
    }

    public async componentDidMount(): Promise<void> {
        try {
            const dashboards: Dashboard[] = await this.redashApi.getDashboards();

            this.setState({ dashboards, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching dashboard list in DashboardListScreen.componentDidMount", error);
            this.setState({ hasError: true });
        }
    }

    public render(): ReactNode {
        const { dashboards, hasLoaded, hasError } = this.state;

        const styles: {
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            loadingContainer: {
                flex: 1,
                justifyContent: "center"
            },
            errorContainer: {
                flex: 1,
            },
            errorMessage: {
                margin: "auto",
                width: "50%",
                textAlign: "center"
            }
        };

        if (hasLoaded) {
            return <View style={{ flex: 1 }}>
            <FlatList
                data={dashboards}
                renderItem={obj => <DashboardListItem dashboard={obj.item} navigation={this.props.navigation} />}
                keyExtractor={(item) => item.name}
                ListEmptyComponent={<EmptyDashboardListItem />}
            />
        </View>;
        } else if (hasError) {
            return <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>Sorry! Something went wrong.</Text>
            </View>;
        } else {
            return <View style={styles.loadingContainer}>
                <LoadingSpinner />
            </View>;
        }
    }
}
