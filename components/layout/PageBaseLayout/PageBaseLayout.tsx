import { Header, Footer } from '../';

type Props = {
  children: React.ReactNode;
};

const PageBaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default PageBaseLayout;
