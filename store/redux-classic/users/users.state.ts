import { TUsersState } from './users.types';

export const usersInitialState: TUsersState = {
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
