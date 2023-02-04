import { Header, Footer } from '../';

type Props = {
  children: any;
}

const PageBaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default PageBaseLayout;
