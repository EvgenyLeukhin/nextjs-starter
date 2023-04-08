import { Button } from '@/components/ui';
import { Statuses } from '@/types/common';
import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <section className={styles.Buttons}>
      <h2>Buttons</h2>

      <h3>Solid</h3>
      <Button status={Statuses.primary}>Primary</Button>
      <Button status={Statuses.secondary}>Secondary</Button>
      <Button status={Statuses.success}>Success</Button>
      <Button status={Statuses.warning}>Warning</Button>
      <Button status={Statuses.danger}>Danger</Button>
      <Button status={Statuses.primary} disabled>
        Disabled
      </Button>

      <h3>Outlined</h3>
      <Button outlined status={Statuses.primary}>
        Primary
      </Button>

      <Button outlined status={Statuses.secondary}>
        Secondary
      </Button>

      <Button outlined status={Statuses.success}>
        Success
      </Button>

      <Button outlined status={Statuses.warning}>
        Warning
      </Button>

      <Button outlined status={Statuses.danger}>
        Danger
      </Button>

      <Button outlined status={Statuses.primary} disabled>
        Disabled
      </Button>

      <h3>Button-link</h3>
      <Button href='https://ya.ru/' status={Statuses.primary}>
        External link solid
      </Button>

      <Button href='https://ya.ru/' outlined status={Statuses.secondary}>
        External link outlined
      </Button>
    </section>
  );
};

export default Buttons;
