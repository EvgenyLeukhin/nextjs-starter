import Head from 'next/head'
import { NextPage } from "next";
import { HomeList } from "@/components/pages/home";
import { Container, PageBaseLayout } from "@/components/layout";

const Home: NextPage = () => {
  return (
    <PageBaseLayout>
      <Head>
        <title>Index page | NextJS Starter</title>
        <meta name="description" content="Index page description" />
      </Head>

      <Container>
        <h1>Home page</h1>

        <HomeList />
      </Container>
    </PageBaseLayout>
  )
}

export default Home;
