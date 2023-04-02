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
          colums={['id', 'name', 'surname', 'email']}
          getDataCount={getUsersCount}
          getData={getUsers}
        />

        <hr />

        <Table
          title='Companies Table Example - Table component'
          colums={['id', 'name', 'domain', 'slug']}
          getDataCount={getCompaniesCount}
          getData={getCompanies}
        />
      </Container>
    </>
  );
};

export default RestApiPage;
