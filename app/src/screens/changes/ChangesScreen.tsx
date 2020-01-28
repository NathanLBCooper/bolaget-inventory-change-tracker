import React, { Component, ReactNode, ReactElement } from "react";
import { View, SectionList, SectionListData, ViewStyle, TextStyle, RefreshControl, ScrollView } from "react-native";
import { Text, Divider } from "react-native-elements";
import { Container } from "inversify";
import { Dayjs } from "dayjs";

import { IClock } from "../../lib/clock";
import { IInventoryService } from "../../services/InventoryService";
import { ChangeFeed } from "../../services/ChangeFeed";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { INavigation } from "../../Navigation";
import { ChangeModel } from "./ChangeModel";
import { ChangesListItem } from "./ChangesListItem";

type State = {
    changeFeed: ChangeFeed;
    hasLoaded: boolean;
    hasError: boolean;
    refreshing: boolean;
};

type Props = {
    navigation: INavigation
};

export class ChangesScreen extends Component<Props, State> {
    public state: State = {
        changeFeed: undefined,
        hasLoaded: false,
        hasError: false,
        refreshing: false
    };

    private readonly inventoryService: IInventoryService;
    private readonly clock: IClock;

    constructor(props: Props) {
        super(props);

        this.renderFeedItem = this.renderFeedItem.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.inventoryService = serviceLocator.get("IInventoryService");
        this.clock = serviceLocator.get("IClock");
    }

    public async componentDidMount(): Promise<void> { await this.loadChangeFeed(); }

    public render(): ReactNode {
        const { changeFeed, hasLoaded, hasError, refreshing } = this.state;

        const styles: {
            container: ViewStyle,
            sectionHeader: TextStyle,
            emptySectionHeader: TextStyle,
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1
            },
            sectionHeader: {
                paddingLeft: 10,
                backgroundColor: "mediumslateblue",
                color: "white",
                paddingTop: 12,
                paddingBottom: 8
            },
            emptySectionHeader: {
                marginBottom: 12,
                color: "darkgray"
            },
            loadingContainer: {
                flex: 1,
                justifyContent: "center"
            },
            errorContainer: {
                flex: 1
            },
            errorMessage: {
                margin: "auto",
                width: "50%",
                textAlign: "center"
            }
        };

        if (hasLoaded) {
            return <View style={styles.container}>
                <SectionList
                    renderItem={this.renderFeedItem}
                    renderSectionHeader={({ section }) => {

                        return <Text h4={true}
                            style={[styles.sectionHeader, section.data.length === 0 ? styles.emptySectionHeader : undefined]}
                        >{section.key}</Text>;
                    }}
                    renderSectionFooter={() => <Divider />}
                    sections={toAgeInDaysSections(toModel(changeFeed).slice(0, 100), this.clock)}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => this.loadChangeFeed()} />}
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

    private renderFeedItem(obj: { item: ChangeModel, index: number }): ReactElement {
        return <ChangesListItem model={obj.item} index={obj.index} navigation={this.props.navigation} />;
    }

    private async loadChangeFeed(): Promise<void> {
        try {
            const changeFeed: ChangeFeed = await this.inventoryService.getChangeFeed();

            this.setState({ changeFeed, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching change feed in ChangeScreen.loadChangeFeed", error);
            this.setState({ hasError: true });
        }
    }
}

function toModel(feed: ChangeFeed): ChangeModel[] {
    const models: ChangeModel[] = [];
    for (const item of feed.data) {
        for (const change of item.changes.changes) {
            models.push(
                ChangeModel.Make(item, item.changes, change)
            );
        }
    }

    return models;
}

function toAgeInDaysSections(feedModels: ChangeModel[], clock: IClock): SectionListData<any>[] {
    const currentTime: Dayjs = clock.now();
    const today: ChangeModel[] = [];
    const yesterday: ChangeModel[] = [];
    const lastSevenDays: ChangeModel[] = [];
    const lastThirtyDays: ChangeModel[] = [];
    const older: ChangeModel[] = [];

    for (const model of feedModels) {
        const ageInDays: number = currentTime.diff(model.timeStamp, "day");
        if (ageInDays < 1) {
            today.push(model);
            continue;
        }
        if (ageInDays < 2) {
            yesterday.push(model);
            continue;
        }
        if (ageInDays < 7) {
            lastSevenDays.push(model);
            continue;
        }
        if (ageInDays < 30) {
            lastThirtyDays.push(model);
            continue;
        }
        older.push(model);
    }

    return ([
        { data: today, key: "Today" },
        { data: yesterday, key: "Yesterday" },
        { data: lastSevenDays, key: "Last 7 Days" },
        { data: lastThirtyDays, key: "Last 30 Days" },
        { data: older, key: "Older" }
    ]);
}
