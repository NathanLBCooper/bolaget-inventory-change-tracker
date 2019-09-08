import React from "react";
import { View, Text, FlatList } from "react-native";
import { Styles } from "./ScreenStyles";
import { ChangeFeedService } from "../services/ChangeFeedService";

export class PriceChangesScreen extends React.Component {
    public state = {
        changeFeed: [],
        isLoading: true
    };
    
    private readonly _changeFeed: ChangeFeedService;

    constructor(props) {
        super(props);
        this._changeFeed = new ChangeFeedService("http://localhost:3000");
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
            const changeFeed = await this._changeFeed.getPriceChangeFeed();
            this.setState({ changeFeed, isLoading: false });
        } catch (error) {
            console.error("Error fetching change feed in PriceChangeScreen.loadChangeFeed", error);
        }
    }
}