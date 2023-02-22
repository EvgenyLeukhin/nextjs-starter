import { Alert } from '@/components/ui';
import { Statuses } from '@/types/common';

const Alerts = () => {
  return (
    <section>
      <h2>Alerts</h2>

      <Alert status={Statuses.success} fixed={false} autohide={false}>
        Success alert text
      </Alert>

      <br />

      <Alert status={Statuses.danger} fixed={false} autohide={false}>
        Danger alert text
      </Alert>
    </section>
  );
};

export default Alerts;
