import { IUserActions, IUserState, UserActionTypes } from './users.types';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: IUserActions,
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
