import classNames from 'classnames/bind';
import styles from './Loader.module.scss';

type TProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
};

const Loader = ({ type = 'type-1' }: TProps) => {
  const cnb = classNames.bind(styles);
  const createArray = (length: number) => Array.from(Array(length).keys()); // [1, 2, 3, 4, 5, 6, 7, 8]

  switch (type) {
    case 'type-1':
      return (
        <div className={cnb(styles.Loader, styles.Loader__type1)}>
          {createArray(8).map(i => (
            <div key={i} />
          ))}
        </div>
      );

    case 'type-2':
      return (
        <div className={cnb(styles.Loader, styles.Loader__type2)}>
          {createArray(12).map(i => (
            <div key={i} />
          ))}
        </div>
      );

    case 'type-3':
      return (
        <div className={cnb(styles.Loader, styles.Loader__type3)}>
          {createArray(12).map(i => (
            <div key={i} />
          ))}
        </div>
      );
  }
};

export default Loader;
