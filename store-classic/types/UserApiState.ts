import { UserType } from './User';

export type UsersApiState = {
  userList: Array<UserType>;
  isFetching: boolean;
  error: string | null;
};
