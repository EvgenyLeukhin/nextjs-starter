import { Dispatch } from 'redux';

import {
  addUsers,
  usersError,
  usersLoading,
  usersSuccess,
} from './users.actionCreators';

// async actions
export function fetchUsersThunk() {
  // dispatch подставляется автоматом через middleware, второй параметр getState()

  // any --> UsersActions
  return function (dispatch: Dispatch<any>) {
    dispatch(usersLoading());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          dispatch(usersSuccess());
          dispatch(addUsers(json));
        }, 1500);
      })
      .catch(() => {
        dispatch(usersError('Fetch users error'));
      });
  };
}
