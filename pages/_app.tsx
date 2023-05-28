import type { AppProps } from 'next/app';
import { PageBaseLayout } from '@/components/layout';

// global static styles (not module)
import '@/styles/globals.scss';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  const onButtonClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <PageBaseLayout>
        <Component {...pageProps} />

        <button onClick={onButtonClick}>{theme}</button>
      </PageBaseLayout>
    </ThemeContext.Provider>
  );
}
