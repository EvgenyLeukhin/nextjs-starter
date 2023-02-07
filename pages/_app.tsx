import { PageBaseLayout } from '@/components/layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageBaseLayout>
      <Component {...pageProps} />
    </PageBaseLayout>
  );
}
