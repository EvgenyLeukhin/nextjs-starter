// https://www.youtube.com/watch?v=WRKEjPq75BY&t=593s
import { useEffect, useState } from 'react';
import { getUsers, getUsersCount } from '@/api/servicies/users';
import { TUser } from '@/types/user';
import { Loader } from '@/components/ui';
import { DebounceInput } from 'react-debounce-input';
import { TAxiosErrorData } from '@/types/api';
import classNames from 'classnames/bind';
import styles from './UsersTable.module.scss';

const UsersTable = () => {
  const cnb = classNames.bind(styles);

  const [data, setData] = useState<TUser[]>([]);
  const [dataCount, setDataCount] = useState<number>(0);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string | undefined>(undefined);

  // for pagination
  const [rowsToShow, setRowsToShow] = useState<number>(20);
  const [paginationPagesCount, setPaginationPagesCount] = useState<number>(0);
  const [paginationActivePage, setPaginationActivePage] = useState<number>(1);

  // showError
  const showError = (error: TAxiosErrorData) => {
    const { statusCode, message } = error;
    setDataLoading(false);
    setDataError(`${statusCode} - ${message}`);
  };

  // data request
  useEffect(() => {
    // loading true
    setDataLoading(true);

    // getUsersCount
    getUsersCount(filterValue, showError).then(count => {
      // if data
      if (count) {
        setDataCount(count);

        // calculate pagination pages
        setPaginationPagesCount(Math.ceil(count / rowsToShow));

        // getUsers if count (filterValue doesn't work)
        getUsers(filterValue, showError, {
          rowsToShow,
          paginationActivePage,
        }).then(data => {
          setData(data);

          // loading false
          setDataLoading(false);
        });

        // if no data (reset state)
      } else {
        setDataLoading(false);
        setDataCount(0);
        setData([]);
        setPaginationPagesCount(0);
      }
    });
  }, [filterValue, rowsToShow, paginationActivePage, paginationPagesCount]);

  // returnTableHeaders
  const returnTableHeaders = () => {
    // hardcode columns
    const colums = ['id', 'name', 'email', 'company', 'location'];

    return (
      <tr style={{ textAlign: 'left' }}>
        {colums.map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
    );
  };

  // returnTableDataLayout
  const returnTableDataLayout = () => {
    return data?.map((user: TUser) => {
      const { id, name, surname, email, company, location } = user;

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{`${name} ${surname}`}</td>
          <td>
            <a className='text-primary' href={`mailto:${email}`}>
              {email}
            </a>
          </td>
          <td
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {company?.logo && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company?.logo}
                  alt={company?.name}
                  width={20}
                  height='auto'
                />
                &nbsp;
              </>
            )}
            <span>{company?.name}</span>
          </td>
          <td>{`${location?.name}, ${location?.country}`}</td>
        </tr>
      );
    });
  };

  // returnPagination
  const returnPagination = (pagesCount: number) => {
    if (pagesCount) {
      const pages = [];

      // convert pagesCount to array (3 --> [1, 2, 3])
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }

      const pagesNumbers = pages.map(page => (
        <span
          key={page}
          className={cnb(page === paginationActivePage && styles.active)}
          onClick={() => {
            setPaginationActivePage(page);
          }}
        >
          {page}
        </span>
      ));

      return (
        <>
          {/* prev arrow */}
          <span
            className={cnb(
              styles.prev,
              paginationActivePage === 1 && styles.disabled,
            )}
            onClick={() => setPaginationActivePage(paginationActivePage - 1)}
          >
            &lt;
          </span>

          {/* pagination number */}
          {pagesNumbers}

          {/* next arrow */}
          <span
            className={cnb(
              styles.next,
              paginationActivePage === paginationPagesCount && styles.disabled,
            )}
            onClick={() => setPaginationActivePage(paginationActivePage + 1)}
          >
            &gt;
          </span>
        </>
      );
    }
  };

  return (
    <section className={styles.UsersTable}>
      {/* title */}
      <h2>Users Table Example</h2>

      <div className={styles.UsersTable__filter}>
        {/* filter */}
        <DebounceInput
          placeholder='Enter id, username or email'
          debounceTimeout={800}
          type='text'
          value={filterValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === '') {
              setFilterValue(undefined);
            } else {
              setFilterValue(e.target.value);
            }
          }}
        />

        {/* count */}
        <div className={styles.UsersTable__count}>
          Total users count: <b>{`${!dataLoading ? dataCount : '...'}`}</b>
        </div>

        {/* rows to show */}
        <div className={styles.UsersTable__rowsToShow}>
          <select
            value={rowsToShow}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setRowsToShow(Number(e.target.value));
              setPaginationActivePage(1);
            }}
          >
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
            <option value={50}>50 rows</option>
            <option value={100}>100 rows</option>
          </select>
        </div>

        {/* pagination */}
        <div className={styles.UsersTable__pagination}>
          {returnPagination(paginationPagesCount)}
        </div>
      </div>

      <div className={styles.UsersTable__tableContainer}>
        {/* loader */}
        {dataLoading ? (
          <div className={styles.UsersTable__loader}>
            <Loader />
          </div>
        ) : data?.length ? (
          // if data --> show data
          <>
            {/* table */}
            <table className={styles.UsersTable__table}>
              <thead>{returnTableHeaders()}</thead>
              <tbody>{returnTableDataLayout()}</tbody>
            </table>
          </>
        ) : dataError ? (
          // if request error --> show error
          <div className={styles.UsersTable__error}>{dataError}</div>
        ) : (
          // if no data --> show message
          <div className={styles.UsersTable__noData}>No data to show</div>
        )}
      </div>
    </section>
  );
};

export default UsersTable;
