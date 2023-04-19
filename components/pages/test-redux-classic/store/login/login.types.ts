// action types enum
export enum LoginActionTypes {
  LOGIN_LOADING = 'LOGIN_LOADING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGIN_RESET = 'LOGIN_RESET',
}

// типизация стейта
export type TLoginState = {
  isLoginLoading: boolean;
  isLoginSuccess: boolean;
  isLoginError: boolean;
};

// типизация экшенов
export type TLoginLoadingAction = {
  type: LoginActionTypes.LOGIN_LOADING;
  payload: boolean;
};

export type TLoginSuccessAction = {
  type: LoginActionTypes.LOGIN_SUCCESS;
};

export type TLoginErrorAction = {
  type: LoginActionTypes.LOGIN_ERROR;
};

export type TLoginResetAction = {
  type: LoginActionTypes.LOGIN_RESET;
};

// экспорт всех типов экшенов
export type TLoginActions =
  | TLoginLoadingAction
  | TLoginSuccessAction
  | TLoginErrorAction
  | TLoginResetAction;
