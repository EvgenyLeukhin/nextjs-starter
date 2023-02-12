import { Html, Head, Main, NextScript } from 'next/document';
import MetaBasic from '@/components/layout/MetaBasic/MetaBasic';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <MetaBasic searchIndex={false} />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
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
