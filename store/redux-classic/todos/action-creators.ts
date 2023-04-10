import { Dispatch } from 'redux';
import axios from 'axios';

import {
  TodosActionTypes,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_TODOS,
  SET_FETCHING_TODOS,
  SET_FETCH_TODOS_SUCCESS,
  SET_FETCH_TODOS_ERROR,
  SET_FILTER,
  SET_FILTER_ORDER,
  SET_FILTER_SEARCH_TEXT,
} from './action-types';

import { AppActions } from '../types/AppActions';
import { FilterName, FilterOrder } from '../types/TodoFilter';
import { TodoType } from '../types/Todo';

export const addTodo = (todo: TodoType): TodosActionTypes => ({
  type: ADD_TODO,
  todo,
});

export const editTodo = (todo: TodoType): TodosActionTypes => ({
  type: EDIT_TODO,
  todo,
});

export const removeTodo = (todo: TodoType): TodosActionTypes => ({
  type: REMOVE_TODO,
  todo,
});

export const setTodos = (todos: TodoType[]): TodosActionTypes => ({
  type: SET_TODOS,
  todos,
});

export const setFetchingTodos = (): TodosActionTypes => ({
  type: SET_FETCHING_TODOS,
});

export const setFetchTodosSuccess = (): TodosActionTypes => ({
  type: SET_FETCH_TODOS_SUCCESS,
});

export const setFetchTodosError = (error: string): TodosActionTypes => ({
  type: SET_FETCH_TODOS_ERROR,
  error,
});

export const setFilter = (name: FilterName): TodosActionTypes => ({
  type: SET_FILTER,
  name,
});

export const setFilterOrder = (order: FilterOrder) => ({
  type: SET_FILTER_ORDER,
  order,
});

export const setFilterSearchText = (searchText: string) => ({
  type: SET_FILTER_SEARCH_TEXT,
  searchText,
});

export const fetchTodosThunk =
  (limit = 10) =>
  async (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(setFetchingTodos());

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?limit=${limit}`,
      );

      dispatch(setFetchTodosSuccess());

      dispatch(setTodos(response.data));
    } catch (err: any) {
      dispatch(setFetchTodosError(err.message));
    }
  };
