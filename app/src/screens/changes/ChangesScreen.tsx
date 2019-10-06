import React, { Component, ReactNode } from "react";
import { View, SectionList, SectionListData, StyleSheet, Dimensions, ViewStyle, TextStyle, RefreshControl } from "react-native";
import { Text, Divider } from "react-native-elements";
import { Container } from "inversify";
import { Dayjs } from "dayjs";

import { IClock } from "../../lib/clock";
import { IChangeFeedService } from "../../services/ChangeFeedService";
import { ChangeFeed } from "../../services/ChangeFeed";
import * as MediaPxWidths from "../../style/MediaPxWidths";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { ChangeModel } from "./ChangeModel";
import { ChangesListItem } from "./ChangesListItem";
import { ChangesListFilter, Item } from "./ChangesListFilter";

type State = {
    changeFeed: ChangeFeed;
    filterOptions: Item<FilterableType>[];
    isLoading: boolean;
    width: number;
    refreshing: boolean;
};

export class ChangesScreen extends Component<{}, State> {
    public state: State = {
        changeFeed: undefined,
        filterOptions: [
            { key: FilterableType.alcohol, text: "Alcohol", checked: false },
            { key: FilterableType.vintage, text: "Vintage", checked: false },
            { key: FilterableType.price, text: "Price", checked: false },
            { key: FilterableType.type, text: "Type", checked: false }
        ],
        isLoading: true,
        width: undefined,
        refreshing: false
    };

    private readonly changeFeedService: IChangeFeedService;
    private readonly clock: IClock;

    constructor(props: {}) {
        super(props);

        this.updateFilterOptions = this.updateFilterOptions.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.changeFeedService = serviceLocator.get("IChangeFeedService");
        this.clock = serviceLocator.get("IClock");

        const { width } = Dimensions.get("window");
        this.state.width = width;
        Dimensions.addEventListener("change", (e) => { this.setState({ width: e.window.width }); });
    }

    public async componentDidMount(): Promise<void> { await this.loadChangeFeed(); }

    public render(): ReactNode {
        const { changeFeed, isLoading, width, refreshing, filterOptions } = this.state;

        const responsiveStyles: any = StyleSheet.create({
            list: {
                width: width > MediaPxWidths.TabletsInLandscape ? "80%" : undefined,
                alignItems: width > MediaPxWidths.TabletsInLandscape ? "center" : undefined
            }
        });

        const styles: {
            container: ViewStyle,
            sectionHeader: TextStyle,
            emptySectionHeader: TextStyle,
            loadingContainer: ViewStyle
        } = {
            container: {
                flex: 1
            },
            sectionHeader: {
                paddingLeft: 10,
                backgroundColor: "#4b9560",
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
        };

        if (!isLoading) {
            return <View style={styles.container}>
                <SectionList style={responsiveStyles.list}
                    ListHeaderComponent={
                        <ChangesListFilter<FilterableType> items={filterOptions} onPress={
                            (items, updated) => { this.updateFilterOptions(updated); }
                        } />
                    }
                    renderItem={(obj) => <ChangesListItem model={obj.item} index={obj.index} />}
                    renderSectionHeader={({ section }) => {

                        return <Text h4={true}
                            style={[styles.sectionHeader, section.data.length === 0 ? styles.emptySectionHeader : undefined]}
                        >{section.key}</Text>;
                    }}
                    renderSectionFooter={() => <Divider />}
                    sections={toAgeInDaysSections(filterByType(toModel(changeFeed), filterOptions).slice(0, 100), this.clock)}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => this.loadChangeFeed()} />}
                />
            </View>;
        } else {
            return <View style={styles.loadingContainer}>
                <LoadingSpinner />
            </View>;
        }
    }

    private async loadChangeFeed(): Promise<void> {
        try {
            const changeFeed: ChangeFeed = await this.changeFeedService.getChangeFeed();

            this.setState({ changeFeed, isLoading: false });
        } catch (error) {
            console.error("Error fetching change feed in ChangeScreen.loadChangeFeed", error);
        }
    }

    private updateFilterOptions(updated: Item<FilterableType>): void {
        const filterOptions: Item<FilterableType>[] =
            this.state.filterOptions.map(o => ({ key: o.key, text: o.text, checked: o.key === updated.key ? updated.checked : o.checked }));

        this.setState({ filterOptions });
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

function filterByType(feedModels: ChangeModel[], filterOptions: Item<FilterableType>[]): ChangeModel[] {
    const selected: string[] = filterOptions.filter(o => o.checked).map(o => o.key.toUpperCase());
    if (selected.length === 0) {
        return feedModels;
    }

    return feedModels.filter(fm => selected.includes(fm.changeName.toUpperCase()));
}

enum FilterableType {
    alcohol = "alcohol",
    vintage = "vintage",
    price = "price",
    type = "type",
    packaging = "packaging",
    producer = "producer"
}
