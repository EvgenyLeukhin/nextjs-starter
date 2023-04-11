import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store/redux-classic/types/AppState';
import { UserType } from '@/store/redux-classic/types/User';
// import { TodoType } from '@/store-classic/types/Todo';
import useEffectOnce from '@/utils/hooks/useEffectOnce';
import { fetchTodosThunk } from '@/store/redux-classic/todos/action-creators';
import { fetchUsersThunk } from '@/store/redux-classic/users/action-creators';
import { Loader } from '@/components/ui';
import styles from './ReduxClassic.module.scss';

// redux
// redux-thunk

const ReduxClassic = () => {
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
    <section className={styles.ReduxClassic}>
      <h3>Example 1</h3>

      <div className={styles.ReduxClassic__userList}>{returnUsers()}</div>
    </section>
  );
};

export default ReduxClassic;
