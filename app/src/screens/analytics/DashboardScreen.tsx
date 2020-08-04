import React, { Component, ReactNode } from "react";
import { View, Platform, ViewStyle, TextStyle } from "react-native";
import { Text } from "react-native-elements";
import { WebView } from 'react-native-webview';

import { INavigation } from "../../Navigation";
import { LoadingSpinner } from "../../components/LoadingSpinner";

type Props = {
    navigation: INavigation
};

type State = {
    url: string;
    hasLoaded: boolean;
    hasError: boolean;
};

export class DashboardScreen extends Component<Props, State> {
    public state: State = {
        url: undefined,
        hasLoaded: false,
        hasError: false
    };

    constructor(props: Props) {
        super(props);
    }

    public async componentDidMount(): Promise<void> {
        const url: string = this.props.navigation.getParam("url", undefined);
        if (url == null) {
            console.error("Error reading property url");
            this.setState({ hasError: true });
            return;
        }

        this.setState({ url, hasLoaded: true, hasError: false });
    }

    public render(): ReactNode {
        const { url, hasLoaded, hasError } = this.state;

        const styles: {
            loadingContainer: ViewStyle,
            errorContainer: ViewStyle,
            errorMessage: TextStyle
        } = {
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

        if (hasLoaded) {
            return <View style={{ flex: 1 }}>
                {
                    Platform.OS === "web" ?
                        <iframe
                            src={url}
                            style={{ height: "100%" }} /> :
                        <WebView source={{ uri: url }} style={{ height: "100%" }} />
                }
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
}
