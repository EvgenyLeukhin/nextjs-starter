import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import classNames from 'classnames';
import { fixDateFormat } from '@/utils/date';
import { DeviceList } from '@/types/common';
import useWindowSize from '@/utils/hooks/useWindowResize';
import styles from './ReactDatepicker.module.scss';

type TProps = {
  label?: string;
  locale?: string;
  name?: string;
  startDate: string | null;
  endDate: string | null;
  min?: Date;
  max?: Date;
  error?: string[] | false;
  isSuccess?: boolean;
  disabled?: boolean;
  dateFormat?: string;
  placeholder?: string;
  onChange: (val: (Date | null)[]) => void;
};

registerLocale('ru', ru);

// to doesn't show mobile keyboard (https://github.com/Hacker0x01/react-datepicker/issues/221)
const DatepickerInput = ({ ...props }) => (
  <input type='text' {...props} readOnly />
);

const ReactDatepickerRange = ({
  label,
  locale = 'ru',
  name,
  startDate,
  endDate,
  min,
  max,
  error,
  isSuccess = false,
  disabled = false,
  dateFormat = 'dd.MM.yyyy',
  placeholder = 'Choose date',
  onChange,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const screenType = useWindowSize();
  const isMobile = screenType === DeviceList.MOBILE;

  return (
    <div
      className={cnb(
        styles.ReactDatepicker,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && <h3 className={styles.ReactDatepicker__label}>{label}</h3>}

      {/* datepicker-range */}
      <DatePicker
        isClearable
        monthsShown={2}
        showPreviousMonths={false}
        focusSelectedMonth={true}
        disabled={disabled}
        name={name}
        minDate={min}
        maxDate={max}
        locale={locale}
        autoComplete='off'
        closeOnScroll={!isMobile}
        dateFormat={dateFormat}
        selectsRange={true}
        selected={fixDateFormat(startDate)}
        startDate={fixDateFormat(startDate)}
        endDate={fixDateFormat(endDate)}
        placeholderText={placeholder}
        onChange={onChange}
        className={styles.ReactDatepicker__datepicker}
        customInput={<DatepickerInput />}
      />

      {/* validation error message */}
      {error && <span className={styles.ReactDatepicker__error}>{error}</span>}
    </div>
  );
};

export default ReactDatepickerRange;
