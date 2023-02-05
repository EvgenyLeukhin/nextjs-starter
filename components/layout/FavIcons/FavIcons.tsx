const FavIcons = () => {
  const iconPath = '/icons/favicons';

  return (
    <>
      {/* ico */}
      <link
        rel='icon'
        type='image/x-icon'
        sizes='32x32'
        href={`${iconPath}/favicon.ico`}
      />

      {/* apple */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={`${iconPath}/apple-touch-icon.png`}
      />

      {/* png 32x32 */}
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={`${iconPath}/favicon-32x32.png`}
      />

      {/* png 16x16 */}
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={`${iconPath}/favicon-16x16.png`}
      />

      {/* android manifest */}
      <link rel='manifest' href={`${iconPath}/site.webmanifest`} />

      {/* safari svg */}
      <link rel='mask-icon' href={`${iconPath}/favicon.svg`} color='#5bbad5' />

      {/* new browsers */}
      <link
        rel='icon'
        sizes='any'
        type='image/svg+xml'
        href={`${iconPath}/favicon.svg`}
      />

      {/* microsoft */}
      <meta name='theme-color' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content={`${iconPath}/apple-touch-icon.png`}
      />
      <meta name='msapplication-TileColor' content='#da532c' />
    </>
  );
};

export default FavIcons;
