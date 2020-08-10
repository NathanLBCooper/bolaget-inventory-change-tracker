export type Dashboard = {
    name: string,
    uri: string,
    description: string
};

export function makeDashboard(dto: any): Dashboard {
    return {
        name: dto.name,
        uri: dto.uri,
        description: dto.description
    };
}
