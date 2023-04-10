import { TodoApiState } from '../../types/TodoApiState';
import {
  TodosActionTypes,
  SET_FETCHING_TODOS,
  SET_FETCH_TODOS_ERROR,
  SET_FETCH_TODOS_SUCCESS,
} from '../action-types';

const apiInitialReducer: TodoApiState = {
  isFetching: false,
  error: null,
};

export default (state = apiInitialReducer, action: TodosActionTypes) => {
  switch (action.type) {
    case SET_FETCHING_TODOS:
      return { ...state, isFetching: true };
    case SET_FETCH_TODOS_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case SET_FETCH_TODOS_SUCCESS:
      return { ...state, isFetching: false, error: null };
    default:
      return state;
  }
};
