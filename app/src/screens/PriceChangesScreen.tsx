import React from "react";
import { View, SectionList, SectionListData, StyleSheet } from "react-native";
import { ListItem, Badge, Text, Divider } from "react-native-elements";
import { Container } from "inversify";
import { Dayjs } from "dayjs";

import { IClock } from "../lib/clock";
import { IChangeFeedService } from "../services/ChangeFeedService";
import { PriceChangeFeedItem } from "../services/PriceChangeFeedItem";
import { ProductSummary } from "../services/ProductSummary";

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
    },
});

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
        const serviceLocator: Container = global.serviceLocator;
        this.changeFeedService = serviceLocator.get("IChangeFeedService");
        this.clock = serviceLocator.get("IClock");
    }

    public async componentDidMount(): Promise<void> { await this.loadChangeFeed(); }

    public render(): React.ReactNode {
        const { changeFeed, isLoading } = this.state;
        if (!isLoading) {
            return <View style={styles.container}>
                <SectionList
                    renderItem={this.renderFeedItem}
                    renderSectionHeader={({ section }) => <Text h4={true}>{section.key}</Text>}
                    renderSectionFooter={() => <Divider />}
                    sections={this.toAgeInDaysSections(changeFeed)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        } else {
            return <View style={styles.container}>
                <Text>loading todo</Text>
            </View>
        }
    }

    private renderFeedItem(obj: { item: PriceChangeFeedItem, index: number }): React.ReactElement {
        const summary: ProductSummary = obj.item.productSummary;
        const change: number = obj.item.priceChange;
        return <ListItem
            key={obj.index}
            title={
                <Text><Text style={{ fontWeight: "bold" }}>{`${summary.name2},  `}</Text><Text>{`${summary.name}`}</Text></Text>
            }
            subtitle={`${summary.volume}ml`}
            rightSubtitle={
                <View>
                    <Text style={{ fontWeight: "bold" }}>{`${summary.priceIncMoms}kr`}</Text>
                    <Badge
                        value={`${change > 0 ? "+" : "-"} ${Math.abs(change)}kr`} status={change > 0 ? "error" : "success"} />
                </View>
            }
            bottomDivider={true}
        />
    }

    private async loadChangeFeed(): Promise<void> {
        try {
            const changeFeed: PriceChangeFeedItem[] = await this.changeFeedService.getPriceChangeFeed();
            this.setState({ changeFeed, isLoading: false });
        } catch (error) {
            console.error("Error fetching change feed in PriceChangeScreen.loadChangeFeed", error);
        }
    }

    private toAgeInDaysSections(feedItems: PriceChangeFeedItem[]): SectionListData<any>[] {
        const currentTime: Dayjs = this.clock.now();
        const today: PriceChangeFeedItem[] = []
        const lastSevenDays: PriceChangeFeedItem[] = [];
        const lastThirtyDays: PriceChangeFeedItem[] = [];
        const older: PriceChangeFeedItem[] = [];

        for (const item of feedItems) {
            const ageInDays: number = currentTime.diff(item.date, "day");
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
