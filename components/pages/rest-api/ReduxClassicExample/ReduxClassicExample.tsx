import { useDispatch, useSelector } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';
import { AppState } from '@/store-classic/types/AppState';
import { UserType } from '@/store-classic/types/User';
import { TodoType } from '@/store-classic/types/Todo';
import useEffectOnce from '@/utils/hooks/useEffectOnce';
import { fetchTodosThunk } from '@/store-classic/todos/action-creators';
import { fetchUsersThunk } from '@/store-classic/users/action-creators';

// redux
// redux-thunk

const ReduxClassicExample = () => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    // fetch Actions
    dispatch(fetchTodosThunk(10) as any);
    dispatch(fetchUsersThunk(10) as any);
  });

  const todos: Array<TodoType> = useSelector(
    (state: AppState) => state.todos.todoList,
  );
  const users: Array<UserType> = useSelector(
    (state: AppState) => state.users.userList,
  );

  console.log('todos', todos);
  console.log('users', users);

  return (
    <section className={styles.ReduxClassicExample}>
      <h2>Redux Classic Example</h2>
    </section>
  );
};

export default ReduxClassicExample;
