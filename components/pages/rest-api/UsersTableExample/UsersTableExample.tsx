// https://www.youtube.com/watch?v=WRKEjPq75BY&t=593s
import { useEffect, useState } from 'react';
import { TAxiosErrorData, getUsers, getUsersCount } from '@/api/servicies';
import { TUser } from '@/types/user';
import { Loader } from '@/components/ui';
import { DebounceInput } from 'react-debounce-input';
import styles from './UsersTableExample.module.scss';

const UsersTableExample = () => {
  const [data, setData] = useState<TUser[]>([]);
  const [dataCount, setDataCount] = useState<TUser[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
  // const [rowsToShow, setRowsToShow] = useState<number>(0); // for pagination

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
      if (count) {
        setDataCount(count);

        // getUsers if count (filterValue doesn't work)
        getUsers(filterValue, showError).then(data => {
          setData(data);

          // loading false
          setDataLoading(false);
        });
      }
    });
  }, [filterValue]);

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

  // returnData
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

  return (
    <section className={styles.UsersTableExample}>
      {/* title */}
      <h2>UsersTableExample</h2>

      <div className={styles.UsersTableExample__filter}>
        {/* filter */}
        <DebounceInput
          placeholder='Enter username or email'
          debounceTimeout={800}
          type='text'
          value={filterValue}
          onChange={e => {
            if (e.target.value === '') {
              setFilterValue(undefined);
            } else {
              setFilterValue(e.target.value);
            }
          }}
        />

        {/* count */}
        <div className={styles.UsersTableExample__count}>
          Total users count: <b>{`${dataCount}`}</b>
        </div>
      </div>

      <div className={styles.UsersTableExample__tableContainer}>
        {/* loader */}
        {dataLoading ? (
          <div className={styles.UsersTableExample__loader}>
            <Loader />
          </div>
        ) : data?.length ? (
          // if data --> show data
          <>
            {/* table */}
            <table className={styles.UsersTableExample__table}>
              <thead>{returnTableHeaders()}</thead>
              <tbody>{returnTableDataLayout()}</tbody>
            </table>
          </>
        ) : dataError ? (
          // if request error --> show error
          <div className={styles.UsersTableExample__error}>{dataError}</div>
        ) : (
          // if no data --> show message
          <div className={styles.UsersTableExample__noData}>
            No data to show
          </div>
        )}
      </div>
    </section>
  );
};

export default UsersTableExample;
