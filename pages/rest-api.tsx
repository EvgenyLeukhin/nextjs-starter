import Head from 'next/head';
import { Container } from '@/components/layout';
import { API_URL, isDev } from '@/api/apiUrl';
import { UsersTableExample } from '@/components/pages/rest-api';
import { Table } from '@/components/forms';
import {
  getCompanies,
  getCompaniesCount,
  getUsers,
  getUsersCount,
} from '@/api/servicies';
import { TUser } from '@/types/user';

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

        <UsersTableExample />

        <hr />

        <Table
          title='Users Example - Table component'
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

        <Table
          title='Companies Table Example - Table component'
          colums={['id', 'name', 'domain', 'slug']}
          getDataCount={getCompaniesCount}
          getData={getCompanies}
        />

        <hr />

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
            <code>redux, react-redux</code> ---
          </li>
        </ul>
      </Container>
    </>
  );
};

export default RestApiPage;
