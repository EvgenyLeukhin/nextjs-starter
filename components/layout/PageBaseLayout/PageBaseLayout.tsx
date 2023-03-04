import { Header, Footer, GoToTop } from '../';

type Props = {
  children: React.ReactNode;
};

const PageBaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <GoToTop />

      <Footer />
    </>
  );
};

export default PageBaseLayout;
