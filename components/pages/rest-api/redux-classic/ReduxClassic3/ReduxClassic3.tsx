// import { useSelector, useDispatch } from 'react-redux';
import { useActions, useTypedSelector } from '@/store/redux-classic3';
import { TUser } from '@/store/redux-classic3/users/users.types';
import { TTodo } from '@/store/redux-classic3/todos/todos.types';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './ReduxClassic3.module.scss';

const ReduxClassic3 = () => {
  const cnb = classNames.bind(styles);

  // useTypedSelector хук - можно импортировать любые поля
  const {
    users: { usersList, usersLoading, usersError },
    todos: { todosList, todosLoading, todosError },
  } = useTypedSelector(state => state);

  // useActions хук - можно импортировать любые экшены
  const { fetchUsers, fetchTodos } = useActions();
  const [activePage, setActivePage] = useState<number>(1);

  // onPaginationClick
  const onPaginationClick = (page: number): void => {
    setActivePage(page);
    fetchTodos(page);
  };

  return (
    <section className={styles.ReduxClassic3}>
      <h3>Example 3</h3>

      <section style={{ display: 'flex' }}>
        {/* users */}
        <div>
          <ul>
            {/* loading */}
            {usersLoading && <li>Loading...</li>}

            {/* error */}
            {usersError && <li className='text-danger'>{usersError}</li>}

            {/* users */}
            {usersList.map((user: TUser) => (
              <li key={user.id}>{`${user.id} ${user.name}`}</li>
            ))}
          </ul>

          <button onClick={() => fetchUsers()}>Fetch users</button>
        </div>

        {/* todos */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <ul>
            {/* loading */}
            {todosLoading && <li>Loading...</li>}

            {/* error */}
            {todosError && <li className='text-danger'>{todosError}</li>}

            {/* users */}
            {todosList.map((todo: TTodo) => (
              <li key={todo.id}>{`${todo.id} ${todo.title}`}</li>
            ))}
          </ul>

          <button onClick={() => fetchTodos()}>Fetch todos</button>

          {todosList.length ? (
            <div className={styles.ReduxClassic3__pagination}>
              {[1, 2, 3, 4, 5].map(page => (
                <span
                  key={page}
                  className={cnb(page === activePage && styles.isActive)}
                  onClick={() => onPaginationClick(page)}
                >
                  {page}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default ReduxClassic3;
