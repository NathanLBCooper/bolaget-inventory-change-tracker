import { Dashboard, makeDashboard } from "./Dashboard";

export type DashboardResponse = {
    data: Dashboard[];
};

export function makeDashboardResponse(dto: any): DashboardResponse {
    return {
        data: dto.data == null ? [] : (dto.data as any[]).map(c => makeDashboard(c))
    };
}
