import { Dashboard } from "./Dashboard";

export class DashboardResponse {
    public static Make(dto: any): DashboardResponse {
        return new DashboardResponse((dto.data as any[]).map(c => Dashboard.Make(c)));
    }

    constructor(
        public data: Dashboard[]
    ) { }
}
