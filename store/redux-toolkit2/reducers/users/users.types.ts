export type TUser = {
  id: number;
  name: string;
  email: string;
};

export type TUsersState = {
  users: TUser[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};
