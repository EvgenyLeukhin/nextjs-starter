import { TUser } from './users.types';
import { Dispatch } from 'redux';

// actions types
export const USER_ADD = 'USER_ADD';
export const USER_DELETE = 'USER_DELETE';
export const USER_DELETE_LAST = 'USER_DELETE_LAST';

export const USERS_ADD = 'USERS_ADD';
export const USERS_DELETE = 'USERS_DELETE';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_LOADING = 'USERS_LOADING';
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

// async actions
export function fetchUsersThunk() {
  // dispatch подставляется автоматом через middleware, второй параметр getState()

  // any --> UsersActions
  return function (dispatch: Dispatch<any>) {
    dispatch(usersLoading());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          dispatch(usersSuccess());
          dispatch(addUsers(json));
        }, 1500);
      })
      .catch(() => {
        dispatch(usersError('Fetch users error'));
      });
  };
}
// export const fetchUsersThunk = () => {
//   return function (dispatch: Dispatch<any>) {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       // loading
//       .then(response => {
//         dispatch(usersLoading());
//         response.json();
//       })

//       // if success
//       .then(json => {
//         dispatch(usersSuccess());
//         dispatch(addUsers(json));
//       })

//       // if error
//       .catch(() => {
//         dispatch(usersError('Fetch users error'));
//       });
//   };
// };
