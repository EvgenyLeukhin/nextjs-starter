export const USER_ADD = 'USER_ADD';
export const USER_DELETE = 'USER_DELETE';
export const USER_DELETE_LAST = 'USER_DELETE_LAST';
export const USERS_ADD = 'USERS_ADD';
export const USERS_DELETE = 'USERS_DELETE';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_LOADING = 'USERS_LOADING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERROR = 'USERS_ERROR';

export type TUser = {
  id: number;
  name: string;
};

export type TUsersState = {
  users: TUser[];
  isLoading?: boolean;
  isSucces?: boolean;
  isError?: string;
};

export type TActionUsers = {
  type:
    | typeof USER_ADD
    | typeof USER_DELETE
    | typeof USER_DELETE_LAST
    | typeof USERS_ADD
    | typeof USERS_DELETE
    | typeof USERS_FETCHING
    | typeof USERS_LOADING
    | typeof USERS_SUCCESS
    | typeof USERS_ERROR;
  payload?: any;
};
