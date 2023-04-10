// import { useSelector, useDispatch } from 'react-redux';
import { useActions, useTypedSelector } from '@/store/redux-classic3';
import styles from './ReduxClassicExample3.module.scss';
import { TUser } from '@/store/redux-classic3/users/users.types';

const ReduxClassicExample3 = () => {
  const { fetchUsers } = useActions();
  const { users } = useTypedSelector(state => state.users);

  return (
    <section className={styles.ReduxClassicExample3}>
      <h3>ReduxClassicExample3</h3>

      <ul>
        {users.map((user: TUser) => (
          <li key={user.id}>{`${user.id} ${user.name}`}</li>
        ))}
      </ul>

      <button onClick={() => fetchUsers()}>Click me</button>
    </section>
  );
};

export default ReduxClassicExample3;
