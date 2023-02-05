type Props = {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
  author?: string;
  poster?: string;
};

const SeoBlock = ({
  title,
  description,
  keywords,
  url,
  author,
  poster,
}: Props) => {
  return (
    <>
      {/* title */}
      {title && (
        <>
          <title>{title}</title>
          <meta itemProp='name' content={title} />
          <meta property='og:title' content={title} />
          <meta name='twitter:title' content={title} />
          <meta name='application-name' content={title} />
          <meta property='og:site_name' content={title} />
        </>
      )}

      {/* description */}
      {description && (
        <>
          <meta name='description' content={description} />
          <meta itemProp='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {/* keywords */}
      {keywords && <meta name='keywords' content={keywords} />}

      {/* url */}
      {url && (
        <>
          <meta name='url' content={url} />
          <meta property='og:url' content={url} />
          <meta name='twitter:url' content={url} />
          <meta name='twitter:site' content={url} />
          <meta name='identifier-URL' content={url} />
        </>
      )}

      {/* author */}
      {author && (
        <>
          <meta name='author' content={author} />
          <meta name='copyright' content={author} />
        </>
      )}

      {/* poster */}
      {poster && (
        <>
          <meta itemProp='image' content={poster} />
          <meta property='og:image' content={poster} />
          <meta name='twitter:image:src' content={poster} />
          <meta property='og:image:width' content='512' />
          <meta property='og:image:height' content='1024' />
          <meta property='og:image:type' content='image/png' />
          <meta name='twitter:card' content='summary_large_image' />
        </>
      )}
    </>
  );
};

export default SeoBlock;
//
