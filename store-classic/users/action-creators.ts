import { Dispatch } from 'redux';
import axios from 'axios';

import {
  UsersActionTypes,
  SET_USERS,
  SET_FETCHING_USERS,
  SET_FETCH_USERS_ERROR,
  SET_FETCH_USERS_SUCCESS,
} from './action-types';

import { AppActions } from '../types/AppActions';
import { UserType } from '../types/User';

export const setUsers = (users: Array<UserType>): UsersActionTypes => ({
  type: SET_USERS,
  users,
});

export const setFetchingUsers = (): UsersActionTypes => ({
  type: SET_FETCHING_USERS,
});

export const setFetchUsersError = (error: string): UsersActionTypes => ({
  type: SET_FETCH_USERS_ERROR,
  error,
});

export const setFetchUsersSuccess = (): UsersActionTypes => ({
  type: SET_FETCH_USERS_SUCCESS,
});

export const fetchUsersThunk =
  (limit = 10) =>
  async (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(setFetchingUsers());
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?limit=${limit}`,
      );
      dispatch(setFetchUsersSuccess());
      dispatch(setUsers(response.data));
    } catch (err: any) {
      dispatch(setFetchUsersError(err.message));
    }
  };
