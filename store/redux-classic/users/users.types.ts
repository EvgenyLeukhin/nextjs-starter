import {
  USERS_ADD,
  USERS_DELETE,
  USERS_DELETE_ALL,
  USERS_DELETE_LAST,
  USERS_ERROR,
  USERS_FETCHING,
  USERS_SUCCESS,
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

export type TActionUseers = {
  type:
    | typeof USERS_ADD
    | typeof USERS_DELETE
    | typeof USERS_DELETE_LAST
    | typeof USERS_DELETE_ALL
    | typeof USERS_FETCHING
    | typeof USERS_SUCCESS
    | typeof USERS_ERROR;
  payload?: TUser;
};
