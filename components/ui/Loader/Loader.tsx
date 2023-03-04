import styles from './Loader.module.scss';

type TProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
};

const Loader = ({ type = 'type-1' }: TProps) => {
  switch (type) {
    case 'type-1':
      return (
        <div className={styles.Loader__type1}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} />
          ))}
        </div>
      );

    case 'type-2':
      return (
        <div className={styles.Loader__type2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
            <div key={i} />
          ))}
        </div>
      );

    case 'type-3':
      return (
        <div className={styles.Loader__type3}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
            <div key={i} />
          ))}
        </div>
      );
  }
};

export default Loader;
