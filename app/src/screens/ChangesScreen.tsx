import React, { ReactElement } from "react";
import { View, SectionList, SectionListData, StyleSheet, Dimensions, ViewStyle, TextStyle } from "react-native";
import { ListItem, Text, Divider } from "react-native-elements";
import { Container } from "inversify";
import { Dayjs } from "dayjs";

import { IClock } from "../lib/clock";
import { IChangeFeedService } from "../services/ChangeFeedService";
import { ChangeFeed } from "../services/ChangeFeed";
import { Change } from "../services/Change";
import { ChangeCollection } from "../services/ChangeCollection";
import { ChangeFeedItem } from "../services/ChangeFeedItem";
import { LoadingSpinner } from "../components/LoadingSpinner";
import * as MediaPxWidths from "../style/MediaPxWidths";
import { Accordian } from "../components/Accordion";
import { Article } from "../services/Article";

const styles: {
    container: ViewStyle,
    sectionHeader: TextStyle,
    emptySectionHeader: TextStyle,
    loadingContainer: ViewStyle,
    feedItem: ViewStyle,
    items: {
        title: TextStyle,
        subtitle: TextStyle
    }
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
    feedItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(0, 0, 0, 0.12)"
    },
    items: {
        title: {
            fontWeight: "bold"
        },
        subtitle: {
            fontStyle: "italic"
        }
    }
};

type State = {
    changeFeed: ChangeFeed;
    isLoading: boolean;
    width: number
}

export class ChangesScreen extends React.Component {
    public state: State = {
        changeFeed: undefined,
        isLoading: true,
        width: undefined
    };

    private readonly changeFeedService: IChangeFeedService;
    private readonly clock: IClock;

    constructor(props: {}) {
        super(props);

        this.renderFeedItem = this.renderFeedItem.bind(this);
        this.renderFeedItemTitle = this.renderFeedItemTitle.bind(this);
        this.renderFeedItemDetail = this.renderFeedItemDetail.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.changeFeedService = serviceLocator.get("IChangeFeedService");
        this.clock = serviceLocator.get("IClock");

        const { width } = Dimensions.get("window");
        this.state.width = width;
        Dimensions.addEventListener("change", (e) => { this.setState({ width: e.window.width }) });
    }

    public async componentDidMount(): Promise<void> { await this.loadChangeFeed(); }

    public render(): React.ReactNode {
        const { changeFeed, isLoading, width } = this.state;

        const responsiveStyles: any = StyleSheet.create({
            list: {
                width: width > MediaPxWidths.TabletsInLandscape ? "80%" : undefined,
                alignItems: width > MediaPxWidths.TabletsInLandscape ? "center" : undefined
            }
        });

        if (!isLoading) {
            return <View style={styles.container}>
                <SectionList style={responsiveStyles.list}
                    renderItem={this.renderFeedItem}
                    renderSectionHeader={({ section }) => {

                        return <Text h4={true}
                            style={[styles.sectionHeader, section.data.length === 0 ? styles.emptySectionHeader : undefined]}
                        >{section.key}</Text>
                    }}
                    renderSectionFooter={() => <Divider />}
                    sections={toAgeInDaysSections(toModel(changeFeed), this.clock)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        } else {
            return <View style={styles.loadingContainer}>
                <LoadingSpinner />
            </View>
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

    private renderFeedItem(obj: { item: ChangeModel, index: number }): React.ReactElement {
        const feedItemTitle: React.ReactElement = this.renderFeedItemTitle(obj);
        const feedItemDetail: () => Promise<React.ReactElement> = async () => this.renderFeedItemDetail(obj);

        return <View style={styles.feedItem}><Accordian summary={feedItemTitle} detail={feedItemDetail} /></View>;
    }

    private renderFeedItemTitle(obj: { item: ChangeModel, index: number }): React.ReactElement {
        const renderNames: (_: ChangeModel) => ReactElement = (model) => {
            return model.name2 != null && model.name2.length > 0 ?
                <Text><Text style={styles.items.title}>{`${model.name2},  `}</Text>{`${model.name}`}</Text> :
                <Text style={styles.items.title}>{`${model.name}`}</Text>;
        }

        const renderCategory: (_: ChangeModel) => ReactElement = (model) => {
            return <Text style={styles.items.subtitle}>{`${model.category}`}</Text>
        }

        const renderChange: (_: ChangeModel) => ReactElement = (model) => {
            return <Text>{`${model.changeName}`}</Text>
        }

        return <ListItem
            key={obj.index}
            title={
                <View>{renderNames(obj.item)}{renderCategory(obj.item)}</View>
            }
            subtitle={`${obj.item.changeName} changed from "${obj.item.oldValue}" to "${obj.item.newValue}"`}
            rightSubtitle={renderChange(obj.item)}
        />
    }

    private async renderFeedItemDetail(obj: { item: ChangeModel, index: number }): Promise<React.ReactElement> {
        try {
            const article: Article = await this.changeFeedService.getArticle(obj.item.id);

            return <View>
                <Text>Todo</Text>
                <Text>{article.name}</Text>
            </View>
        } catch (error) {
            console.error("Error fetching article " + obj.item.id + " in ChangeScreen.loadArticle", error);
            return <View>
                <Text>Todo</Text>
                <Text>error stuff</Text>
            </View>;
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
    ])
}

class ChangeModel {
    public static Make(item: ChangeFeedItem, changeCollection: ChangeCollection, change: Change): ChangeModel {
        return new ChangeModel(
            item.id, item.name, item.name2, item.category, item.uri,
            changeCollection.timestamp,
            change.name, change.oldValue, change.newValue
        );
    }

    constructor(
        public id: number,
        public name: string,
        public name2: string,
        public category: string,
        public uri: string,
        public timeStamp: Dayjs,
        public changeName: string,
        public oldValue: string,
        public newValue: string
    ) { }
}
