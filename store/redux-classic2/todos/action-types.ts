import { FilterName, FilterOrder } from '../types/TodoFilter';
import { TodoType } from '../types/Todo';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const SET_FETCHING_TODOS = 'SET_FETCHING_TODOS';
export const SET_FETCH_TODOS_SUCCESS = 'SET_FETCH_TODOS_SUCCESS';
export const SET_FETCH_TODOS_ERROR = 'SET_FETCH_TODOS_ERROR';
export const SET_FILTER = 'SET_FILTER';
export const SET_FILTER_ORDER = 'SET_FILTER_ORDER';
export const SET_FILTER_SEARCH_TEXT = 'SET_FILTER_SEARCH_TEXT';

export type AddTodoAction = {
  type: typeof ADD_TODO;
  todo: TodoType;
};

export type EditTodoAction = {
  type: typeof EDIT_TODO;
  todo: TodoType;
};

export type RemoveTodoAction = {
  type: typeof REMOVE_TODO;
  todo: TodoType;
};

export type SetTodosAction = {
  type: typeof SET_TODOS;
  todos: Array<TodoType>;
};

export type SetFetchingTodosAction = {
  type: typeof SET_FETCHING_TODOS;
};

export type SetFetchTodosSuccessAction = {
  type: typeof SET_FETCH_TODOS_SUCCESS;
};

export type SetFetchTodosErrorAction = {
  type: typeof SET_FETCH_TODOS_ERROR;
  error: string;
};

export type setFilter = {
  type: typeof SET_FILTER;
  name: FilterName;
};

export type setFilterOrder = {
  type: typeof SET_FILTER_ORDER;
  order: FilterOrder;
};

export type setFilterSearchText = {
  type: typeof SET_FILTER_SEARCH_TEXT;
  searchText: string;
};

export type TodosActionTypes =
  | SetTodosAction
  | EditTodoAction
  | RemoveTodoAction
  | AddTodoAction
  | SetFetchingTodosAction
  | SetFetchTodosSuccessAction
  | SetFetchTodosErrorAction
  | setFilter
  | setFilterOrder
  | setFilterSearchText;
