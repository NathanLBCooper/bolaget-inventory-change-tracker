import React, { Component, ReactNode } from "react";
import { View, TextStyle, ViewStyle, StyleSheet, TouchableOpacity, SectionList, RefreshControl, SectionListData } from "react-native";
import { Text, ListItem, Divider } from "react-native-elements";
import { Container } from "inversify";

import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { Category } from "../../api/Category";
import { ArticleSummary } from "../../api/ArticleSummary";
import { IInventoryLinksApi } from "../../api/InventoryApi";

type Props = {
    navigation: INavigation
};

type State = {
    assortmentList: SectionListData<ArticleSummary>[],
    hasLoaded: boolean;
    hasError: boolean;
    refreshing: boolean;
};

export class AssortmentScreen extends Component<Props, State> {
    public state: State = {
        assortmentList: undefined,
        hasLoaded: false,
        hasError: false,
        refreshing: false
    };

    private readonly inventoryApi: IInventoryLinksApi;

    constructor(props: Props) {
        super(props);

        this.load = this.load.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.inventoryApi = serviceLocator.get("IInventoryLinksApi");
    }

    public async componentDidMount(): Promise<void> { await this.load(); }

    public render(): ReactNode {
        const { assortmentList, hasLoaded, hasError, refreshing } = this.state;
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle,
            sectionHeader: TextStyle,
            emptySectionHeader: TextStyle,
            categoryItem: ViewStyle,
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1,
            },
            sectionHeader: {
                paddingLeft: 10,
                backgroundColor: "mediumslateblue",
                color: "white",
                paddingTop: 12,
                paddingBottom: 8
            },
            emptySectionHeader: {
                marginBottom: 12,
                color: "darkgray"
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
                <SectionList
                    renderItem={(obj: { item: ArticleSummary, index: number }) => {
                        return <TouchableOpacity onPress={() => navigation.navigate("Article", { articleId: obj.item.id })}><ListItem
                            key={obj.index}
                            title={
                                <Text>{obj.item.name}</Text>
                            }
                            style={styles.categoryItem}
                        /></TouchableOpacity>;
                    }}
                    renderSectionHeader={({ section }) => {
                        return <Text h4={true}
                            style={[styles.sectionHeader, section.data.length === 0 ? styles.emptySectionHeader : undefined]}
                        >{section.key}</Text>;
                    }}
                    renderSectionFooter={() => <Divider />}
                    sections={assortmentList}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => this.load()} />}
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

    private async load(): Promise<void> {
        try {
            const assortment: { category: Category, articles: ArticleSummary[] }[] = [];
            const categories: Category[] = (await this.inventoryApi.getCategories()).data;
            for (const category of categories) {
                try {
                    assortment.push({ category, articles: (await this.inventoryApi.getArticlesByCategory(category)).data });
                } catch (error) {
                    assortment.push({ category, articles: [] });
                    console.error(`Error fetching articles for category ${category.uri} in AssortmentScreen.load`, error);
                }
            }

            const assortmentList: SectionListData<ArticleSummary>[] =
                assortment.map(a => ({ key: a.category.name, data: sortAlphabetically(a.articles) }));

            this.setState({ assortmentList, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching assortment in AssortmentScreen.load", error);
            this.setState({ hasError: true });
        }
    }
}

function sortAlphabetically(articles: ArticleSummary[]): ArticleSummary[] {
    return articles.sort((left, right) => {
        return left.name < right.name ? -1 : left.name > right.name ? 1 : 0;
    });
}
