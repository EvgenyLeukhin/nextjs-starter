import axios from 'axios';
import { TUser } from './users.types';
import { Dispatch } from '@reduxjs/toolkit';
import { usersSlice } from './users.slice';

const {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
  usersResetState,
} = usersSlice.actions;

export const fetchUsersThunk = () => async (dispatch: Dispatch) => {
  dispatch(usersResetState);
  dispatch(usersFetching(true));

  try {
    // dispatch(usersResetState);
    const response = await axios.get<TUser[]>(
      'https://jsonplaceholder.typicode.com/users',
    );

    setTimeout(() => {
      dispatch(usersFetching(false));
      dispatch(usersFetchingSuccess(response.data));
    }, 1000);
  } catch (e) {
    dispatch(usersFetching(false));
    dispatch(usersFetchingError(`${e}`));
    throw new Error(`${e}`);
  }
};
