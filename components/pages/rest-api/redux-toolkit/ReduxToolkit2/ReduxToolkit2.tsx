import { useSyncActions, useAppSelector } from '@/store/redux-toolkit2';
import { Loader } from '@/components/ui';
import styles from './ReduxToolkit2.module.scss';

const ReduxToolkit2 = () => {
  // const dispatch = useDispatch();

  // get state from store by useAppSelector
  const {
    counterStore: { counter },
    usersStore: { users, isLoading, isError, errorMessage },
  } = useAppSelector(state => state);

  // get actions
  const {
    changeCounter,
    clearCounter,
    dicrementCounter,
    incrementCounter,
    addRandomUser2,
    clearUsers,
    deleteUser,
    deleteLastUser,
    fetchUsersThunk,
  } = useSyncActions();

  return (
    <section className={styles.ReduxToolkit2}>
      <h2>
        <mark>ReduxToolkit 2</mark>
      </h2>
      {/* count */}
      <div>
        <b>count</b>: {counter}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => changeCounter(-100)}>-100</button>
        <button onClick={() => changeCounter(-10)}>-10</button>
        <button onClick={() => dicrementCounter()}>-1</button>
        <button onClick={() => clearCounter()}>X</button>
        <button onClick={() => incrementCounter()}>+1</button>
        <button onClick={() => changeCounter(10)}>+10</button>
        <button onClick={() => changeCounter(100)}>+100</button>
      </div>
      &nbsp;&nbsp;&nbsp;
      {/* users */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <b>users</b>:
        <ul style={{ margin: 0, paddingLeft: 8, listStyle: 'none' }}>
          {/* loading */}
          {isLoading && <Loader />}

          {/* error */}
          {isError && <span className='text-danger'>{`${errorMessage}`}</span>}

          {/* users */}
          {users.length
            ? users.map(user => {
                const { id, name, email } = user;

                return (
                  <li key={id}>
                    <b>{`${id}`}</b>
                    &nbsp; &ndash; &nbsp;
                    <span>{name}</span>
                    &nbsp;(<a href={`mailto:${email}`}>{email}</a>) &nbsp;
                    <b
                      style={{ cursor: 'pointer' }}
                      onClick={() => deleteUser(id)}
                    >
                      X
                    </b>
                  </li>
                );
              })
            : 'No data'}
        </ul>
        &nbsp;
        {/* buttons */}
        <button onClick={() => fetchUsersThunk()}>Fetch users</button>
        <button onClick={() => addRandomUser2()}>Add random user</button>
        <button onClick={() => clearUsers()}>Clear users</button>
        <button onClick={() => deleteLastUser()}>Delete last</button>
        <button onClick={() => clearUsers()}>Clear users</button>
      </div>
    </section>
  );
};

export default ReduxToolkit2;
