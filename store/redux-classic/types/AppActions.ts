import { TodosActionTypes } from '../todos/action-types';
import { UsersActionTypes } from '../users/action-types';

export type AppActions = TodosActionTypes | UsersActionTypes;
