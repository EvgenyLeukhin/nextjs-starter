import { useSelector, useDispatch } from 'react-redux';
import styles from './ReduxClassic2.module.scss';
import { TActionCount } from '@/store/redux-classic2/counter/counter.types';
import { TActionCash } from '@/store/redux-classic2/cash/cash.types';
import { TRootState } from '@/store/redux-classic2';
import {
  addUser,
  deleteAllUsers,
  deleteUser,
  deleteLastUser,
} from '@/store/redux-classic2/users/users.actionCreators';
import { Loader } from '@/components/ui';
import { fetchUsersThunk } from '@/store/redux-classic2/users/users.thunks';

const ReduxClassic2 = () => {
  const dispatch = useDispatch();

  // counter
  const { counter } = useSelector((state: TRootState) => state.counter);

  // cash
  const { cash } = useSelector((state: TRootState) => state.cash);

  // users
  const { users, isLoading, isError } = useSelector(
    (state: TRootState) => state.users,
  );

  // можно создавать отдельные функции с параметрами для dispatch
  function changeCount(count: number) {
    dispatch<TActionCount>({ type: 'COUNTER_CHANGE', payload: count });
  }

  const randomId = Math.round(Math.random() * 1000);

  return (
    <>
      <h3>Example 2</h3>
      <section className={styles.ReduxClassic2}>
        {/* counter */}
        <div>
          Counter: <b>{counter}</b>
          <h4>Change count</h4>
          <button onClick={() => changeCount(-10)}>-10</button>
          {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: -10 })}>-10</button> */}
          <button
            onClick={() => dispatch<TActionCount>({ type: 'COUNTER_MINUS' })}
          >
            -1
          </button>
          <button
            onClick={() => dispatch<TActionCount>({ type: 'COUNTER_RESET' })}
          >
            X
          </button>
          <button
            onClick={() => dispatch<TActionCount>({ type: 'COUNTER_PLUS' })}
          >
            +1
          </button>
          <button onClick={() => changeCount(10)}>+10</button>
          {/* <button onClick={() => dispatch({ type: 'COUNTER_CHANGE', payload: 10 })}>+10</button> */}
        </div>

        {/* cash */}
        <div>
          Cash: <b>{cash}</b>
          <h4>Change cash</h4>
          <button
            onClick={() =>
              dispatch<TActionCash>({ type: 'CASH_GET', payload: 1000 })
            }
          >
            -1000
          </button>
          <button
            onClick={() =>
              dispatch<TActionCash>({ type: 'CASH_ADD', payload: 1000 })
            }
          >
            +1000
          </button>
        </div>

        {/* users */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: 15 }}>
            Users: <b>{users.length}</b>
          </div>

          {isLoading && <Loader type='type-2' />}
          {isError && <span className='text-danger'>{isError}</span>}

          <ul>
            {users.length
              ? users.map((user, index) => {
                  const { id, name } = user;

                  return (
                    <li key={index}>
                      <span>{`${id} - ${name}`}</span>
                      &nbsp;
                      <b
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(deleteUser({ id, name }))}
                      >
                        X
                      </b>
                    </li>
                  );
                })
              : 'No Users'}
          </ul>

          <button
            onClick={() =>
              // dispatch<TActionusers>({
              //   type: usERS_ADD,
              //   payload: { id: randomId, name: `User Name ${randomId}` },
              // })

              dispatch(
                addUser({
                  id: randomId,
                  name: `User Name ${randomId}`,
                }),
              )
            }
          >
            Add User
          </button>
          {/* @ts-ignore */}
          <button onClick={() => dispatch(fetchUsersThunk())}>
            Fetch Users
          </button>

          <button onClick={() => dispatch(deleteLastUser())}>
            Delete last
          </button>

          <button onClick={() => dispatch(deleteAllUsers())}>Delete all</button>
        </div>
      </section>
    </>
  );
};

export default ReduxClassic2;
