import React, { Component, ReactNode, ReactElement } from "react";
import { View, TextStyle, ViewStyle, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Container } from "inversify";

import { IInventoryApi } from "../../services/InventoryApi";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { ArticleSummaryCollection } from "../../services/ArticleCollection";
import { ArticleSummary } from "../../services/ArticleSummary";

type Props = {
    navigation: INavigation
};

type State = {
    articles: ArticleSummary[];
    hasLoaded: boolean;
    hasError: boolean;
};

export class CategoryScreen extends Component<Props, State> {
    public state: State = {
        articles: undefined,
        hasLoaded: false,
        hasError: false
    };

    private readonly InventoryApi: IInventoryApi;

    constructor(props: Props) {
        super(props);

        const serviceLocator: Container = global.serviceLocator;
        this.InventoryApi = serviceLocator.get("IInventoryApi");
    }

    public async componentDidMount(): Promise<void> {
        const categoryName: string = this.props.navigation.getParam("categoryName", undefined);
        await this.loadArticles(categoryName);
    }

    public render(): ReactNode {
        const { articles, hasLoaded, hasError } = this.state;
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle,
            categoryItem: ViewStyle,
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
            const renderNames: (model: ArticleSummary) => ReactElement = (model) => {
                return model.name2 != null && model.name2.length > 0 ?
                    <Text>
                        <Text>{`${model.name},  `}</Text><Text style={{ fontStyle: "italic" }}>{`${model.name2}, ${model.volume}ml`}</Text>
                    </Text> :
                    <Text>{`${model.name}`}</Text>;
            };

            return <View style={styles.container}>
                <FlatList
                    data={articles}
                    renderItem={(obj) =>
                        <TouchableOpacity onPress={() => navigation.navigate("Article", { articleId: obj.item.id })}><ListItem
                            key={obj.index}
                            title={renderNames(obj.item)}
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

    private async loadArticles(categoryName: string): Promise<void> {
        try {
            const articles: ArticleSummaryCollection = await this.InventoryApi.getArticlesByCategory(categoryName);

            this.setState({ articles: sortAlphabetically(articles.data), hasLoaded: true });
        } catch (error) {
            console.error("Error fetching categories in Category.loadArticles", error);
            this.setState({ hasError: true });
        }
    }
}

function sortAlphabetically(articles: ArticleSummary[]): ArticleSummary[] {
    return articles.sort((left, right) => {
        return left.name < right.name ? -1 : left.name > right.name ? 1 : 0;
    });
}
