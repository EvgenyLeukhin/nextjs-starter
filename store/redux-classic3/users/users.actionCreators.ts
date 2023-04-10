import { Dispatch } from 'redux';
import { IUserActions, TUser, UserActionTypes } from './users.types';

const addUsers = (payload: TUser[]) => ({
  type: UserActionTypes.FETCH_USERS,
  payload,
});

const errorUsers = (payload: TUser[]) => ({
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload,
});

export function fetchUsers() {
  return (dispatch: Dispatch<IUserActions>) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: json }),
      );
  };
}
