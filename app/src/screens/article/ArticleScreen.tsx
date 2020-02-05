import React, { Component, ReactNode, ReactElement } from "react";
import { View, TextStyle, ViewStyle, FlatList, ScrollView } from "react-native";
import { Text, Button } from "react-native-elements";
import { Container } from "inversify";
import dayjs from "dayjs";

import { sort } from "../../lib/Sort";
import { IInventoryApi } from "../../api/InventoryApi";
import { Article } from "../../api/Article";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { EmptyChangeListItem } from "../changes/ChangesListItem";
import { ChangeModel } from "../changes/ChangeModel";
import { ChangesListItemForArticle } from "./ChangesListItemForArticle";

type Props = {
    navigation: INavigation
};

type State = {
    article: Article;
    stock: [dayjs.Dayjs, number][];
    hasLoaded: boolean;
    hasError: boolean;
    hasErrorFetchingStock: boolean;
};

export class ArticleScreen extends Component<Props, State> {
    public state: State = {
        article: undefined,
        stock: undefined,
        hasLoaded: false,
        hasError: false,
        hasErrorFetchingStock: false
    };

    private readonly InventoryApi: IInventoryApi;

    constructor(props: Props) {
        super(props);

        this.renderSummary = this.renderSummary.bind(this);
        this.renderChanges = this.renderChanges.bind(this);
        this.renderStockLevels = this.renderStockLevels.bind(this);
        this.renderNotification = this.renderNotification.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.InventoryApi = serviceLocator.get("IInventoryApi");
    }

    public async componentDidMount(): Promise<void> {
        const articleId: number = this.props.navigation.getParam("articleId", -1);
        if (articleId == null) {
            console.error("Error reading property articleId");
            this.state.hasError = true;
            return;
        }

        await this.loadArticle(articleId);
    }

    public render(): ReactNode {
        const { article, hasLoaded, hasError } = this.state;

        const styles: {
            container: ViewStyle
            header: TextStyle,
            sectionHeader: TextStyle,
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1,
            },
            header: {
                paddingLeft: 10,
                backgroundColor: "mediumslateblue",
                color: "white",
                paddingTop: 12,
                paddingBottom: 8,
                marginTop: 10
            },
            sectionHeader: {
                paddingLeft: 10,
                backgroundColor: "rgb(80,80,80)",
                color: "white",
                paddingTop: 5,
                paddingBottom: 5,
                marginTop: 10
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
                <Text h4={true} style={styles.header}>{article.name}</Text>
                <ScrollView>
                    <Text h4={true} style={styles.sectionHeader}>Summary</Text>
                    {this.renderSummary()}
                    <Text h4={true} style={styles.sectionHeader}>Notifications</Text>
                    {this.renderNotification()}
                    <Text h4={true} style={styles.sectionHeader}>Recent Changes</Text>
                    {this.renderChanges()}
                    <Text h4={true} style={styles.sectionHeader}>Recent Stock Levels</Text>
                    {this.renderStockLevels()}
                </ScrollView>
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

    private renderSummary(): ReactElement {
        const { article } = this.state;

        const summaryData: {
            key: string;
            value: string;
        }[] = [
                { key: "Id", value: `${article.id}` },
                { key: "ArticleId", value: `${article.articleId}` },
                { key: "Name", value: `${article.name}` },
                { key: "Name2", value: `${article.name2}` },
                { key: "Producer", value: `${article.producer}` },
                { key: "Importer", value: `${article.importer}` },
                { key: "Type", value: `${article.type}` },
                { key: "Category", value: `${article.category}` },
                { key: "Origin", value: `${article.origin}` },
                { key: "CountryOfOrigin", value: `${article.countryOfOrigin}` },
                { key: "Packaging", value: `${article.packaging}` },
                { key: "Vintage", value: `${article.vintage}` },
                { key: "Price", value: `${article.price}` },
                { key: "PricePerLitre", value: `${article.pricePerLitre}` },
                { key: "Alcohol", value: `${article.alcohol}` },
                { key: "Volume", value: `${article.volume}` },
                { key: "Expired", value: `${article.expired}` },
                { key: "Timestamp", value: `${article.timestamp.format("MMMM D YYYY, h:mm:ss a")}` }
            ];

        const styles: {
            list: ViewStyle,
            row: ViewStyle,
            key: TextStyle,
            value: TextStyle
        } = {
            list: {
                padding: 10
            },
            row: {
                flexDirection: "row",
                height: 28
            },
            key: {
                flex: 1,
                fontSize: 16
            },
            value: {
                flex: 2,
                fontSize: 14,
                color: "rgba(0, 0, 0, 0.54)"
            }
        };

        return <FlatList
            style={styles.list}
            data={summaryData}
            renderItem={({ item }) => <View style={styles.row}>
                <Text style={styles.key}>{item.key}</Text><Text style={styles.value}>{`${item.value}`}</Text>
            </View>}
            keyExtractor={(item, index) => index.toString()}
        />;
    }

    private renderChanges(): ReactElement {
        const { article } = this.state;

        return <FlatList
            data={toChangeListModel(article)}
            renderItem={(obj) => <ChangesListItemForArticle model={obj.item} index={obj.index} />}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<EmptyChangeListItem />}
        />;
    }

    private renderStockLevels(): ReactElement {
        const { stock, hasErrorFetchingStock } = this.state;

        const styles: {
            emptyText: ViewStyle,
            list: ViewStyle,
            row: ViewStyle,
            key: TextStyle,
            value: TextStyle
        } = {
            emptyText: {
                padding: 10
            },
            list: {
                padding: 10
            },
            row: {
                flexDirection: "row",
                height: 28
            },
            key: {
                flex: 2,
                fontSize: 16
            },
            value: {
                flex: 1,
                fontSize: 14,
                color: "rgba(0, 0, 0, 0.54)"
            }
        };

        if (hasErrorFetchingStock) {
            return <Text style={styles.emptyText}>Sorry! Something went wrong when fetch the stock levels</Text>;
        }

        if (stock == null || stock.length === 0) {
            return <Text style={styles.emptyText}>No stock level history for this article</Text>;
        }

        return <FlatList
            style={styles.list}
            data={stock}
            renderItem={({ item }) => <View style={styles.row}>
                <Text style={styles.key}>{item[0].format('D MMM, h:mm:ss a')}</Text><Text style={styles.value}>{`${item[1]}`}</Text>
            </View>}
            keyExtractor={(item, index) => index.toString()}
        />;
    }

    private renderNotification(): ReactElement {
        const { article } = this.state;
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle,
            buttonContainer: ViewStyle
        } = {
            container: {
                padding: 10,
                display: "flex",
                alignItems: "center"
            },
            buttonContainer: {
                padding: 10
            }
        };

        return <View style={styles.container}>
            <Button
                containerStyle={styles.buttonContainer}
                title="Notify me when something changes"
                onPress={() => navigation.navigate("CreateNotification", { articleId: article.id })}
            />
        </View>;
    }

    private async loadArticle(articleId: number): Promise<void> {
        try {
            const article: Article = await this.InventoryApi.getArticle(articleId);
            let stock: [dayjs.Dayjs, number][];
            let hasErrorFetchingStock: boolean = false;
            try {
                stock = createChangeHistory((await this.InventoryApi.getStockLevels(article)).stockLevels);
            } catch (error) {
                console.error("Error fetching stock levels in ArticleScreen.loadArticle", error);
                hasErrorFetchingStock = true;
            }

            this.setState({ article, stock, hasLoaded: true, hasErrorFetchingStock });
        } catch (error) {
            console.error("Error fetching article in ArticleScreen.loadArticle", error);
            this.setState({ hasError: true });
        }
    }
}

function toChangeListModel(article: Article): ChangeModel[] {
    const models: ChangeModel[] = [];
    for (const changeCollection of article.history) {
        for (const change of changeCollection.changes) {
            models.push(
                ChangeModel.MakeWithArticle(article, changeCollection, change)
            );
        }
    }

    return models;
}

function createChangeHistory(stockLevels: [dayjs.Dayjs, number][]): [dayjs.Dayjs, number][] {
    if (stockLevels.length < 2) {
        return stockLevels;
    }

    const changeHistoryLength: number = 30;

    const sortedLevels: [dayjs.Dayjs, number][] = sort(stockLevels, (s) => s[0]);
    const interestingValues: [dayjs.Dayjs, number][] = [sortedLevels[0]];
    for (let i: number = 1; i < sortedLevels.length; ++i) {
        if (sortedLevels[i][1] !== sortedLevels[i - 1][1]) {
            interestingValues.push(sortedLevels[i]);
        }
    }

    return interestingValues.splice(interestingValues.length - changeHistoryLength).reverse();
}
