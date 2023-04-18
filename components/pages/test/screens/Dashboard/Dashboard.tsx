import { AppScreens } from '../../store-redux-classic/app/app.types';
import Head from 'next/head';
import styles from './Dashboard.module.scss';
import { useEffect } from 'react';
import { useTypedSelector } from '../../store-redux-classic';
import { useActions } from '../../store-redux-classic/actions';
import { Loader } from '@/components/ui';
import { TDrugsore } from '../../store-redux-classic/dashboard/dashboard.types';

type TProps = {
  setScreen: (screen: AppScreens) => void;
};

const Dashboard = ({ setScreen }: TProps) => {
  const {
    drugstores,
    totalCount,
    page,
    limit,
    isDashboardLoading,
    // isDashboardError,
    // isDashboardSuccess,
  } = useTypedSelector(state => state.dashboard);
  const {
    getDrugstoresThunk,
    dashboardPrevPage,
    dashboardNextPage,
    dashboardSetLimit,
  } = useActions();

  useEffect(() => {
    getDrugstoresThunk({ page, limit });
  }, [page, limit]);

  return (
    <section className={styles.Dashboard}>
      <Head>
        <title>Dashboard | Pick-up-points-clone</title>
        <meta name='description' content='Pick-up-points-clone' />
      </Head>

      <h2>Dashboard</h2>

      <div
        style={{ cursor: 'pointer' }}
        className='text-success'
        onClick={() => setScreen(AppScreens.LOGIN)}
      >
        to Login page
      </div>

      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 20 }}>
          <button disabled={page === 0} onClick={() => dashboardPrevPage()}>
            Prev page
          </button>
          <button
            disabled={page === Math.round(totalCount / limit)}
            onClick={() => dashboardNextPage()}
          >
            Next page
          </button>
        </div>

        <select
          value={limit}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            dashboardSetLimit(Number(value));
          }}
        >
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
          <option value={50}>50 rows</option>
          <option value={100}>100 rows</option>
        </select>
      </div>

      <table style={{ width: '100%' }}>
        <tr style={{ textAlign: 'left', padding: 5 }}>
          <th>ID</th>
          <th>Регион</th>
          <th>Адрес</th>
        </tr>

        <div>{isDashboardLoading && <Loader />}</div>

        {!isDashboardLoading && drugstores.length
          ? drugstores.map((drugstore: TDrugsore) => {
              const { id, name, regionId } = drugstore;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{regionId}</td>
                  <td>{name}</td>
                </tr>
              );
            })
          : null}
      </table>
    </section>
  );
};

export default Dashboard;
