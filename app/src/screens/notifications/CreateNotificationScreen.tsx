import React, { Component, ReactNode } from "react";
import { View, TextStyle, ViewStyle, ScrollView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import MultiSelect from 'react-native-multiple-select';
import { Container } from "inversify";

import { INavigation } from "../../Navigation";
import { Article } from "../../inventory/Article";
import { IInventoryApi } from "../../inventory/InventoryApi";
import { LoadingSpinner } from "../../components/LoadingSpinner";

type Props = {
    navigation: INavigation
};

type State = {
    article: Article;
    hasError: boolean;
    hasLoaded: boolean;
    hasSubmitted: boolean;
    selectedFields: string[];
};

export class CreateNotificationScreen extends Component<Props, State> {
    public state: State = {
        article: undefined,
        hasError: false,
        hasLoaded: false,
        hasSubmitted: false,
        selectedFields: []
    };

    private readonly InventoryApi: IInventoryApi;

    constructor(props: Props) {
        super(props);

        const serviceLocator: Container = global.serviceLocator;
        this.InventoryApi = serviceLocator.get("IInventoryApi");
    }

    public async componentDidMount(): Promise<void> {
        const articleId: number = this.props.navigation.getParam("articleId", -1);
        if (articleId == null) {
            console.error("Error reading property articleId");
            this.state.hasError = true;
            return;
        }

        await this.loadArticle(articleId);
    }

    public render(): ReactNode {
        const styles: {
            container: ViewStyle,
            formInputContainer: ViewStyle,
            formInput: ViewStyle,
            intraInputText: TextStyle,
            label: TextStyle,
            submitButton: ViewStyle,
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
            container: {
                flex: 1,
                paddingHorizontal: 10
            },
            formInputContainer: {
                paddingVertical: 8
            },
            formInput: {
                paddingVertical: 5
            },
            intraInputText: {
                color: "rgb(134, 147, 158)",
                fontSize: 20,
                fontWeight: "bold",
                paddingVertical: 10,
                paddingHorizontal: 10
            },
            label: {
                color: "rgb(134, 147, 158)",
                fontSize: 16,
                fontWeight: "bold",
                paddingHorizontal: 10
            },
            submitButton: {
                marginHorizontal: 10
            },
            loadingContainer: {
                flex: 1,
                justifyContent: "center"
            },
            errorContainer: {
                flex: 1,
            },
            errorMessage: {
                margin: "auto",
                width: "50%",
                textAlign: "center"
            }
        };

        const fieldOptions: {
            name: string;
            id: number;
        }[] = [
                { name: "Id", id: 10 },
                { name: "ArticleId", id: 11 },
                { name: "Name", id: 12 },
                { name: "Name2", id: 13 },
                { name: "Producer", id: 14 },
                { name: "Importer", id: 15 },
                { name: "Type", id: 16 },
                { name: "Category", id: 17 },
                { name: "Origin", id: 18 },
                { name: "Country of Origin", id: 19 },
                { name: "Packaging", id: 20 },
                { name: "Vintage", id: 21 },
                { name: "Price", id: 22 },
                { name: "Price per Litre", id: 23 },
                { name: "Alcohol", id: 24 },
                { name: "Volume", id: 25 },
                { name: "Expired", id: 26 },
                { name: "History", id: 27 },
                { name: "Timestamp", id: 28 }
            ];

        const { article, hasLoaded, hasError, hasSubmitted, selectedFields } = this.state;

        if (hasLoaded) {
            return <View style={styles.container}>
                <ScrollView>
                    <View style={styles.formInputContainer}>
                        <Text style={styles.intraInputText}>Notify me when...</Text>
                        <Input containerStyle={styles.formInput} label="When this article changes" value={article.name}
                            disabled={true} />
                        <View style={styles.formInput}>
                            <Text style={styles.label}>and the change is to one of these fields</Text>
                            <ScrollView>
                                <MultiSelect
                                    items={fieldOptions}
                                    uniqueKey="id"
                                    selectedItems={selectedFields}
                                    onSelectedItemsChange={selected => { this.setState({ selectedFields: selected }); }}
                                    styleMainWrapper={{ marginVertical: 15, paddingHorizontal: 10 }}
                                    styleListContainer={{ width: 200 }}
                                    styleTextDropdown={{ paddingHorizontal: 10 }}
                                    selectText="Choose one or more of these fields"
                                    submitButtonText="Choose"
                                    submitButtonColor="rgb(32, 137, 220)"
                                    textInputProps={{ editable: false }}
                                    searchInputPlaceholderText=""
                                    searchIcon={false}
                                    fixedHeight={true}
                                />
                            </ScrollView>
                        </View>
                    </View>
                    <Button style={styles.submitButton} title="Notify me" disabled={selectedFields.length < 1 || hasSubmitted}
                        onPress={() => this.setState({ hasSubmitted: true })} />
                    <Text style={hasSubmitted ? { color: "red", textAlign: "center", padding: 30 } : { display: "none" }}>
                        Whoops! Looks like our lazy developers haven't implemented this yet. Sorry!</Text>
                </ScrollView>
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

    private async loadArticle(articleId: number): Promise<void> {
        try {
            const article: Article = await this.InventoryApi.getArticle(articleId);
            this.setState({ article, hasLoaded: true });
        } catch (error) {
            console.error("Error fetching article in CreateNotification.loadArticle", error);
            this.setState({ hasError: true });
        }
    }
}

