import { UsersApiState } from '@/store/redux-classic/types/UserApiState';

import {
  UsersActionTypes,
  SET_FETCHING_USERS,
  SET_FETCH_USERS_ERROR,
  SET_FETCH_USERS_SUCCESS,
  SET_USERS,
} from '../action-types';

const apiInitialReducer: UsersApiState = {
  userList: [],
  isFetching: false,
  error: null,
};

export default (state = apiInitialReducer, action: UsersActionTypes) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, userList: action.users };
    case SET_FETCHING_USERS:
      return { ...state, isFetching: true };
    case SET_FETCH_USERS_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case SET_FETCH_USERS_SUCCESS:
      return { ...state, isFetching: false, error: null };
    default:
      return state;
  }
};
