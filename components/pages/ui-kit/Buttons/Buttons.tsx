import { Button } from '@/components/ui';
import { Statuses } from '@/types/common';
import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <section className={styles.Buttons}>
      <h2>Buttons</h2>

      <h3>Solid</h3>
      <Button type={Statuses.primary}>Primary</Button>
      <Button type={Statuses.secondary}>Secondary</Button>
      <Button type={Statuses.success}>Success</Button>
      <Button type={Statuses.warning}>Warning</Button>
      <Button type={Statuses.danger}>Danger</Button>
      <Button type={Statuses.primary} disabled>
        Disabled
      </Button>

      <h3>Outlined</h3>
      <Button outlined type={Statuses.primary}>
        Primary
      </Button>

      <Button outlined type={Statuses.secondary}>
        Secondary
      </Button>

      <Button outlined type={Statuses.success}>
        Success
      </Button>

      <Button outlined type={Statuses.warning}>
        Warning
      </Button>

      <Button outlined type={Statuses.danger}>
        Danger
      </Button>

      <Button outlined type={Statuses.primary} disabled>
        Disabled
      </Button>

      <h3>Button-link</h3>
      <Button href='https://ya.ru/' type={Statuses.primary}>
        External link solid
      </Button>

      <Button href='https://ya.ru/' outlined type={Statuses.secondary}>
        External link outlined
      </Button>
    </section>
  );
};

export default Buttons;
