import { Container } from '@/components/layout';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Statuses } from '@/types/common';
import { statusesColors } from '@/consts/colors';
import { CloseCross } from '@/components/icons';
import styles from './Alert.module.scss';

type Props = {
  isShow: boolean;
  children: React.ReactNode | string;
  status?: Statuses;
  autohide?: boolean;
  fixed?: boolean;
  onCloseClick?: () => void;
};

const Alert = ({
  isShow,
  children,
  status = Statuses.danger,
  autohide = true,
  fixed = true,
  onCloseClick,
}: Props) => {
  const cnb = classNames.bind(styles);
  const [hideCssClass, setHideCssClass] = useState<boolean>(false);
  const { primary, secondary, success, warning, danger } = statusesColors;

  const returnStatus = (status: Statuses) => {
    switch (status) {
      case Statuses.primary:
        return primary;
      case Statuses.secondary:
        return secondary;
      case Statuses.success:
        return success;
      case Statuses.warning:
        return warning;
      case Statuses.danger:
        return danger;

      default:
        return danger;
    }
  };

  useEffect(() => {
    if (autohide) {
      // add css class to smooth hide after 4s
      setTimeout(() => {
        setHideCssClass(true);
      }, 4000);
    }
  }, [autohide]);

  const statusColor = returnStatus(status);

  const onClose = () => {
    onCloseClick && onCloseClick();
  };

  if (isShow) {
    return (
      <div
        style={{
          position: fixed ? 'fixed' : 'static',
          backgroundColor: statusColor,
        }}
        className={cnb(
          styles.AlertError,
          'animate__animated animate__fadeInDown',
          hideCssClass && 'animate__fadeOutUp',
        )}
      >
        <Container>{children}</Container>

        <i onClick={onClose}>
          <CloseCross fill='white' />
        </i>
      </div>
    );
  } else return null;
};

export default Alert;
