import {
  LoginActionTypes,
  TLoginErrorAction,
  TLoginLoadingAction,
  TLoginSuccessAction,
} from './login.types';

// loginLoading
export const loginLoading = (): TLoginLoadingAction => ({
  type: LoginActionTypes.LOGIN_LOADING,
});

// loginSuccess
export const loginSuccess = (): TLoginSuccessAction => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
});

// loginError
export const loginError = (payload: string): TLoginErrorAction => ({
  type: LoginActionTypes.LOGIN_ERROR,
  payload,
});
