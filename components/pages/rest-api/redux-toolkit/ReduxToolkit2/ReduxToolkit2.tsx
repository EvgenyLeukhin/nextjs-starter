import { useActions, useAppSelector } from '@/store/redux-toolkit2';
import { fetchUsersThunk } from '@/store/redux-toolkit2/users/users.thunks';
import { Loader } from '@/components/ui';
import styles from './ReduxToolkit2.module.scss';
import { useDispatch } from 'react-redux';

const ReduxToolkit2 = () => {
  const dispatch = useDispatch();
  // get state from store by useAppSelector
  const {
    counterStore: { counter },
    usersStore: { users, isLoading },
  } = useAppSelector(state => state);

  // get actions
  const {
    changeCounter,
    clearCounter,
    dicrementCounter,
    incrementCounter,
    usersResetState,
  } = useActions();

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

          {/* users */}
          {users.length
            ? users.map(user => {
                const { id, name, email } = user;

                return (
                  <li key={id}>
                    <b>{`${id}`}</b>
                    &nbsp; &ndash; &nbsp;
                    <span>{name}</span>
                    &nbsp;(<a href={`mailto:${email}`}>{email}</a>)
                  </li>
                );
              })
            : 'No data'}
        </ul>
        &nbsp;
        <button onClick={() => dispatch(fetchUsersThunk() as never)}>
          Fetch users
        </button>
        <button onClick={() => dispatch(usersResetState())}>Clear users</button>
      </div>
    </section>
  );
};

export default ReduxToolkit2;
