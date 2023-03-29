// import { Loader } from '@/components/ui';
import styles from './UsersTable.module.scss';

type TProps = {
  tableTitle?: string;
  isLoading: boolean;
  isError: boolean;
  // data: any[];
  columns: {
    id: string;
    title: string;
  }[];
};

const UsersTable = ({ tableTitle, isError }: TProps) => {
  return (
    <div className={styles.UsersTable}>
      {tableTitle && <h2>{tableTitle}</h2>}

      <table></table>

      {isError && <div className={styles.UsersTable__error}>{isError}</div>}
    </div>
  );
};

export default UsersTable;
