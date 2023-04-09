import {
  USER_ADD,
  USER_DELETE,
  USER_DELETE_LAST,
  USERS_ADD,
  USERS_DELETE,
  USERS_FETCHING,
  USERS_LOADING,
  USERS_SUCCESS,
  USERS_ERROR,
} from './users.actions';

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
