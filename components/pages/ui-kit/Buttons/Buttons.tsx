import { ButtonSimple, ButtonStatus, ButtonLink } from '@/components/ui';
import { Statuses } from '@/types/common';
import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <section className={styles.Buttons}>
      <h2>Simple button</h2>
      <ButtonSimple>Simple</ButtonSimple>
      <ButtonSimple type={Statuses.primary}>Primary</ButtonSimple>
      <ButtonSimple type={Statuses.secondary}>Secondary</ButtonSimple>
      <ButtonSimple type={Statuses.success}>Success</ButtonSimple>
      <ButtonSimple type={Statuses.warning}>Warning</ButtonSimple>
      <ButtonSimple type={Statuses.danger}>Danger</ButtonSimple>
      <ButtonSimple type={Statuses.primary} disabled>
        Disabled
      </ButtonSimple>

      <h2>Statuses buttons</h2>
      <ButtonStatus type={Statuses.primary}>Primary</ButtonStatus>
      <ButtonStatus type={Statuses.secondary}>Secondary</ButtonStatus>
      <ButtonStatus type={Statuses.success}>Success</ButtonStatus>
      <ButtonStatus type={Statuses.warning}>Warning</ButtonStatus>
      <ButtonStatus type={Statuses.danger}>Danger</ButtonStatus>
      <ButtonStatus type={Statuses.primary} disabled>
        Disabled
      </ButtonStatus>

      <h2>Button-link</h2>
      <ButtonLink type={Statuses.primary} href='https://www.google.ru/'>
        Primary link
      </ButtonLink>

      <ButtonLink type={Statuses.secondary} href='https://www.google.ru/'>
        Secondary link
      </ButtonLink>

      <ButtonLink type={Statuses.success} href='https://www.google.ru/'>
        Success link
      </ButtonLink>

      <ButtonLink type={Statuses.warning} href='https://www.google.ru/'>
        Warning link
      </ButtonLink>

      <ButtonLink type={Statuses.danger} href='https://www.google.ru/'>
        Danger link
      </ButtonLink>

      <h2>Button with icon</h2>
    </section>
  );
};

export default Buttons;
