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

    resetUsersState(state) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
    },

    // usersLoading
    usersLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    // usersFetchingSuccess
    usersSuccess(state, { payload }: PayloadAction<TUser[]>) {
      state.isSuccess = true;
      state.users = payload;
    },

    // usersFetchingError
    usersError(state, { payload }: PayloadAction<string>) {
      state.isError = true;
      state.errorMessage = payload;
    },

    // clearUsers
    clearUsers(state) {
      state.users = [];
    },

    // addRandomUser
    addRandomUser(state) {
      state.users.push({
        id: Math.round(Math.random() * 10000),
        name: 'asdfasdf',
        email: 'asdfasdf@mail.ru',
      });
    },

    // addRandomUser2 - 2 variant
    // (при такой записи нужно всегда возвращать стейт ...state);
    addRandomUser2: state => {
      const randomId = Math.round(Math.random() * 10000);
      const userObj = {
        id: randomId,
        name: `username-${randomId}`,
        email: `username${randomId}@mail.com`,
      };

      return {
        ...state, // возвращаем стейт
        users: [...state.users, userObj], // модифцируем поле стейта
      };
    },

    // deleteUser
    deleteUser(state, { payload }: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== payload);
    },

    // deleteUser2 - 2 variant
    deleteUser2: (state, action) => {
      return {
        // возвращаем стейт
        ...state,

        // модифцируем поле стейта
        users: state.users.filter(user => user.id !== action.payload),
      };
    },

    // deleteLastUser
    deleteLastUser(state) {
      state.users.pop();
    },
  },
});
