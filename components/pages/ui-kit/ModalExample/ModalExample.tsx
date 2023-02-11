import { useState } from 'react';
import { Button, ModalWrapper } from '@/components/ui';
import { Statuses } from '@/types/common';
import styles from './ModalExample.module.scss';

const ModalExample = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setIsOpen(false);

  return (
    <section className={styles.ModalExample}>
      <h2>Modal</h2>

      <ModalWrapper isOpen={isOpen} onCloseModal={closeModal}>
        <div className={styles.ModalExample__content}>
          <h2>Some modal title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            autem officiis blanditiis sint consectetur minima eos, asperiores
            corrupti ipsum architecto neque temporibus cum nobis ducimus alias
            deserunt doloribus vero est?
          </p>

          <Button outlined status={Statuses.secondary} onClick={closeModal}>
            Close modal
          </Button>
        </div>
      </ModalWrapper>

      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </section>
  );
};

export default ModalExample;
