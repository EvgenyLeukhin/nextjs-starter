import { statusesColors } from '@/consts/colors';
import styles from './Statuses.module.scss';

const Comp3 = () => {
  const { primary, secondary, success, warning, danger } = statusesColors;

  return (
    <section className={styles.Statuses}>
      <h2>Statuses colors</h2>

      <ul>
        <li style={{ background: primary }}>Primary</li>
        <li style={{ background: secondary }}>Secondary</li>
        <li style={{ background: success }}>Success</li>
        <li style={{ background: warning }}>Warning</li>
        <li style={{ background: danger }}>Danger</li>
      </ul>
    </section>
  );
};

export default Comp3;
