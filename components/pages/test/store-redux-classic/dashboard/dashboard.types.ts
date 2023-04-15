// action types enum
export enum DashboardActionTypes {
  DASHBOARD_LOADING = 'DASHBOARD_LOADING',
  DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS',
  DASHBOARD_ERROR = 'DASHBOARD_ERROR',
  DASHBOARD_RESET = 'DASHBOARD_RESET',
}

export type TDrugsore = {
  id: number;
  name: string;
};

// типизация стейта
export type TDashboardState = {
  isDashboardLoading: boolean;
  isDashboardSuccess: boolean;
  isDashboardError: boolean;
  drugstores: TDrugsore[];
  drugstoresPagination: {
    limit: number;
    offset: number;
    page: number;
    totalCount?: number;
  };
};

// типизация экшенов
export type TDashboardLoadingAction = {
  type: DashboardActionTypes.DASHBOARD_LOADING;
  payload: boolean;
};

export type TDashboardSuccessAction = {
  type: DashboardActionTypes.DASHBOARD_SUCCESS;
  payload: TDrugsore[];
};

export type TDashboardErrorAction = {
  type: DashboardActionTypes.DASHBOARD_ERROR;
};

export type TDashboardResetAction = {
  type: DashboardActionTypes.DASHBOARD_RESET;
};

// экспорт всех типов экшенов
export type TDashboardActions =
  | TDashboardLoadingAction
  | TDashboardSuccessAction
  | TDashboardErrorAction
  | TDashboardResetAction;
