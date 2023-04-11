export type TTodo = {
  id: number;
  title: string;
};

export interface ITodosState {
  todosList: TTodo[];
  todosLoading: boolean;
  todosError: null | string;
  todosPage: number;
  todosLimit: number;
}

export enum TodosActionsTypes {
  FETCH_TODOS_START = 'FETCH_TODOS_START',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

interface IFetchTodosStart {
  type: TodosActionsTypes.FETCH_TODOS_START;
}

interface IFetchTodosSuccess {
  type: TodosActionsTypes.FETCH_TODOS_SUCCESS;
  payload: TTodo[];
}

interface IFetchTodosError {
  type: TodosActionsTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface ISetTodosPage {
  type: TodosActionsTypes.SET_TODOS_PAGE;
  payload: number;
}

export type ITodosActions =
  | IFetchTodosStart
  | IFetchTodosSuccess
  | IFetchTodosError
  | ISetTodosPage;
