import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store/redux-classic2/types/AppState';
import { UserType } from '@/store/redux-classic2/types/User';
// import { TodoType } from '@/store-classic/types/Todo';
import useEffectOnce from '@/utils/hooks/useEffectOnce';
import { fetchTodosThunk } from '@/store/redux-classic2/todos/action-creators';
import { fetchUsersThunk } from '@/store/redux-classic2/users/action-creators';
import { Loader } from '@/components/ui';
import styles from './ReduxClassicExample2.module.scss';

// redux
// redux-thunk

const ReduxClassicExample2 = () => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    // @ts-ignore
    dispatch(fetchTodosThunk(10));

    // @ts-ignore
    dispatch(fetchUsersThunk(10));
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
    <section className={styles.ReduxClassicExample2}>
      <h3>Users list</h3>

      <div className={styles.ReduxClassicExample2__userList}>
        {returnUsers()}
      </div>
    </section>
  );
};

export default ReduxClassicExample2;
