import Head from 'next/head';
import { Container } from '@/components/layout';
import { API_URL, isDev } from '@/api/apiUrl';
import { Table } from '@/components/forms';
import { getCompaniesCount, getCompanies } from '@/api/servicies/companies';
import { getUsersCount, getUsers } from '@/api/servicies/users';
import { TUser } from '@/types/user';

// store
import { Provider } from 'react-redux';
import { storeToolkit } from '@/store/redux-toolkit/storeToolkit';
import { storeClassic } from '@/store/redux-classic';
import { storeClassic2 } from '@/store/redux-classic2';
import { storeClassic3 } from '@/store/redux-classic3';
// import { storeToolkit } from '@/store-toolkit/storeToolkit';

import {
  ReduxClassic,
  ReduxClassic2,
  ReduxClassic3,
  ReduxToolkitCouter,
  ReduxToolkit,
  UsersTableExample,
} from '@/components/pages/rest-api';

const RestApiPage = () => {
  return (
    <>
      <Head>
        <title>REST-API | NextJS Starter</title>
        <meta name='description' content='REST-API page description' />
      </Head>

      <Container>
        <h1 className='text-primary'>REST-API</h1>

        <h2>Enviroment mode:</h2>
        <code>{isDev ? 'development' : 'production'}</code>

        <hr />

        <h2>API URL:</h2>
        <code>{`${API_URL}`}</code>

        <hr />

        {/* Custom table (self written) */}
        <UsersTableExample />

        <hr />

        {/* Table component with custom layout */}
        <Table
          title='Users Example - Table component with custom layout'
          colums={['id', 'name', 'email', 'company', 'location']}
          getDataCount={getUsersCount}
          getData={getUsers}
          customLayout={data => {
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
          }}
        />

        <hr />

        {/* Table component */}
        <Table
          title='Companies Table Example - Table component'
          colums={['id', 'name', 'domain', 'slug']}
          getDataCount={getCompaniesCount}
          getData={getCompanies}
        />

        <br />
        <hr />
        <br />

        <Provider store={storeToolkit}>
          <h2>
            <mark>Redux-toolkit</mark>
          </h2>

          <ReduxToolkit />
          <hr />
          <ReduxToolkitCouter />
        </Provider>

        <br />
        <hr />
        <br />

        <h2>
          <mark>Redux Classic</mark>
        </h2>

        {/* redux-classic */}
        <Provider store={storeClassic}>
          <ReduxClassic />
        </Provider>

        <br />
        <hr />
        <br />

        {/* redux-classic2 */}
        <Provider store={storeClassic2}>
          <ReduxClassic2 />
        </Provider>

        <br />
        <hr />
        <br />

        {/* redux-classic3 */}
        <Provider store={storeClassic3}>
          <ReduxClassic3 />
        </Provider>

        <br />
        <hr />
        <br />

        <h2>TODO:</h2>

        <ul>
          <li>Sorting by column header click ---</li>
          <li>Get item (Read) +++</li>
          <li>Add item (Create) ---</li>
          <li>Edit item (Update) ---</li>
          <li>Remove item (Delete) ---</li>
          <li>
            <code>react-table</code> ---
          </li>
          <li>
            <code>redux classic</code> --- <br />
            <code>redux toolkit, RTK-query</code> --- <br />
            <code>mobx</code> --- <br />
          </li>
        </ul>
      </Container>
    </>
  );
};

export default RestApiPage;
