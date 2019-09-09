import React from "react";
import { ActivityIndicator, View } from "react-native";

type State = {
    display: boolean;
}

export class LoadingSpinner extends React.Component {
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

    public render(): React.ReactNode {
        const {display} = this.state;

        return display ? <ActivityIndicator size={100}/> : <View/>
    }

    public componentWillUnmount(): void {
        clearTimeout(this.timeout);
    }
}
