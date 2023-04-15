import {
  TDashboardState,
  TDashboardActions,
  DashboardActionTypes,
} from './dashboard.types';

const DashboardInitialState: TDashboardState = {
  isDashboardLoading: false,
  isDashboardSuccess: false,
  isDashboardError: false,
  drugstores: [],
  limit: 50,
  offset: 0,
  page: 0,
  totalCount: 0,
};

export const dashboardReducer = (
  state: TDashboardState = DashboardInitialState,
  action: TDashboardActions,
): TDashboardState => {
  switch (action.type) {
    // DASHBOARD_LOADING
    case DashboardActionTypes.DASHBOARD_LOADING:
      return { ...state, isDashboardLoading: action.payload };

    // DASHBOARD_SUCCESS
    case DashboardActionTypes.DASHBOARD_SUCCESS:
      return {
        ...state,
        isDashboardSuccess: true,
        drugstores: action.payload.drugstores,
        limit: action.payload.pagination.limit,
        offset: action.payload.pagination.offset,
        page: action.payload.pagination.page,
        totalCount: action.payload.pagination.totalCount || 0,
      };

    // DASHBOARD_ERROR
    case DashboardActionTypes.DASHBOARD_ERROR:
      return { ...state, isDashboardError: true };

    // DASHBOARD_RESET
    case DashboardActionTypes.DASHBOARD_RESET:
      return DashboardInitialState;

    // DASHBOARD_PREV_PAGE
    case DashboardActionTypes.DASHBOARD_PREV_PAGE:
      return { ...state, page: state.page - 1 };

    // DASHBOARD_NEXT_PAGE
    case DashboardActionTypes.DASHBOARD_NEXT_PAGE:
      return { ...state, page: state.page + 1 };

    // DEFAULT
    default:
      return state;
  }
};
