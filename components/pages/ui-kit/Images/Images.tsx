import Image from 'next/image';
import nextImage from '/public/images/nextjs.png';
import styles from './Images.module.scss';

const Comp1 = () => {
  return (
    <section className={styles.Images}>
      <h2>Images with <span className="text-success">next-image</span></h2>

      <ul>
        <li className={styles.Images__image1}>
          <Image
            src="/images/nextjs.png"
            alt="image from inline path"
            width={225}
            height={225}
            priority
          />
          <span>From inline src file</span>
        </li>

        <li className={styles.Images__image2}>
          <Image
            src={nextImage}
            alt="image from import file"
            width={225}
            height={225}
            priority
          />
          <span>From import file</span>
        </li>

        <li className={styles.Images__image3}>
          <span>From css background-color</span>
        </li>

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
