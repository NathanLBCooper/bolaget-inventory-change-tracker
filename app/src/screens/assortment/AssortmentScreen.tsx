import React, { Component, ReactNode } from "react";
import { View, TextStyle, ViewStyle, FlatList, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { Container } from "inversify";

import { IInventoryService } from "../../services/InventoryService";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";

type Props = {
    navigation: INavigation
};

type State = {
    hasLoaded: boolean;
    hasError: boolean;
};

export class AssortmentScreen extends Component<Props, State> {
    public state: State = {
        hasLoaded: false,
        hasError: false
    };

    private readonly inventoryService: IInventoryService;

    constructor(props: Props) {
        super(props);

        const serviceLocator: Container = global.serviceLocator;
        this.inventoryService = serviceLocator.get("IInventoryService");
    }

    public async componentDidMount(): Promise<void> {
        // todo
    }

    public render(): ReactNode {
        const { hasLoaded, hasError } = this.state;
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle,
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1,
            },
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
            return <View style={styles.container}>
                <Text>todo content</Text>
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
