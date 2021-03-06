
import React, { Component, ReactElement, ReactNode } from 'react';
import { View, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from "react-native";
import { Icon } from 'react-native-elements';

type Props = {
    /** The part of this Component which is always shown */
    summary: ReactElement;
    /** The initially hidden part of this Component. Can be passed as a value, as a function or as asynchronous function.
     * The latter two will be evaluated only as the component is expanded
     */
    detail: (ReactElement) | (() => ReactElement) | (() => Promise<ReactElement>);
    /**
     * A marker property for triggering a re-render. Not neccesary when detail is changed.
     * But when using a invokable (lazy) detail, you may want this component to call the same function again because you expect different
     * results.
     */
    rerenderOnData?: {};
    summaryContainerStyle?: StyleProp<ViewStyle>;
    iconStyle?: object;
};

type State = {
    resolvedDetail: ReactElement;
    detailEvaluated: boolean;
    expanded: boolean;
};

export class CollapsingPanel extends Component<Props, State> {
    public state: State = {
        resolvedDetail: undefined,
        detailEvaluated: false,
        expanded: false
    };

    constructor(props:
        {
            summary: ReactElement,
            detail: (ReactElement) | (() => ReactElement) | (() => Promise<ReactElement>),
            rerenderOnData?: {},
            summaryContainerStyle?: StyleProp<ViewStyle>,
            iconStyle?: object
        }
    ) {
        super(props);

        if (props.detail["call"] == null) {
            this.state.detailEvaluated = true;
            this.state.resolvedDetail = this.props.detail as ReactElement;
        }
    }

    public render(): ReactNode {
        const { summary, summaryContainerStyle, iconStyle } = this.props;
        const { resolvedDetail } = this.state;

        const styles: {
            summaryContainer: ViewStyle,
            summaryContent: ViewStyle,
            icon: TextStyle,
            parentHr: ViewStyle
        } = {
            summaryContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            summaryContent: {
                flex: 1
            },
            icon: {
                fontSize: 30
            },
            parentHr: {
                width: '100%'
            }
        };

        return <View>
            <TouchableOpacity style={[styles.summaryContainer, summaryContainerStyle]} onPress={this.toggleExpand}>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    iconStyle={{ ...styles.icon, ...iconStyle }} />
                <View style={styles.summaryContent}>{summary}</View>
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {
                this.state.expanded &&
                <View>
                    {resolvedDetail}
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
                this.state.resolvedDetail = undefined;
            }
        }
    }

    private toggleExpand = () => {
        const expanding: boolean = !this.state.expanded;
        this.setState({ expanded: expanding });

        if (expanding) {
            this.ensureResolved();
        }
    }

    private ensureResolved(force: boolean = false): void {
        if (!force && this.state.detailEvaluated) {
            return;
        }

        if (this.props.detail["call"] == null) {
            this.setState({ detailEvaluated: true, resolvedDetail: this.props.detail as ReactElement });
        } else {
            const invoked: ReactElement | Promise<ReactElement> =
                (this.props.detail as (() => ReactElement | Promise<ReactElement>))();
            Promise.resolve(invoked).then(element => {
                this.setState({
                    detailEvaluated: true, resolvedDetail: element
                });
            });
        }
    }
}
