export type Change = {
    name: string;
    oldValue: string;
    newValue: string;
};

export function makeChange(dto: any): Change {
    return {
        name: dto.name,
        oldValue: dto.oldValue,
        newValue: dto.newValue
    };
}
