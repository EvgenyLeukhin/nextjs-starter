import { ITodosActions, ITodosState, TodosActionsTypes } from './todos.types';

const todosInitialState: ITodosState = {
  todosList: [],
  todosLoading: false,
  todosError: null,
  todosPage: 1,
  todosLimit: 20,
};

export const todosReducer = (
  state: ITodosState = todosInitialState,
  action: ITodosActions,
): ITodosState => {
  switch (action.type) {
    case TodosActionsTypes.FETCH_TODOS_START:
      return { ...state, todosList: [], todosLoading: true, todosError: null };
    case TodosActionsTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todosList: action.payload,
        todosLoading: false,
        todosError: null,
      };
    case TodosActionsTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        todosList: [],
        todosLoading: false,
        todosError: action.payload,
      };
    case TodosActionsTypes.SET_TODOS_PAGE:
      return { ...state, todosPage: action.payload };
    default:
      return state;
  }
};
