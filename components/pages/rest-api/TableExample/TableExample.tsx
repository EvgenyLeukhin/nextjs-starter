import { useEffect, useState } from 'react';
import { getUsers } from '@/api/servicies';
import { TUser } from '@/types/user';
import { Loader } from '@/components/ui';
import styles from './TableExample.module.scss';

const TableExample = () => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  // const [dataError, setDataError] = useState<boolean>(false);

  useEffect(() => {
    // loading true
    setDataLoading(true);

    // getUsers
    getUsers().then(data => {
      setData(data);

      // loading false
      setDataLoading(false);
    });
  }, []);

  // returnData
  const returnData = () => {
    return data.map((user: TUser, index: number) => {
      const { id, name, surname, email, company, location } = user;

      // userData object
      const userData = {
        id,
        name,
        email,
        company,
        location,
      };

      // userData keys to map headers
      const userDataKeys = Object.keys(userData);

      return (
        <>
          {index === 0 && (
            <tr key={id} style={{ textAlign: 'left' }}>
              {userDataKeys.map((key, index) => {
                return <th key={index}>{key}</th>;
              })}
            </tr>
          )}

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
    <section className={styles.TableExample}>
      <h2>TableExample</h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {dataLoading ? <Loader /> : <table>{returnData()}</table>}
      </div>
    </section>
  );
};

export default TableExample;
