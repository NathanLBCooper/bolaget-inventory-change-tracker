import React, { Component, ReactNode } from "react";
import { View, TextStyle, ViewStyle, FlatList, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { Container } from "inversify";

import { IInventoryService } from "../../services/InventoryService";
import { Article } from "../../services/Article";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { ChangesListItem } from "../changes/ChangesListItem";
import { ChangeModel } from "../changes/ChangeModel";

type Props = {
    navigation: INavigation
};

type State = {
    article: Article;
    hasLoaded: boolean;
    hasError: boolean;
};

export class ArticleScreen extends Component<Props, State> {
    public state: State = {
        article: undefined,
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
        const { navigation } = this.props;

        const styles: {
            container: ViewStyle
            header: TextStyle,
            sectionHeader: TextStyle,
            summaryList: ViewStyle,
            summaryRow: ViewStyle,
            summaryKey: TextStyle,
            summaryValue: TextStyle,
            changeList: ViewStyle
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
                backgroundColor: "darkgray",
                color: "white",
                paddingTop: 5,
                paddingBottom: 5,
                marginTop: 10
            },
            summaryList: {
                padding: 10
            },
            summaryRow: {
                flexDirection: "row",
                height: 28
            },
            summaryKey: {
                flex: 1,
                fontSize: 16
            },
            summaryValue: {
                flex: 2,
                fontSize: 14,
                color: "rgba(0, 0, 0, 0.54)"
            },
            changeList: {
                padding: 10
            }
        };

        if (hasLoaded) {
            const summaryData: {
                key: string;
                value: string;
            }[] = [
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
                    { key: "Timestamp", value: `${article.timestamp.format("MMMM D YYYY, h:mm:ss a")}` },
                    { key: "Uri", value: `${article.uri}` }
                ];

            return <View style={styles.container}>
                <Text h4={true} style={styles.header}>{article.name}</Text>
                <ScrollView>
                    <Text h4={true} style={styles.sectionHeader}>Summary</Text>
                    <FlatList
                        style={styles.summaryList}
                        data={summaryData}
                        renderItem={({ item }) => <View style={styles.summaryRow}>
                            <Text style={styles.summaryKey}>{item.key}</Text><Text style={styles.summaryValue}>{`${item.value}`}</Text>
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Text h4={true} style={styles.sectionHeader}>Changes</Text>
                    <FlatList
                        data={toChangeListModel(article)}
                        renderItem={(obj) => <ChangesListItem model={obj.item} index={obj.index} navigation={navigation} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>;
        } else if (hasError) {
            return <View>
                <Text>todo error</Text>
            </View>;
        } else {
            return <View>
                <LoadingSpinner />
            </View>;
        }
    }

    private async loadArticle(articleId: number): Promise<void> {
        try {
            const article: Article = await this.inventoryService.getArticle(articleId);
            this.setState({ article, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching change feed in ChangeScreen.loadChangeFeed", error);
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
