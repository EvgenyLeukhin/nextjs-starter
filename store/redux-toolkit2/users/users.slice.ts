import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TUsersState } from './users.types';

const usersInitialState: TUsersState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

// creater slice
export const usersSlice = createSlice({
  name: 'users',

  // initial state
  initialState: usersInitialState,

  // reducer with actions
  reducers: {
    // setLoading
    // setLoading: (state, { payload }: PayloadAction<boolean>) => {
    //   return {
    //     ...state,
    //     isLoading: payload,
    //   };
    // },

    // usersLoading
    usersResetState(state) {
      state.users = [];
    },

    // usersLoading
    usersFetching(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    // usersFetchingSuccess
    usersFetchingSuccess(state, { payload }: PayloadAction<TUser[]>) {
      state.isSuccess = true;
      state.users = payload;
    },

    // usersFetchingError
    usersFetchingError(state, { payload }: PayloadAction<string>) {
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});
