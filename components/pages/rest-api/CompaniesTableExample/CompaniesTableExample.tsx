// https://www.youtube.com/watch?v=WRKEjPq75BY&t=593s
import { useEffect, useState } from 'react';
import { getCompanies, getCompaniesCount } from '@/api/servicies';
import { TCompany } from '@/types/company';
import { Loader } from '@/components/ui';
import { DebounceInput } from 'react-debounce-input';
import { TAxiosErrorData } from '@/types/api';
import styles from './CompaniesTableExample.module.scss';

const CompaniesTableExample = () => {
  const [data, setData] = useState<TCompany[]>([]);
  const [dataCount, setDataCount] = useState<number>(0);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
  const [rowsToShow, setRowsToShow] = useState<number>(50);

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

    // getCompaniesCount
    getCompaniesCount(filterValue, showError).then(count => {
      // if data
      if (count) {
        setDataCount(count);

        // getCompanies if count (filterValue doesn't work)
        getCompanies(filterValue, showError, rowsToShow).then(data => {
          setData(data);

          // loading false
          setDataLoading(false);
        });

        // if no data
      } else {
        setDataLoading(false);
        setDataCount(0);
        setData([]);
      }
    });
  }, [filterValue, rowsToShow]);

  const returnTableHeaders = () => {
    // hardcode columns
    const colums = ['id', 'name', 'domain', 'slug'];

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
    return data?.map((company: TCompany) => {
      const { id, name, domain, slug } = company;

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{domain}</td>
          <td>{slug}</td>
        </tr>
      );
    });
  };

  return (
    <section className={styles.CompaniesTableExample}>
      {/* title */}
      <h2>Companies Table Example</h2>

      <div className={styles.CompaniesTableExample__filter}>
        {/* filter */}
        <DebounceInput
          placeholder='Search by any coincidence'
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
        <div className={styles.CompaniesTableExample__count}>
          Total companies count: <b>{`${!dataLoading ? dataCount : '...'}`}</b>
        </div>
      </div>

      <div className={styles.CompaniesTableExample__tableContainer}>
        {/* loader */}
        {dataLoading ? (
          <div className={styles.CompaniesTableExample__loader}>
            <Loader />
          </div>
        ) : data?.length ? (
          // if data --> show data
          <>
            {/* table */}
            <table className={styles.CompaniesTableExample__table}>
              <thead>{returnTableHeaders()}</thead>
              <tbody>{returnTableDataLayout()}</tbody>
            </table>
          </>
        ) : dataError ? (
          // if request error --> show error
          <div className={styles.CompaniesTableExample__error}>{dataError}</div>
        ) : (
          // if no data --> show message
          <div className={styles.CompaniesTableExample__noData}>
            No data to show
          </div>
        )}
      </div>
    </section>
  );
};

export default CompaniesTableExample;
