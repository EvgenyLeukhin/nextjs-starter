import meta from '@/consts/meta';

const MetaBasic = () => {
  const { author, title, description, url, keywords, poster } = meta;

  return (
    <>
      {/* basic */}
      <meta charSet='utf-8' />
      <meta name='language' content='en' />
      <meta name='url' content={url} />
      <meta name='theme-color' content='#fff' />
      <meta name='identifier-URL' content={url} />
      <meta name='application-name' content={title} />
      <meta name='viewport' content='width=device-width,initial-scale=1' />

      {/* seo */}
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='copyright' content={author} />
      <meta name='author' content={author} />
      {/* <meta name="robots" content="index, nofollow" /> */}

      {/* open-graph */}
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={poster} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:height' content='1024' />
      <meta property='og:image:width' content='512' />
      <meta property='og:site_name' content={title} />
      <meta property='og:locate' content='en_EN' />
      <meta property='og:description' content={description} />

      {/* twitter */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:site' content={url} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image:src' content={poster} />

      {/* itemprop tags (micro layout) */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={poster} />
    </>
  );
};

export default MetaBasic;
