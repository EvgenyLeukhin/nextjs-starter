import {
  USER_ADD,
  USER_DELETE,
  USERS_DELETE,
  USER_DELETE_LAST,
  USERS_ADD,
  USERS_LOADING,
  USERS_SUCCESS,
  USERS_ERROR,
} from './users.actions';

import { TActionUsers, TUsersState } from './users.types';

const initialCounterState: TUsersState = {
  users: [
    {
      id: 0,
      name: 'Username 0',
    },
  ],
  isLoading: false,
  isSucces: false,
  isError: '',
};

// action - это объект с {type: string и payload: data}
export const usersReducer = (
  state = initialCounterState,
  action: TActionUsers,
) => {
  switch (action.type) {
    // USERS_ADD
    case USER_ADD:
      return { ...state, users: [...state.users, action.payload] };

    // USERS_DELETE
    case USER_DELETE:
      return {
        ...state,
        users: state.users.filter(user => action?.payload?.id !== user.id),
      };

    // USERS_DELETE_LAST
    case USER_DELETE_LAST:
      return { ...state, users: state.users.slice(0, -1) };

    // USERS_DELETE
    case USERS_DELETE:
      return { ...state, users: [] };

    // --------------ACYNC ACTIONS--------------- //

    // USERS_FETCHING
    case USERS_ADD:
      return { ...state, users: [...state.users, ...action.payload] };
    // return { ...state, isLoading: true };

    // USERS_SUCCESS
    case USERS_LOADING:
      return { ...state, isLoading: true };

    // USERS_SUCCESS
    case USERS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true };

    // USERS_ERROR
    case USERS_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
};
