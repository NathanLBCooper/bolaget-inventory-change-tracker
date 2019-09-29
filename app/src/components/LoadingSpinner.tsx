import React, { Component, ReactNode } from "react";
import { ActivityIndicator, View } from "react-native";

type State = {
    display: boolean;
};

export class LoadingSpinner extends Component {
    public state: State = {
        display: false
    };

    private timeout: number;

    constructor(props: {}) {
        super(props);

        this.timeout = setTimeout(() => {
            this.setState({ display: true });
        }, 1000);
    }

    public render(): ReactNode {
        const {display} = this.state;

        return display ? <ActivityIndicator size={100}/> : <View/>;
    }

    public componentWillUnmount(): void {
        clearTimeout(this.timeout);
    }
}
