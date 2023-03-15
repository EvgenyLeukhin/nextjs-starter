// https://progressivewebninja.com/how-to-use-react-quill-with-nextjs/
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import styles from './ReactEditor.module.scss';

type TProps = {
  label?: string;
  value?: string;
  error?: string | false;
  isSuccess?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange: (val: string) => void;
};

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const ReactEditor = ({
  label,
  value,
  error,
  isSuccess,
  disabled,
  placeholder = 'Enter text',
  onChange,
}: TProps) => {
  const cnb = classNames.bind(styles);

  return (
    <div
      className={cnb(
        styles.ReactEditor,
        error && styles.isError,
        isSuccess && styles.isSuccess,
        disabled && styles.isDisabled,
      )}
    >
      {/* label */}
      {label && <h3 className={styles.ReactEditor__label}>{label}</h3>}

      {/* editor */}
      <QuillNoSSRWrapper
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.ReactEditor__editor}
      />

      {/* validation error message */}
      {error && <span className={styles.ReactEditor__error}>{error}</span>}
    </div>
  );
};

export default ReactEditor;
