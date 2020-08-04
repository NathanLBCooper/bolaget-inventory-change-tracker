export class Category {
    public static Make(dto: any): Category {
        return new Category(dto.name, dto.uri);
    }
    constructor(public name: string, public uri: string) { }
}
