export type Category = {
    name: string
    uri: string
};

export function makeCategory(dto: any): Category {
    return {
        name: dto.name,
        uri: dto.uri
    };
}
