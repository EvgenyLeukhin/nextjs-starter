import { TodoFilter } from '@/store-redux-classic/types/TodoFilter';
import {
  TodosActionTypes,
  SET_FILTER,
  SET_FILTER_ORDER,
  SET_FILTER_SEARCH_TEXT,
} from '../action-types';

const apiInitialReducer: TodoFilter = {
  name: 'none',
  order: 'asc',
  searchText: '',
};

export default (state = apiInitialReducer, action: TodosActionTypes) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, name: action.name };
    case SET_FILTER_ORDER:
      return { ...state, order: action.order };
    case SET_FILTER_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
};
