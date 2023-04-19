import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import { USER_TOKEN_STORAGE_FIELD } from '../../consts';
import {
  LoginActionTypes,
  TLoginActions,
  TLoginErrorAction,
  TLoginLoadingAction,
  TLoginResetAction,
  TLoginSuccessAction,
} from './login.types';
import {
  TLoginValues,
  loginService,
  // loginService2,
} from '../../api/services/login-sevice';
import {
  saveUserData,
  setAlertMessageThunk,
  setScreen,
} from '../app/app.actionCreators';
import {
  AppScreens,
  TSaveUserDataAction,
  TSetAlertMessageThunkAction,
  TSetScreenAction,
} from '../app/app.types';

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

// loginThunk - THEN-CATCH variant
export function loginThunk(loginData: TLoginValues) {
  return (
    // all types of actions inside
    dispatch: Dispatch<
      | TSetAlertMessageThunkAction
      | TLoginActions
      | TSetScreenAction
      | TSaveUserDataAction
    >,
  ) => {
    // loading
    dispatch(loginLoading(true));

    loginService
      // LOGIN REQUEST
      .logIn(loginData)

      // ========= LOGIN SUCCESS ========= //
      .then(res => {
        dispatch(loginSuccess());

        // save userData to store
        dispatch(saveUserData(res.data));

        const USER_TOKEN = res.data.token;

        // save userData to localStorage
        localStorage.setItem(USER_TOKEN_STORAGE_FIELD, USER_TOKEN);

        // save userToken to cookies
        Cookies.set(
          USER_TOKEN_STORAGE_FIELD,
          'response-headers-blocked-saving',
          { expires: 7 },
        );

        // success alert - thunk indide thunk - ts errror
        dispatch(
          setAlertMessageThunk({
            message: 'Успешный вход',
            type: 'success',
          }) as never,
        );

        // redirect after 1500
        setTimeout(() => {
          dispatch(loginLoading(false));
          dispatch(setScreen(AppScreens.DASHBOARD));
        }, 1500);
      })

      // ========= LOGIN ERROR ========= //
      .catch(error => {
        dispatch(loginError());
        dispatch(loginLoading(false));

        // error alert - thunk indide thunk - ts errror
        // dispatch(
        //   setAlertMessageThunk({
        //     message: `Неверный логин или пароль`,
        //     type: 'error',
        //   }) as never,
        // );

        console.error('Login error', error);
      });
  };
}

// loginThunk2 - ASYNC-AWAIT variant
export function loginThunk2(loginData: TLoginValues) {
  return async (
    dispatch: Dispatch<
      | TSetAlertMessageThunkAction
      | TLoginActions
      | TSetScreenAction
      | TSaveUserDataAction
    >,
  ) => {
    dispatch(loginLoading(true));

    // login reauest
    const response = await loginService.logIn(loginData);

    // ========= LOGIN SUCCESS ========= //
    if (response.status === 200) {
      const responseSuccessData = response.data;
      const USER_TOKEN = responseSuccessData.token;

      // save userData to store
      dispatch(saveUserData(responseSuccessData));

      // save userData to localStorage
      localStorage.setItem(USER_TOKEN_STORAGE_FIELD, USER_TOKEN);

      // save userToken to cookies
      Cookies.set(USER_TOKEN_STORAGE_FIELD, 'response-headers-blocked-saving', {
        expires: 7,
      });

      // success alert - thunk indide thunk - ts errror
      dispatch(
        setAlertMessageThunk({
          message: 'Успешный вход',
          type: 'success',
        }) as never,
      );

      // redirect after 1500
      setTimeout(() => {
        dispatch(loginLoading(false));
        dispatch(setScreen(AppScreens.DASHBOARD));
      }, 1500);

      // ========= LOGIN ERROR ========= //
    } else {
      dispatch(loginError());
      dispatch(loginLoading(false));

      // error alert - thunk indide thunk - ts errror
      // dispatch(
      //   setAlertMessageThunk({
      //     message: `Неверный логин или пароль`,
      //     type: 'error',
      //   }) as never,
      // );

      console.error('Login error', response);

      // error data
      // const responseErrorData = response.response.data;
    }
  };
}
