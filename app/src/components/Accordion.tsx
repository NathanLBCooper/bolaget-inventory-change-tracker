
import React, { Component, ReactElement, ReactNode } from 'react';
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { Icon } from 'react-native-elements';

const styles: {
    summaryRow: ViewStyle,
    summary: ViewStyle,
    icon: TextStyle,
    parentHr: ViewStyle,
    child: ViewStyle,
} = {
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    summary: {
        flex: 1
    },
    icon: {
        fontSize: 30
    },
    parentHr: {
        height: 1,
        width: '100%'
    },
    child: {
        padding: 16,
    },
};

type Props = {
    summary: ReactElement;
    detail: (ReactElement) | (() => ReactElement) | (() => Promise<ReactElement>);
    rerenderOnData?: {};
};

type State = {
    detail: ReactElement;
    detailEvaluated: boolean;
    expanded: boolean;
};

export class Accordian extends Component<Props> {
    public state: State = {
        detail: undefined,
        detailEvaluated: false,
        expanded: false
    };

    constructor(props:
        {
            summary: ReactElement,
            detail: (ReactElement) | (() => ReactElement) | (() => Promise<ReactElement>),
            rerenderOnData?: {}
        }
    ) {
        super(props);

        if (props.detail["call"] == null) {
            this.state.detailEvaluated = true;
            this.state.detail = this.props.detail as ReactElement;
        }
    }

    public render(): ReactNode {
        const { summary } = this.props;
        const { detail } = this.state;

        return <View>
            <TouchableOpacity style={styles.summaryRow} onPress={this.toggleExpand}>
                <View style={styles.summary}>{summary}</View>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {
                this.state.expanded &&
                <View style={styles.child}>
                    {detail}
                </View>
            }
        </View>;
    }

    public componentDidUpdate(prevProps: Props): void {
        if (!this.state.detailEvaluated) {
            return;
        }

        if (prevProps.detail !== this.props.detail ||
            prevProps.rerenderOnData !== this.props.rerenderOnData) {
            if (this.state.expanded) {
                this.ensureResolved(true);
            } else {
                this.state.detailEvaluated = false;
                this.state.detail = undefined;
            }
        }
    }

    public ensureResolved(force: boolean = false): void {
        if (!force && this.state.detailEvaluated) {
            return;
        }

        if (this.props.detail["call"] == null) {
            this.setState({ detailEvaluated: true, detail: this.props.detail as ReactElement });
        } else {
            const invoked: ReactElement | Promise<ReactElement> =
                (this.props.detail as (() => ReactElement | Promise<ReactElement>))();
            Promise.resolve(invoked).then(element => {
                this.setState({
                    detailEvaluated: true, detail: element
                });
            });
        }
    }

    public toggleExpand = () => {
        const expanding: boolean = !this.state.expanded;
        this.setState({ expanded: expanding });

        if (expanding) {
            this.ensureResolved();
        }
    }
}
