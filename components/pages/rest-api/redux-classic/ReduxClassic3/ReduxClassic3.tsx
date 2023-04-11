// import { useSelector, useDispatch } from 'react-redux';
import { useActions, useTypedSelector } from '@/store/redux-classic3';
import styles from './ReduxClassic3.module.scss';
import { TUser } from '@/store/redux-classic3/users/users.types';

const ReduxClassic3 = () => {
  const { fetchUsers } = useActions();
  const { users, loading, error } = useTypedSelector(state => state.users);

  return (
    <section className={styles.ReduxClassic3}>
      <h3>Example 3</h3>

      <ul>
        {/* loading */}
        {loading && <li>Loading...</li>}

        {/* error */}
        {error && <li className='text-danger'>{error}</li>}

        {/* users */}
        {users.map((user: TUser) => (
          <li key={user.id}>{`${user.id} ${user.name}`}</li>
        ))}
      </ul>

      <button onClick={() => fetchUsers()}>Fetch users</button>
    </section>
  );
};

export default ReduxClassic3;
