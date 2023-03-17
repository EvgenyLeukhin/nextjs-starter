import socialList from '@/consts/socialList';
import { TSocial } from '@/types/common';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.Contacts}>
      <span>My contacts:&nbsp;</span>

      <ul>
        {socialList.map((social: TSocial, index) => {
          const { title, link } = social;

          return (
            <li key={index + link}>
              <a href={link} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
