import { UserType } from '../types/User';

export const SET_USERS = 'SET_USERS';
export const SET_FETCHING_USERS = 'SET_FETCHING_TODOS';
export const SET_FETCH_USERS_SUCCESS = 'SET_FETCH_TODOS_SUCCESS';
export const SET_FETCH_USERS_ERROR = 'SET_FETCH_TODOS_ERROR';

export type SetUsersAction = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export type SetFetchingUsersAction = {
  type: typeof SET_FETCHING_USERS;
};

export type SetFetchUsersSuccess = {
  type: typeof SET_FETCH_USERS_SUCCESS;
};

export type SetFetchUsersError = {
  type: typeof SET_FETCH_USERS_ERROR;
  error: string;
};

export type UsersActionTypes =
  | SetUsersAction
  | SetFetchingUsersAction
  | SetFetchUsersError
  | SetFetchUsersSuccess;
