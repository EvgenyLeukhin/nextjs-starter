import {
  USERS_ADD,
  USERS_DELETE,
  USERS_DELETE_ALL,
  USERS_DELETE_LAST,
  USERS_ERROR,
  USERS_FETCHING,
  USERS_SUCCESS,
} from './users.actions';

import { TActionUseers, TUsersState } from './users.types';

const initialCounterState: TUsersState = {
  users: [
    {
      id: 1,
      name: 'Username 1',
    },
  ],
  isLoading: false,
  isSucces: false,
  isError: '',
};

// action - это объект с {type: string и payload: data}
export const usersReducer = (
  state = initialCounterState,
  action: TActionUseers,
) => {
  switch (action.type) {
    // USERS_ADD
    case USERS_ADD:
      return { ...state, users: [...state.users, action.payload] };

    // USERS_DELETE
    case USERS_DELETE:
      return {
        ...state,
        users: state.users.filter(users => action.payload?.id !== users.id),
      };

    // USERS_DELETE_LAST
    case USERS_DELETE_LAST:
      return { ...state, users: state.users.slice(0, -1) };

    // USERS_DELETE_ALL
    case USERS_DELETE_ALL:
      return { ...state, users: [] };

    // --------------ACYNC ACTIONS--------------- //

    // USERS_FETCHING
    case USERS_FETCHING:
      return { ...state, isLoading: true };

    // USERS_SUCCESS
    case USERS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true };

    // USERS_ERROR
    case USERS_ERROR:
      return { ...state, isLoading: false, isError: 'Fetch users error' };
    default:
      return state;
  }
};
