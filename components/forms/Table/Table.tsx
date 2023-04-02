import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Loader } from '@/components/ui';
import { TAxiosErrorData } from '@/types/api';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

type TProps = {
  title?: string;
  filterPlaceholder?: string;
  colums: string[];

  // count request
  getDataCount: (
    filterValue?: string,
    showError?: (error: TAxiosErrorData) => void,
  ) => Promise<number>;

  // data request
  getData: (
    filterValue?: string,
    showError?: (error: TAxiosErrorData) => void,
    pagination?: {
      rowsToShow: number;
      paginationActivePage: number;
    },
  ) => Promise<unknown[]>;
};

const Table = ({
  title,
  filterPlaceholder = 'Enter filtering',
  colums,
  getDataCount,
  getData,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const [data, setData] = useState<unknown[]>([]);
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
    getDataCount(filterValue, showError).then((count: number) => {
      // if data
      if (count) {
        setDataCount(count);

        // calculate pagination pages
        setPaginationPagesCount(Math.ceil(count / rowsToShow));

        // getUsers if count (filterValue doesn't work)
        getData(filterValue, showError, {
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
  }, [
    filterValue,
    rowsToShow,
    paginationActivePage,
    paginationPagesCount,
    getDataCount,
    getData,
  ]);

  // returnTableHeaders
  const returnTableHeaders = () => {
    // hardcode columns
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
    // hardcode columns
    return data.map((dataItem: any, index: number) => {
      return (
        <tr key={index}>
          {colums.map((col, i) => (
            <td key={i}>{dataItem[`${col}`]}</td>
          ))}
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
        <li
          key={page}
          className={cnb(page === paginationActivePage ? styles.active : null)}
          onClick={() => setPaginationActivePage(page)}
        >
          {page}
        </li>
      ));

      return (
        <div className={styles.Table__pagination}>
          {/* prev arrow */}
          <i
            className={cnb(
              styles.Table__paginationPrev,
              paginationActivePage === 1 && styles.disabled,
            )}
            onClick={() => setPaginationActivePage(paginationActivePage - 1)}
          >
            &lt;
          </i>

          {/* pagination number */}

          <ul className={styles.Table__paginationNumbers}>{pagesNumbers}</ul>

          {/* next arrow */}
          <i
            className={cnb(
              styles.Table__paginationNext,
              paginationActivePage === paginationPagesCount && styles.disabled,
            )}
            onClick={() => setPaginationActivePage(paginationActivePage + 1)}
          >
            &gt;
          </i>
        </div>
      );
    }
  };

  return (
    <div className={styles.Table}>
      {/* title */}
      {title && <h2>{title}</h2>}

      {/* controls */}
      <div className={styles.Table__controls}>
        {/* filter input */}
        <DebounceInput
          className={styles.Table__filter}
          placeholder={filterPlaceholder}
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

        {/* data count */}
        <div className={styles.Table__count}>
          Total count: <b>{`${!dataLoading ? dataCount : '...'}`}</b>
        </div>

        {/* rows to show */}
        <div className={styles.Table__rowsToShow}>
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

        {returnPagination(paginationPagesCount)}
      </div>

      {/* table */}
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
            <table className={styles.Table__table}>
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
    </div>
  );
};

export default Table;
