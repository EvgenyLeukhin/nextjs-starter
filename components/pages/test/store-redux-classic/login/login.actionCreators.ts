import { Dispatch } from 'redux';

import {
  LoginActionTypes,
  TLoginActions,
  TLoginErrorAction,
  TLoginLoadingAction,
  TLoginResetAction,
  TLoginSuccessAction,
} from './login.types';
import { TLoginValues, loginService } from '../../api/services/login-sevice';
import {
  // saveUserData,
  setAlertMessage,
  setScreen,
} from '../app/app.actionCreators';
import {
  AppScreens,
  TSaveUserDataAction,
  TSetAlertMessageAction,
  TSetScreenAction,
} from '../app/app.types';
import { Statuses } from '@/types/common';

// loginLoading
export const loginLoading = (payload: boolean): TLoginLoadingAction => ({
  type: LoginActionTypes.LOGIN_LOADING,
  payload,
});

// loginSuccess
export const loginSuccess = (): TLoginSuccessAction => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
});

// loginError
export const loginError = (): TLoginErrorAction => ({
  type: LoginActionTypes.LOGIN_ERROR,
});

// loginReset
export const loginReset = (): TLoginResetAction => ({
  type: LoginActionTypes.LOGIN_RESET,
});

// loginThunk
export function loginThunk(loginData: TLoginValues) {
  return (
    // all types of actions inside
    dispatch: Dispatch<
      | TLoginActions
      | TSetAlertMessageAction
      | TSetScreenAction
      | TSaveUserDataAction
    >,
  ) => {
    // loading
    dispatch(loginLoading(true));

    loginService
      // LOGIN REQUEST
      .logIn(loginData)

      // LOGIN SUCCESS
      .then(res => {
        console.log('res', res);

        dispatch(loginSuccess());
        // dispatch(saveUserData(res));

        // success alert
        dispatch(
          setAlertMessage({
            message: `Login success`,
            status: Statuses.success,
          }),
        );

        // redirect after 1500
        setTimeout(() => {
          dispatch(loginLoading(false));
          dispatch(setScreen(AppScreens.DASHBOARD));
        }, 1500);
      })

      // LOGIN ERROR
      .catch(error => {
        dispatch(loginError());
        dispatch(loginLoading(false));

        // error alert
        dispatch(
          setAlertMessage({ message: `${error}`, status: Statuses.danger }),
        );
      });
  };
}
