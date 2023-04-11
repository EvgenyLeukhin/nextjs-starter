import { IUsersActions, IUsersState, UserActionTypes } from './users.types';

const usersInitialState: IUsersState = {
  usersList: [],
  usersLoading: false,
  usersError: null,
};

export const userReducer = (
  state: IUsersState = usersInitialState,
  action: IUsersActions,
): IUsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_START:
      return { usersList: [], usersLoading: true, usersError: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        usersList: action.payload,
        usersLoading: false,
        usersError: null,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { usersList: [], usersLoading: false, usersError: action.payload };
    default:
      return state;
  }
};
