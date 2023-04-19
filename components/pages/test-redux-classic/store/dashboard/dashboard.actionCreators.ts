import { Dispatch } from 'redux';
import {
  DashboardActionTypes,
  TDashboardErrorAction,
  TDashboardLoadingAction,
  TDashboardNextPageAction,
  TDashboardPrevPageAction,
  TDashboardResetAction,
  TDashboardSetLimitAction,
  TDashboardSuccessAction,
  TDrugsore,
  TPagination,
} from './dashboard.types';

import {
  TGetDrugstoresParams,
  dashboardService,
} from '../../api/services/dashboard-sevice';
import { setAlertMessageThunk } from '../app/app.actionCreators';

// dashboardLoading
export const dashboardLoading = (
  payload: boolean,
): TDashboardLoadingAction => ({
  type: DashboardActionTypes.DASHBOARD_LOADING,
  payload,
});

// dashboardSuccess
export const dashboardSuccess = (payload: {
  drugstores: TDrugsore[];
  pagination: TPagination;
}): TDashboardSuccessAction => ({
  type: DashboardActionTypes.DASHBOARD_SUCCESS,
  payload,
});

// dashboardError
export const dashboardError = (): TDashboardErrorAction => ({
  type: DashboardActionTypes.DASHBOARD_ERROR,
});

// dashboardReset
export const dashboardReset = (): TDashboardResetAction => ({
  type: DashboardActionTypes.DASHBOARD_RESET,
});

// dashboardPrevPage
export const dashboardPrevPage = (): TDashboardPrevPageAction => ({
  type: DashboardActionTypes.DASHBOARD_PREV_PAGE,
});

// dashboardNextPage
export const dashboardNextPage = (): TDashboardNextPageAction => ({
  type: DashboardActionTypes.DASHBOARD_NEXT_PAGE,
});

// dashboardSetLimit
export const dashboardSetLimit = (
  payload: number,
): TDashboardSetLimitAction => ({
  type: DashboardActionTypes.DASHBOARD_SET_LIMIT,
  payload,
});

// loginThunk2 - ASYNC-AWAIT variant
export function getDrugstoresThunk(requestParams: TGetDrugstoresParams) {
  return async (
    dispatch: Dispatch<
      TDashboardLoadingAction | TDashboardSuccessAction | TDashboardErrorAction
    >,
  ) => {
    // loading on
    dispatch(dashboardLoading(true));

    // get request
    const response = await dashboardService.getDrugstores(requestParams);

    // ========= GET DRUGSTORES SUCCESS ========= //
    if (response.status === 200) {
      const responseSuccessData = response.data;

      // loading off
      dispatch(dashboardLoading(false));

      // save userData to store
      dispatch(dashboardSuccess(responseSuccessData));

      // ========= GET DRUGSTORES ERROR ========= //
    } else {
      dispatch(dashboardLoading(false));
      dispatch(dashboardError());

      dispatch<any>(
        setAlertMessageThunk({
          message: `${response}`,
          type: 'error',
        }),
      );

      console.error('Get drugstores error', response);
    }
  };
}
