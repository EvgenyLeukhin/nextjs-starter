import { useDispatch, useSelector } from 'react-redux';
import styles from './ReduxClassicExample.module.scss';
import { AppState } from '@/store-classic/types/AppState';
import { UserType } from '@/store-classic/types/User';
// import { TodoType } from '@/store-classic/types/Todo';
import useEffectOnce from '@/utils/hooks/useEffectOnce';
import { fetchTodosThunk } from '@/store-classic/todos/action-creators';
import { fetchUsersThunk } from '@/store-classic/users/action-creators';
import { Loader } from '@/components/ui';

// redux
// redux-thunk

const ReduxClassicExample = () => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    // fetch Actions
    dispatch(fetchTodosThunk(10) as any);
    dispatch(fetchUsersThunk(10) as any);
  });

  // const todos: Array<TodoType> = useSelector((state: AppState) => {
  //   return state.todos.todoList;
  // });

  // get users state from the store
  const users = useSelector((state: AppState) => state.users);

  const { isFetching, error, userList } = users;

  const returnUsers = () => {
    // loading
    if (isFetching) {
      return <Loader />;
    }

    // error
    if (error) {
      return <span>{`${error}`}</span>;
    }

    // get data
    if (userList.length) {
      return userList.map((user: UserType) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <a href={`mailto:${user.email}`}>{user.email}</a>
          <i>{user.username}</i>
        </div>
      ));
    } else return 'No data';
  };

  return (
    <section className={styles.ReduxClassicExample}>
      <h2>Redux Classic Example</h2>

      <div className={styles.ReduxClassicExample__userList}>
        {returnUsers()}
      </div>
    </section>
  );
};

export default ReduxClassicExample;
