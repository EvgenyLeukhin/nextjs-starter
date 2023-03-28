// https://www.youtube.com/watch?v=WRKEjPq75BY&t=593s
import { useEffect, useState } from 'react';
import { TAxiosErrorData, getUsers } from '@/api/servicies';
import { TUser } from '@/types/user';
import { Loader } from '@/components/ui';
import styles from './UsersTableExample.module.scss';

const UsersTableExample = () => {
  const [data, setData] = useState<TUser[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string>('');

  // showError
  const showError = (error: TAxiosErrorData) => {
    const { statusCode, message } = error;
    setDataError(`${statusCode} - ${message}`);
  };

  useEffect(() => {
    // loading true
    setDataLoading(true);

    // getUsers
    getUsers(undefined, showError).then(data => {
      setData(data);

      // loading false
      setDataLoading(false);
    });
  }, []);

  // returnData
  const returnData = () => {
    return data?.map((user: TUser, index: number) => {
      const { id, name, surname, email, company, location } = user;

      // userData object
      const userData = {
        id,
        name,
        email,
        company,
        location,
      };

      // array of userData keys (for map headers)
      const userDataKeys = Object.keys(userData);

      return (
        <>
          {/* return data headers */}
          {index === 0 && (
            <tr key={id} style={{ textAlign: 'left' }}>
              {userDataKeys.map((key, index) => {
                return <th key={index}>{key}</th>;
              })}
            </tr>
          )}

          {/* return data content */}
          <tr key={id}>
            <td>{id}</td>
            <td>{`${name} ${surname}`}</td>
            <td>{email}</td>
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
        </>
      );
    });
  };

  return (
    <section className={styles.UsersTableExample}>
      <h2>UsersTableExample</h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {dataLoading ? (
          <Loader />
        ) : data?.length ? (
          // if data --> show data
          <table style={{ width: '100%' }}>{returnData()}</table>
        ) : dataError ? (
          // if request error --> show error
          <div className='text-danger' style={{ alignSelf: 'center' }}>
            {dataError}
          </div>
        ) : (
          // if no data --> show message
          'No data to show'
        )}
      </div>
    </section>
  );
};

export default UsersTableExample;
