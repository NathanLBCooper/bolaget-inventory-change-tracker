import React from "react";
import { View, Text, FlatList } from "react-native";
import { Styles } from "./ScreenStyles";
import { ChangeFeedService } from "../services/ChangeFeedService";

export class PriceChangesScreen extends React.Component {
    private readonly _changeFeed: ChangeFeedService;

    state = {
        changeFeed: [],
        isLoading: true
    };

    constructor(props) {
        super(props);
        this._changeFeed = new ChangeFeedService("http://localhost:3000");
    }

    private async loadChangeFeed() {
        try {
            const changeFeed = await this._changeFeed.getPriceChangeFeed();
            this.setState({ changeFeed: changeFeed, isLoading: false });
        } catch (error) {
            console.error("Error fetching change feed in PriceChangeScreen.loadChangeFeed", error);
        }
    }

    async componentDidMount() { await this.loadChangeFeed(); }

    render() {
        const { changeFeed, isLoading } = this.state;
        if (!isLoading) {
            return <View style={Styles.container}>
                <FlatList
                    data={changeFeed}
                    renderItem={({ item }) => <Text>{item.productSummary.name} changed price by {item.priceChange} on {item.date}</Text>}
                />
            </View>
        } else {
            return <View style={Styles.container}>
                <Text>loading todo</Text>
            </View>
        }
    }
}