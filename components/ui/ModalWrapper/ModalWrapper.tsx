import { useEffect, useRef } from 'react';
import { CloseCross } from '@/components/icons';
import useClickOutside from '@/utils/hooks/useClickOutside';
import styles from './ModalWrapper.module.scss';

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
};

const ModalWrapper = ({
  isOpen,
  children,
  onCloseModal,
}: Props): JSX.Element | null => {
  // crete ref
  const ref = useRef<HTMLDivElement>(null);

  // on clidk outside
  useClickOutside(ref, onCloseModal);

  // close on escape button
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseModal();
    };

    // addEventListener - modal mount
    if (isOpen) {
      window.addEventListener('keydown', close);
    }

    // removeEventListener when unMount - modal unmount
    return () => {
      window.removeEventListener('keydown', close);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (isOpen) {
    return (
      <div className={styles.ModalWrapper}>
        <div className={styles.ModalWrapper__overlay}>
          <div ref={ref} className={styles.ModalWrapper__window}>
            {/* close */}
            <div onClick={onCloseModal} className={styles.ModalWrapper__close}>
              <CloseCross />
            </div>

            {/* content */}
            <div className={styles.ModalWrapper__content}>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ModalWrapper;
