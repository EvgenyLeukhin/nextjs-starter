import meta from '@/consts/meta';
import { SeoBlock, FavIcons } from '@/components/layout';

type Props = {
  searchIndex?: boolean;
};

const MetaBasic = ({ searchIndex = false }: Props) => {
  const { title, description, author, url, keywords, poster } = meta;

  return (
    <>
      <SeoBlock
        url={url}
        title={title}
        author={author}
        poster={poster}
        keywords={keywords}
        description={description}
      />

      {/* basics */}
      <meta charSet='utf-8' />
      <meta name='language' content='en' />
      <meta property='og:type' content='website' />
      <meta property='og:locate' content='en_EN' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />

      {/* search engines */}
      <meta name='robots' content={searchIndex ? 'all' : 'none'} />

      <FavIcons />
    </>
  );
};

export default MetaBasic;
