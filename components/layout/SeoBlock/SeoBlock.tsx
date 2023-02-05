import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  poster?: string;
};

const SeoBlock = ({ title, description, keywords, author, poster }: Props) => {
  return (
    <Head>
      {/* title */}
      {title && (
        <>
          <title>{title}</title>
          <meta name='application-name' content={title} />
          <meta property='og:title' content={title} />
          <meta property='og:site_name' content={title} />
          <meta name='twitter:title' content={title} />
          <meta itemProp='name' content={title} />
        </>
      )}

      {/* description */}
      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
          <meta itemProp='description' content={description} />
        </>
      )}

      {/* keywords */}
      {keywords && <meta name='keywords' content={keywords} />}

      {/* author */}
      {author && (
        <>
          <meta name='copyright' content={author} />
          <meta name='author' content={author} />
        </>
      )}

      {/* poster */}
      {poster && (
        <>
          <meta property='og:image' content={poster} />
          <meta name='twitter:image:src' content={poster} />
          <meta itemProp='image' content={poster} />
        </>
      )}
    </Head>
  );
};

export default SeoBlock;
//
