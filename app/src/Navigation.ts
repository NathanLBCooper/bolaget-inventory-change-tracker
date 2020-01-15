export interface INavigation {
    navigate(routeName: string, parameters?: any) : void;
    getParam<T>(paramName: string, defaultValue: T): T;
}
