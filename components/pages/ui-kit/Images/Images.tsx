import Image from 'next/image';
import nextImage from '/public/images/nextjs.png';
import styles from './Images.module.scss';

const Comp1 = (): JSX.Element => {
  return (
    <section className={styles.Images}>
      <h2>
        Images with&nbsp;
        <a
          href='https://nextjs.org/docs/api-reference/next/image'
          target='_blank'
          rel='noreferrer'
        >
          next-image
        </a>
      </h2>

      <ul className={styles.Images__list}>
        {/* From inline src file */}
        <li className={styles.Images__image1}>
          <Image
            src='/images/nextjs.png'
            alt='preview'
            width={225}
            height={225}
            priority // ???
          />
          <span>From inline src file</span>
        </li>

        {/* From import file */}
        <li className={styles.Images__image2}>
          <Image
            src={nextImage}
            alt='preview'
            width={225}
            height={225}
            placeholder='blur'
          />
          <span>From import file</span>
        </li>

        {/* From css background-color */}
        <li className={styles.Images__image3}>
          <span>From css background-color</span>
        </li>

        {/* From inline style background */}
        <li
          className={styles.Images__image4}
          style={{ backgroundImage: 'url(/images/nextjs.png)' }}
        >
          <span>From inline style background</span>
        </li>
      </ul>
    </section>
  );
};

export default Comp1;
//
