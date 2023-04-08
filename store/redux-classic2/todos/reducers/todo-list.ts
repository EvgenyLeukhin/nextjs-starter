import { TodoType } from '@/store/redux-classic2/types/Todo';
import {
  TodosActionTypes,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_TODOS,
} from '../action-types';

const todosInitialReducer: Array<TodoType> = [];

export default (
  state = todosInitialReducer,
  action: TodosActionTypes,
): Array<TodoType> => {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    case EDIT_TODO:
      return [...state, action.todo];
    case REMOVE_TODO: {
      const removableId = action.todo.id;

      return state.filter(({ id }) => id !== removableId);
    }
    case SET_TODOS:
      return action.todos;
    default:
      return state;
  }
};
