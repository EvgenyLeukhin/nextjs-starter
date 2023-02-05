const MetaBasic = () => {
  const siteTitle = 'Nextjs Starter';
  const siteDescription =
    'Build your NextJs App as quickly as you can. Made with ♡♡♡';
  const siteUrl = 'https://scintillating-dango-7563dc.netlify.app/';
  // const posterUrl = 'https://scintillating-dango-7563dc.netlify.app/';

  return (
    <>
      {/* basic */}
      <meta charSet='utf-8' />
      <meta name='language' content='en' />
      <meta name='url' content={siteUrl} />
      <meta name='theme-color' content='#fff' />
      <meta name='identifier-URL' content={siteUrl} />
      <meta name='application-name' content={siteTitle} />
      <meta name='viewport' content='width=device-width,initial-scale=1' />

      {/* seo */}
      <meta name='keywords' content='nextjs, react, starter' />
      <meta name='description' content={siteDescription} />
      <meta name='copyright' content='Evgeny Leukhin' />
      <meta name='author' content='Evgeny Leukhin' />
      {/* <meta name="robots" content="index, nofollow" /> */}

      {/* open-graph */}
      <meta property='og:url' content={siteUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:image' content='http://kartinamira.com/cover.png' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:height' content='1024' />
      <meta property='og:image:width' content='512' />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:locate' content='en_EN' />
      <meta property='og:description' content={siteDescription} />

      {/* twitter */}
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={siteDescription} />
      <meta name='twitter:url' content={siteUrl} />
      <meta name='twitter:site' content={siteUrl} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:image:src'
        content='http://kartinamira.com/cover.png'
      />

      {/* itemprop tags (micro layout) */}
      <meta itemProp='name' content={siteTitle} />
      <meta itemProp='description' content={siteDescription} />
      <meta itemProp='image' content='http://kartinamira.com/cover.png' />
    </>
  );
};

export default MetaBasic;
