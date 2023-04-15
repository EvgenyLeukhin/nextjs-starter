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
  drugstoresPagination: {
    limit: 50,
    offset: 0,
    page: 0,
    totalCount: undefined,
  },
};

export const DashboardReducer = (
  state: TDashboardState = DashboardInitialState,
  action: TDashboardActions,
): TDashboardState => {
  switch (action.type) {
    // DASHBOARD_LOADING
    case DashboardActionTypes.DASHBOARD_LOADING:
      return { ...state, isDashboardLoading: action.payload };

    // DASHBOARD_SUCCESS
    case DashboardActionTypes.DASHBOARD_SUCCESS:
      return { ...state, isDashboardSuccess: true, drugstores: action.payload };

    // DASHBOARD_ERROR
    case DashboardActionTypes.DASHBOARD_ERROR:
      return { ...state, isDashboardError: true };

    // DASHBOARD_RESET
    case DashboardActionTypes.DASHBOARD_RESET:
      return DashboardInitialState;

    // DEFAULT
    default:
      return state;
  }
};
