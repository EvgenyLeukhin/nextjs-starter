import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUsersState } from './users.types';

const usersInitialState: TUsersState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const usersSlice = createSlice({
  name: 'users',

  // initial state
  initialState: usersInitialState,

  // reducer with actions
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});
