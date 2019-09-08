import React from "react";
import { View, Text, FlatList } from "react-native";
import { Container } from "inversify";
import { Styles } from "./ScreenStyles";
import { IChangeFeedService } from "../services/ChangeFeedService";
import { PriceChangeFeedItem } from "../services/PriceChangeFeedItem";

type State = {
    changeFeed: PriceChangeFeedItem[];
    isLoading: boolean;
}

export class PriceChangesScreen extends React.Component {
    public state: State = {
        changeFeed: [],
        isLoading: true
    };

    private readonly changeFeedService: IChangeFeedService;

    constructor(props: {}) {
        super(props);
        this.changeFeedService = (window["ServiceLocator"] as Container).get("IChangeFeedService");
    }

    public async componentDidMount() { await this.loadChangeFeed(); }

    public render() {
        const { changeFeed, isLoading } = this.state;
        if (!isLoading) {
            return <View style={Styles.container}>
                <FlatList
                    data={changeFeed}
                    renderItem={this.renderFeedItem}
                />
            </View>
        } else {
            return <View style={Styles.container}>
                <Text>loading todo</Text>
            </View>
        }
    }

    private renderFeedItem(obj: {item: any}) {
        return <Text>{obj.item.productSummary.name}&nbsp;
            changed price by {obj.item.priceChange}&nbsp;
            on {obj.item.date}</Text>;
    }

    private async loadChangeFeed() {
        
        try {
            const changeFeed = await this.changeFeedService.getPriceChangeFeed();
            this.setState({ changeFeed, isLoading: false });
        } catch (error) {
            console.error("Error fetching change feed in PriceChangeScreen.loadChangeFeed", error);
        }
    }
}
