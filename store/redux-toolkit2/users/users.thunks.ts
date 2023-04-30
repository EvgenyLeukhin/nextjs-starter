import axios from 'axios';
import { TUser } from './users.types';
import { Dispatch } from '@reduxjs/toolkit';
import { usersSlice } from './users.slice';

const { usersLoading, usersSuccess, usersError, resetUsersState } =
  usersSlice.actions;

export const fetchUsersThunk = () => async (dispatch: Dispatch) => {
  dispatch(resetUsersState());
  dispatch(usersLoading(true));

  try {
    // response typing
    const response = await axios.get<TUser[]>(
      'https://jsonplaceholder.typicode.com/users2',
    );

    // if success
    setTimeout(() => {
      dispatch(usersLoading(false));
      dispatch(usersSuccess(response.data));
    }, 1000);

    // if error
  } catch (e) {
    dispatch(usersLoading(false));
    dispatch(usersError(`${e}`));
  }
};
