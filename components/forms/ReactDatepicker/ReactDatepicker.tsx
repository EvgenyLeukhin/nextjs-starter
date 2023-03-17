import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import classNames from 'classnames';
import styles from './ReactDatepicker.module.scss';

type TProps = {
  label?: string;
  locale?: string;
  name?: string;
  value: Date | null;
  min: Date;
  max: Date;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  dateFormat?: string;
  placeholder?: string;
  onChange: (val: Date) => void;
};

registerLocale('ru', ru);

const ReactDatepicker = ({
  label,
  locale = 'ru',
  name,
  value,
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

  function handleChange(date: Date) {
    if (date) {
      date.setHours((-1 * date.getTimezoneOffset()) / 60);
    }
    onChange(date);
  }

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

      {/* react-datepicker */}
      <DatePicker
        isClearable
        name={name}
        minDate={min}
        maxDate={max}
        locale={locale}
        selected={value}
        disabled={disabled}
        dateFormat={dateFormat}
        placeholderText={placeholder}
        onChange={!disabled ? handleChange : () => null}
        className={styles.ReactDatepicker__datepicker}
      />

      {/* validation error message */}
      {error && <span className={styles.ReactDatepicker__error}>{error}</span>}
    </div>
  );
};

export default ReactDatepicker;
