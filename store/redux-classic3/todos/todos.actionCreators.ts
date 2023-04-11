import axios from 'axios';
import { ITodosActions, TodosActionsTypes } from './todos.types';
import { Dispatch } from 'react';

export function fetchTodos(page = 1, limit = 10) {
  return (dispatch: Dispatch<ITodosActions>) => {
    dispatch({ type: TodosActionsTypes.FETCH_TODOS_START });

    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      .then(res => {
        setTimeout(() => {
          dispatch({
            type: TodosActionsTypes.FETCH_TODOS_SUCCESS,
            payload: res.data,
          });
        }, 1500);
      })
      .catch(() => {
        dispatch({
          type: TodosActionsTypes.FETCH_TODOS_ERROR,
          payload: 'Fetch todos error',
        });
      });
  };
}

export function setTodosPage(page: number): ITodosActions {
  return {
    type: TodosActionsTypes.SET_TODOS_PAGE,
    payload: page,
  };
}
