import React, { Component, ReactNode } from "react";
import { View, TextStyle } from "react-native";
import { Text } from "react-native-elements";
import { Container } from "inversify";

import { IInventoryService } from "../../services/InventoryService";
import { Article } from "../../services/Article";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";

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
            this.setState({ hasError: true });
            return;
        }

        await this.loadArticle(articleId);
    }

    public render(): ReactNode {
        const { article, hasLoaded, hasError } = this.state;

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
            return <View>
                <Text h4={true} style={styles.header}>{article.name}</Text>
                <Text>{JSON.stringify(article)}</Text>
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
