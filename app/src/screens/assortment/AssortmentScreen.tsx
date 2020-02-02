import React, { Component, ReactNode } from "react";
import { View, TextStyle, ViewStyle, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Container } from "inversify";

import { IInventoryApi } from "../../services/InventoryApi";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { CategoryCollection } from "../../services/CategoryCollection";

type Props = {
    navigation: INavigation
};

type State = {
    categories: CategoryCollection,
    hasLoaded: boolean;
    hasError: boolean;
};

export class AssortmentScreen extends Component<Props, State> {
    public state: State = {
        categories: undefined,
        hasLoaded: false,
        hasError: false
    };

    private readonly InventoryApi: IInventoryApi;

    constructor(props: Props) {
        super(props);

        const serviceLocator: Container = global.serviceLocator;
        this.InventoryApi = serviceLocator.get("IInventoryApi");
    }

    public async componentDidMount(): Promise<void> { await this.loadCategories(); }

    public render(): ReactNode {
        const { categories, hasLoaded, hasError } = this.state;
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle,
            categoryItem: ViewStyle
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1,
            },
            categoryItem: {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: "rgba(0, 0, 0, 0.12)"
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
                <FlatList
                    data={categories.data}
                    renderItem={(obj) =>
                        <TouchableOpacity onPress={() => navigation.navigate("Category", { categoryName: obj.item.name })}><ListItem
                            key={obj.index}
                            title={
                                <Text>{obj.item.name}</Text>
                            }
                            style={styles.categoryItem}
                        /></TouchableOpacity>}
                    keyExtractor={(item, index) => index.toString()}
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

    private async loadCategories(): Promise<void> {
        try {
            const categories: CategoryCollection = await this.InventoryApi.getCategories();

            this.setState({ categories, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching categories in AssortmentScreen.loadCategories", error);
            this.setState({ hasError: true });
        }
    }
}
