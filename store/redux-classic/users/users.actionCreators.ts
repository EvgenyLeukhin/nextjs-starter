// actions types
import {
  TUser,
  USERS_ADD,
  USERS_DELETE,
  USERS_ERROR,
  USERS_LOADING,
  USERS_SUCCESS,
  USER_ADD,
  USER_DELETE,
  USER_DELETE_LAST,
} from './users.types';

// action creators
export const addUser = (payload: TUser) => {
  return {
    type: USER_ADD,
    payload,
  };
};

// shortCut - возврат объекта
export const addUser2 = (payload: TUser) => ({
  type: USER_ADD,
  payload,
});

export const deleteUser = (payload: TUser) => ({
  type: USER_DELETE,
  payload,
});

export const deleteLastUser = () => ({
  type: USER_DELETE_LAST,
});

export const deleteAllUsers = () => ({
  type: USERS_DELETE,
});

export const addUsers = (payload: TUser[]) => ({
  type: USERS_ADD,
  payload,
});

export const usersLoading = () => ({
  type: USERS_LOADING,
});

export const usersSuccess = () => ({
  type: USERS_SUCCESS,
});

export const usersError = (payload: string) => ({
  type: USERS_ERROR,
  payload,
});

// action creators нужны для сокращения кода, чтобы постоянно не записывать тип экшена
// и не допустить возможные ошибки
// dispatch<TActionUsers>({
//   type: USERS_ADD,
//   payload: { id: randomId, name: `User Name ${randomId}` },
// })

// dispatch(
//   addUserAction({
//     id: randomId,
//     name: `User Name ${randomId}`,
//   }),
// );
