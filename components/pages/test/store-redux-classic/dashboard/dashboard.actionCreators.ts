import { Dispatch } from 'redux';
import {
  DashboardActionTypes,
  TDashboardErrorAction,
  TDashboardLoadingAction,
  TDashboardResetAction,
  TDashboardSuccessAction,
  TDrugsore,
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
export const dashboardSuccess = (
  payload: TDrugsore[],
): TDashboardSuccessAction => ({
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

// loginThunk2 - ASYNC-AWAIT variant
export function getDrugstores(requestParams: TGetDrugstoresParams) {
  return async (dispatch: Dispatch) => {
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
