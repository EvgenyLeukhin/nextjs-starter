import { ButtonLink } from '@/components/ui';
import { Statuses } from '@/types/common';
import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <section className={styles.Buttons}>
      <h2>Simple buttons</h2>

      {/* <Button type={ButtonList.primary}>Click me</Button> */}
      {/* <Button type={ButtonList.transparent}>Click me</Button> */}
      {/* <Button type={ButtonList.secondary}>Click me</Button> */}
      {/* <Button disabled>Click me</Button> */}

      <h2>Button-link</h2>
      <ButtonLink type={Statuses.primary} href='https://www.google.ru/'>
        Outside link
      </ButtonLink>

      <ButtonLink type={Statuses.secondary} href='https://www.google.ru/'>
        Outside link
      </ButtonLink>

      <ButtonLink type={Statuses.success} href='https://www.google.ru/'>
        Outside link
      </ButtonLink>

      <ButtonLink type={Statuses.warning} href='https://www.google.ru/'>
        Outside link
      </ButtonLink>

      <ButtonLink type={Statuses.danger} href='https://www.google.ru/'>
        Outside link
      </ButtonLink>

      <h2>Button with icon</h2>
    </section>
  );
};

export default Buttons;
