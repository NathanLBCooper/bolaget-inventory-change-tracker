import React, { Component, ReactElement, ReactNode } from 'react';
import { View, ViewStyle, StyleSheet, TextStyle, FlatList } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { Container } from 'inversify';

import { IChangeFeedService } from '../../services/ChangeFeedService';
import { Article } from '../../services/Article';
import { Accordian } from '../../components/Accordion';

import { ChangeModel } from './ChangeModel';


type Props = {
    model: ChangeModel,
    index: number
};

export class ChangesListItem extends Component<Props> {

    private readonly changeFeedService: IChangeFeedService;

    constructor(props: Props) {
        super(props);

        this.renderFeedItemTitle = this.renderFeedItemTitle.bind(this);
        this.renderFeedItemDetail = this.renderFeedItemDetail.bind(this);

        const serviceLocator: Container = global.serviceLocator;
        this.changeFeedService = serviceLocator.get("IChangeFeedService");
    }

    public render(): ReactNode {
        const feedItemTitle: ReactElement = this.renderFeedItemTitle();
        const feedItemDetail: () => Promise<ReactElement> = async () => this.renderFeedItemDetail();

        const styles: { feedItem: ViewStyle } = {
            feedItem: {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: "rgba(0, 0, 0, 0.12)"
            }
        };

        return <View style={styles.feedItem}><Accordian summary={feedItemTitle} detail={feedItemDetail} /></View>;
    }

    private renderFeedItemTitle(): ReactElement {
        const styles: {
            itemTitle: TextStyle,
            itemSubtitle: TextStyle
        } = {
            itemTitle: {
                fontWeight: "bold"
            },
            itemSubtitle: {
                fontStyle: "italic"
            },
        };

        const { model, index } = this.props;

        const renderNames: () => ReactElement = () => {
            return model.name2 != null && model.name2.length > 0 ?
                <Text><Text style={styles.itemTitle}>{`${model.name2},  `}</Text>{`${model.name}`}</Text> :
                <Text style={styles.itemTitle}>{`${model.name}`}</Text>;
        };

        const renderCategory: () => ReactElement = () => {
            return <Text style={styles.itemSubtitle}>{`${model.category}`}</Text>;
        };

        const renderChange: () => ReactElement = () => {
            return <Text>{`${model.changeName}`}</Text>;
        };

        return <ListItem
            key={index}
            title={
                <View>{renderNames()}{renderCategory()}</View>
            }
            subtitle={`${model.changeName} changed from "${model.oldValue}" to "${model.newValue}"`}
            rightSubtitle={renderChange()}
        />;
    }

    private async renderFeedItemDetail(): Promise<ReactElement> {
        const styles: { itemKey: TextStyle } = {
            itemKey: {
                fontStyle: "italic"
            }
        };

        const { model } = this.props;

        try {
            const article: Article = await this.changeFeedService.getArticle(model.id);

            return <View>
                <FlatList
                    data={[
                        { key: "producer", value: article.producer },
                        { key: "importer", value: article.importer },
                        { key: "origin", value: article.origin },
                        { key: "country of origin", value: article.countryOfOrigin },
                        { key: "packaging", value: article.packaging },
                        { key: "vintage", value: article.vintage },
                        { key: "price", value: article.price },
                        { key: "price per litre", value: article.pricePerLitre },
                        { key: "alcohol", value: article.alcohol },
                        { key: "volume", value: article.volume },
                    ]}
                    renderItem={({ item }) =>
                        <Text><Text style={styles.itemKey}>{item.key}</Text> : <Text>{item.value}</Text></Text>}
                />
            </View>;
        } catch (error) {
            console.error("Error fetching article " + model.id + " in ChangeScreen.loadArticle", error);
            return <View />;
        }
    }
}
