import { TUser } from './users.types';

export const USERS_ADD = 'USERS_ADD';
export const USERS_DELETE = 'USERS_DELETE';
export const USERS_DELETE_LAST = 'USERS_DELETE_LAST';
export const USERS_DELETE_ALL = 'USERS_DELETE_ALL';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERROR = 'USERS_ERROR';

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

// action creators
export const addUser = (payload: TUser) => {
  return {
    type: USERS_ADD,
    payload,
  };
};

// shortCut - возврат объекта
export const addUser2 = (payload: TUser) => ({
  type: USERS_ADD,
  payload,
});

export const deleteUser = (payload: TUser) => ({
  type: USERS_DELETE,
  payload,
});

export const deleteAllUsers = () => ({
  type: USERS_DELETE_ALL,
});

export const deleteLastUser = () => ({
  type: USERS_DELETE_LAST,
});
