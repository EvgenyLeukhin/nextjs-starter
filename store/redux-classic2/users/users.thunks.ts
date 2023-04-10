import { Dispatch } from 'redux';

import {
  addUsers,
  usersError,
  usersLoading,
  usersSuccess,
} from './users.actionCreators';
import axios from 'axios';

// async actions
export function fetchUsersThunk() {
  // dispatch подставляется автоматом через middleware, второй параметр getState()

  // any --> UsersActions
  return function (dispatch: Dispatch<any>) {
    dispatch(usersLoading());

    axios
      .get('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => {
        setTimeout(() => {
          dispatch(usersSuccess());
          dispatch(addUsers(res.data));
        }, 1500);
      })
      .catch(() => {
        dispatch(usersError('Fetch users error'));
      });
  };
}
