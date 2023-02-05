import { Html, Head, Main, NextScript } from 'next/document';
import MetaBasic from '@/components/layout/MetaBasic/MetaBasic';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <MetaBasic />
      </Head>

      <body>
        {/* ??? */}
        <Main />

        {/* ??? */}
        <NextScript />
      </body>
    </Html>
  );
}
