export class Change {
    public static Make(dto: any): Change {
        return new Change(dto.name, dto.oldValue, dto.newValue);
    }
    constructor(
        public name: string,
        public oldValue: string,
        public newValue: string
    ) { }
}
