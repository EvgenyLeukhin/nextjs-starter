// action types enum
export enum LoginActionTypes {
  LOGIN_LOADING = 'LOGIN_LOADING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

// типизация стейта
export type TLoginState = {
  isLoginLoading: boolean;
  isLoginSuccess: boolean;
  isLoginError: boolean;
  loginErrorMessage: string;
};

// типизация экшенов
export type TLoginLoadingAction = {
  type: LoginActionTypes.LOGIN_LOADING;
};

export type TLoginSuccessAction = {
  type: LoginActionTypes.LOGIN_SUCCESS;
};

export type TLoginErrorAction = {
  type: LoginActionTypes.LOGIN_ERROR;
  payload: string;
};

// экспорт всех типов экшенов
export type TLoginActions =
  | TLoginLoadingAction
  | TLoginSuccessAction
  | TLoginErrorAction;
