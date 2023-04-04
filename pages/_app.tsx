import type { AppProps } from 'next/app';
import { PageBaseLayout } from '@/components/layout';

// store
import { Provider } from 'react-redux';
import { store } from '@/store/store';

// global static styles (not module)
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageBaseLayout>
        <Component {...pageProps} />
      </PageBaseLayout>
    </Provider>
  );
}
