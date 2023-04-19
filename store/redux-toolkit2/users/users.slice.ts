import { createSlice } from '@reduxjs/toolkit';
import { TUsersState } from './users.types';

export const initialState: TUsersState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  counter: 0,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // getUsers
    getUsers: () => alert('get users'),

    // changeCounter
    changeCounter: (state, action) => state.counter + action.payload,
  },
});

export default usersSlice.reducer;
