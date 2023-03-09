import styles from './FormReact.module.scss';

type TProps = {
  someProp?: string;
};

const FormReact = ({ someProp }: TProps) => {
  return (
    <section className={styles.FormReact}>
      <h2>FormReact</h2>

      <h3>TODO:</h3>
      <ul>
        <li>
          <code>react-select</code> ---
        </li>
        <li>
          <code>react-datepicker</code> ---
        </li>
        <li>
          <code>react-editor</code> ---
        </li>
      </ul>
    </section>
  );
};

export default FormReact;
