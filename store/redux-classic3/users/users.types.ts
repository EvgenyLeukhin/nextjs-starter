// export const FETCH_USERS = 'FETCH_USERS';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export enum UserActionTypes {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export type TUser = {
  id: number;
  name: string;
};

export interface IUserState {
  users: TUser[]; // never[]  any[]
  loading: boolean;
  error: null | string;
}

interface IFetchUsersStartAction {
  type: UserActionTypes.FETCH_USERS_START;
}

// type: typeof FETCH_USERS_SUCCESS; // можно через typeof
interface IFetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: TUser[];
}

interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type IUserActions =
  | IFetchUsersStartAction
  | IFetchUsersSuccessAction
  | IFetchUsersErrorAction;
