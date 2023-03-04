import classNames from 'classnames/bind';
import styles from './TabsContent.module.scss';
import { useEffect, useState } from 'react';

type TProps = {
  content: string;
};

const TabsContent = ({ content }: TProps) => {
  const cnb = classNames.bind(styles);
  const [showAnimation, setShowAnimation] = useState(false);

  // toggle animation state when content is changing
  useEffect(() => {
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
    }, 500);
  }, [content]);

  return (
    <div
      className={cnb(
        styles.TabsContent,
        showAnimation && 'animate__animated animate__fadeIn',
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default TabsContent;
