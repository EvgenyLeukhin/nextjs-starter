import type { AppProps } from 'next/app';
import { PageBaseLayout } from '@/components/layout';

// global static styles (not module)
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageBaseLayout>
      <Component {...pageProps} />
    </PageBaseLayout>
  );
}
