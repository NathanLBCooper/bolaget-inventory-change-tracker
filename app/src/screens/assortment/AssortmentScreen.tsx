import React, { Component, ReactNode, ReactElement } from "react";
import { View, TextStyle, ViewStyle, StyleSheet, TouchableOpacity, RefreshControl, SectionListData, FlatList } from "react-native";
import { Text, ListItem, SearchBar } from "react-native-elements";
import { Container } from "inversify";

import { sort } from "../../lib/Sort";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { Category } from "../../api/Category";
import { ArticleSummary } from "../../api/ArticleSummary";
import { IInventoryApi } from "../../api/InventoryApi";
import { CollapsingPanel } from "../../components/CollapsingPanel";

type Props = {
    navigation: INavigation
};

type State = {
    assortmentList: SectionListData<ArticleSummary>[],
    hasLoaded: boolean;
    hasError: boolean;
    refreshing: boolean;
    search: string;
};

export class AssortmentScreen extends Component<Props, State> {
    public state: State = {
        assortmentList: undefined,
        hasLoaded: false,
        hasError: false,
        refreshing: false,
        search: ""
    };

    private readonly inventoryApi: IInventoryApi;

    constructor(props: Props) {
        super(props);

        this.load = this.load.bind(this);
        this.renderName = this.renderName.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.inventoryApi = serviceLocator.get("IInventoryApi");
    }

    public async componentDidMount(): Promise<void> { await this.load(); }

    public render(): ReactNode {
        const { assortmentList, hasLoaded, hasError, refreshing, search } = this.state;
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle,
            categoryTitleContainer: ViewStyle,
            arrowIconStyle: TextStyle,
            categoryTitle: TextStyle,
            emptyCategoryTitle: TextStyle,
            categoryItem: ViewStyle,
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1,
            },
            categoryTitleContainer: {
                backgroundColor: "mediumslateblue",
                borderBottomColor: "#8877ef",
                borderBottomWidth: 2
            },
            arrowIconStyle: {
                color: "white"
            },
            categoryTitle: {
                paddingLeft: 10,
                color: "white",
                paddingTop: 12,
                paddingBottom: 8
            },
            emptyCategoryTitle: {
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
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={(text: string) => {
                        this.setState({ search: text });
                    }}
                    value={search}
                />
                <FlatList
                    data={searchFilter(search, assortmentList)}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => this.load()} />}
                    renderItem={({ item }) => {
                        if (item.data.length > 0) {
                            return <CollapsingPanel
                                summaryContainerStyle={styles.categoryTitleContainer}
                                iconStyle={styles.arrowIconStyle}
                                summary={<Text h4={true}
                                    style={styles.categoryTitle}
                                >{item.key}</Text>}
                                detail={
                                    <FlatList
                                        data={item.data}
                                        keyExtractor={(i, index) => index.toString()}
                                        renderItem={(obj: { item: ArticleSummary, index: number }) => {
                                            return <TouchableOpacity
                                                onPress={() => navigation.navigate("Article", { articleId: obj.item.id })}>
                                                <ListItem
                                                    key={obj.index}
                                                    title={this.renderName(obj.item)}
                                                    style={styles.categoryItem}
                                                /></TouchableOpacity>;
                                        }}
                                    />
                                } />;
                        } else {
                            return <Text h4={true}
                                style={[styles.categoryTitle, styles.emptyCategoryTitle, styles.categoryTitleContainer]}
                            >{item.key}</Text>;
                        }
                    }}
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

    private renderName(article: ArticleSummary): ReactElement {
        const styles: {
            itemTitle: TextStyle,
        } = {
            itemTitle: {
                fontWeight: "bold"
            }
        };

        return article.name2 != null && article.name2.length > 0 ?
            <Text><Text style={styles.itemTitle}>{`${article.name2},  `}</Text>{`${article.name}`}</Text> :
            <Text style={styles.itemTitle}>{`${article.name}`}</Text>;
    }

    private async load(): Promise<void> {
        try {
            const assortment: { category: Category, articles: ArticleSummary[] }[] = [];
            const categories: Category[] = (await this.inventoryApi.getCategories()).data;
            for (const category of sort(categories, cat => cat.name)) {
                try {
                    assortment.push({ category, articles: (await this.inventoryApi.getArticlesByCategory(category)).data });
                } catch (error) {
                    assortment.push({ category, articles: [] });
                    console.error(`Error fetching articles for category ${category.uri} in AssortmentScreen.load`, error);
                }
            }

            const assortmentList: SectionListData<ArticleSummary>[] =
                assortment.map(a => ({ key: a.category.name, data: sort(a.articles, art => art.name) }));

            this.setState({ assortmentList, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching assortment in AssortmentScreen.load", error);
            this.setState({ hasError: true });
        }
    }
}

function searchFilter(search: string, data: SectionListData<ArticleSummary>[]): SectionListData<ArticleSummary>[] {
    return sort(data.map(d => (
        { key: d.key, data: d.data.filter(article => isSearchMatch(search, article)) }
    )), section => section.data.length === 0);
}

function isSearchMatch(search: string, article: ArticleSummary): boolean {
    const lowerCaseSearch: string = search.toLowerCase();
    const strCompare: (s: string) => boolean = (s: string) => s.toLowerCase().includes(lowerCaseSearch);

    return strCompare(article.name)
        || strCompare(article.name2);
}
