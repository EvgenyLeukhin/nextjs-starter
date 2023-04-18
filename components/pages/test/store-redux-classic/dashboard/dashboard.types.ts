// action types enum
export enum DashboardActionTypes {
  DASHBOARD_LOADING = 'DASHBOARD_LOADING',
  DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS',
  DASHBOARD_ERROR = 'DASHBOARD_ERROR',
  DASHBOARD_RESET = 'DASHBOARD_RESET',
  DASHBOARD_PREV_PAGE = 'DASHBOARD_PREV_PAGE',
  DASHBOARD_NEXT_PAGE = 'DASHBOARD_NEXT_PAGE',
  DASHBOARD_SET_LIMIT = 'DASHBOARD_SET_LIMIT',
}

export type TDrugsore = {
  id: number;
  address: string;
  name: string;
  tel: string;
  email: string;
  regionId: number;
  partnerCode: number;
};

export type TPagination = {
  limit: number;
  offset: number;
  page: number;
  totalCount?: number;
};

// типизация стейта
export type TDashboardState = {
  isDashboardLoading: boolean;
  isDashboardSuccess: boolean;
  isDashboardError: boolean;
  drugstores: TDrugsore[];
  limit: number;
  offset: number;
  page: number;
  totalCount: number;
};

// типизация экшенов
export type TDashboardLoadingAction = {
  type: DashboardActionTypes.DASHBOARD_LOADING;
  payload: boolean;
};

export type TDashboardSuccessAction = {
  type: DashboardActionTypes.DASHBOARD_SUCCESS;
  payload: {
    drugstores: TDrugsore[];
    pagination: TPagination;
  };
};

export type TDashboardErrorAction = {
  type: DashboardActionTypes.DASHBOARD_ERROR;
};

export type TDashboardResetAction = {
  type: DashboardActionTypes.DASHBOARD_RESET;
};

export type TDashboardPrevPageAction = {
  type: DashboardActionTypes.DASHBOARD_PREV_PAGE;
};

export type TDashboardNextPageAction = {
  type: DashboardActionTypes.DASHBOARD_NEXT_PAGE;
};

export type TDashboardSetLimitAction = {
  type: DashboardActionTypes.DASHBOARD_SET_LIMIT;
  payload: number;
};

// экспорт всех типов экшенов
export type TDashboardActions =
  | TDashboardLoadingAction
  | TDashboardSuccessAction
  | TDashboardErrorAction
  | TDashboardResetAction
  | TDashboardPrevPageAction
  | TDashboardNextPageAction
  | TDashboardSetLimitAction;
