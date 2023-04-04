import { combineReducers } from 'redux';

import todoList from './todo-list';
import todoApi from './todo-api';
import todoFilter from './todo-filter';

export default combineReducers({
  todoList,
  todoApi,
  todoFilter,
});
