import React from "react";
import { View, Text, SectionList } from "react-native";
import { Container } from "inversify";

import { Styles } from "./ScreenStyles";
import { IChangeFeedService } from "../services/ChangeFeedService";
import { PriceChangeFeedItem } from "../services/PriceChangeFeedItem";
import { IClock } from "../lib/clock";

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
    private readonly clock: IClock;

    constructor(props: {}) {
        super(props);
        const serviceLocator = window["ServiceLocator"] as Container;
        this.changeFeedService = serviceLocator.get("IChangeFeedService");
        this.clock = serviceLocator.get("IClock");
    }

    public async componentDidMount() { await this.loadChangeFeed(); }

    public render() {
        const { changeFeed, isLoading } = this.state;
        if (!isLoading) {
            return <View style={Styles.container}>
                <SectionList
                    renderItem={this.renderFeedItem}
                    renderSectionHeader={({ section }) => <Text style={{fontWeight: "bold"}}>{section.key}</Text>}
                    sections={this.toAgeInDaysSections(changeFeed)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        } else {
            return <View style={Styles.container}>
                <Text>loading todo</Text>
            </View>
        }
    }

    private renderFeedItem(obj: { item: any }) {
        return <Text>{obj.item.productSummary.name}&nbsp;
            changed price by {obj.item.priceChange}&nbsp;
            on {obj.item.date.toString()}</Text>;
    }

    private async loadChangeFeed() {
        try {
            const changeFeed = await this.changeFeedService.getPriceChangeFeed();
            this.setState({ changeFeed, isLoading: false });
        } catch (error) {
            console.error("Error fetching change feed in PriceChangeScreen.loadChangeFeed", error);
        }
    }

    private toAgeInDaysSections(feedItems: PriceChangeFeedItem[]): any {
        const currentTime = this.clock.now();
        const today = []
        const lastSevenDays = [];
        const lastThirtyDays = [];
        const older = [];

        for (const item of feedItems) {
            const ageInDays = currentTime.diff(item.date, "day");
            if (ageInDays < 1) {
                today.push(item);
                continue;
            }
            if (ageInDays < 7) {
                lastSevenDays.push(item);
                continue;
            }
            if (ageInDays < 30) {
                lastThirtyDays.push(item);
                continue;
            }
            older.push(item);
        }

        return ([
            { data: today, key: "Today" },
            { data: lastSevenDays, key: "Last 7 Days" },
            { data: lastThirtyDays, key: "Last 30 Days" },
            { data: older, key: "Older" }
        ])
    }
}
