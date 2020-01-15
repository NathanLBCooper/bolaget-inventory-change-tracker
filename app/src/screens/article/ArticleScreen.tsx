import React, { Component, ReactNode } from "react";
import { View, StyleSheet, Dimensions, TextStyle } from "react-native";
import { Text, Header } from "react-native-elements";
import { Container } from "inversify";

import { IInventoryService } from "../../services/InventoryService";
import { Article } from "../../services/Article";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import * as MediaPxWidths from "../../style/MediaPxWidths";

type Props = {
    navigation: INavigation
};

type State = {
    article: Article;
    hasLoaded: boolean;
    hasError: boolean;
    width: number;
};

export class ArticleScreen extends Component<Props, State> {
    public state: State = {
        article: undefined,
        hasLoaded: false,
        hasError: false,
        width: undefined
    };

    private readonly inventoryService: IInventoryService;

    constructor(props: Props) {
        super(props);

        const serviceLocator: Container = global.serviceLocator;
        this.inventoryService = serviceLocator.get("IInventoryService");

        const { width } = Dimensions.get("window");
        this.state.width = width;
        Dimensions.addEventListener("change", (e) => { this.setState({ width: e.window.width }); });
    }

    public async componentDidMount(): Promise<void> {
        const articleId: number = this.props.navigation.getParam("articleId", -1);
        // todo if -1
        await this.loadArticle(articleId);
    }

    public render(): ReactNode {
        const { article, hasLoaded, hasError, width } = this.state;

        const responsiveStyles: any = StyleSheet.create({
            container: {
                marginRight: width > MediaPxWidths.TabletsInLandscape ? "calc((50%) * (2 / 3) )" : undefined,
                marginLeft: width > MediaPxWidths.TabletsInLandscape ? "calc((50%) * (1 / 3))" : undefined
            }
        });

        const styles: {
            header: TextStyle
        } = {
            header: {
                paddingLeft: 10,
                backgroundColor: "mediumslateblue",
                color: "white",
                paddingTop: 12,
                paddingBottom: 8,
                marginTop: 10
            }
        };

        if (hasLoaded) {
            return <View style={responsiveStyles.container}>
                <Text h4={true} style={styles.header}>{article.name}</Text>
                <Text>{JSON.stringify(article)}</Text>
            </View>;
        } else if (hasError) {
            return <View>
                todo error
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
