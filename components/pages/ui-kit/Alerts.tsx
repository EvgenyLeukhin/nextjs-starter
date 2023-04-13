import { Alert } from '@/components/ui';
import { Statuses } from '@/types/common';

const Alerts = () => {
  return (
    <section>
      <h2>Alerts</h2>

      <Alert
        isShow={true}
        status={Statuses.success}
        fixed={false}
        onCloseClick={() => alert(123)}
      >
        Success alert text
      </Alert>

      <br />

      <Alert
        isShow={true}
        status={Statuses.danger}
        fixed={false}
        onCloseClick={() => alert(123)}
      >
        Danger alert text
      </Alert>
    </section>
  );
};

export default Alerts;
