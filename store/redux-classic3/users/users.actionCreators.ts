import { Dispatch } from 'redux';
import { IUserActions, TUser, UserActionTypes } from './users.types';
import axios from 'axios';

// ts ругается на action creators
export const fetchUsersStart = () => ({
  type: UserActionTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess = (payload: TUser[]) => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersError = (payload: string) => ({
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload,
});

// users thunks
export function fetchUsers() {
  return (dispatch: Dispatch<IUserActions>) => {
    // dispatch(fetchUsersStart()); // ts error
    dispatch({ type: UserActionTypes.FETCH_USERS_START });

    axios
      .get('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => {
        setTimeout(() => {
          // dispatch(fetchUsersSuccess(res.data)); // ts error
          dispatch({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: res.data,
          });
        }, 1500);
      })
      .catch(() => {
        // dispatch(fetchUsersError('Fetch users error')); // ts error
        dispatch({
          type: UserActionTypes.FETCH_USERS_ERROR,
          payload: 'Fetch users error',
        });
      });
  };
}
