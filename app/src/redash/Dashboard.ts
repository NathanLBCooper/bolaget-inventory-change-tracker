export class Dashboard {
    public static Make(dto: any): Dashboard {
        return new Dashboard(dto.name, dto.uri, dto.description);
    }

    constructor(
        public name: string,
        public uri: string,
        public description: string
    ) { }
}


