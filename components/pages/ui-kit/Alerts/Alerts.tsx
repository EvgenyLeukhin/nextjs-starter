import { Alert } from '@/components/ui';
import { Statuses } from '@/types/common';

const Alerts = () => {
  return (
    <>
      <Alert status={Statuses.success} fixed={false} autohide={false}>
        Success alert text
      </Alert>

      <br />

      <Alert status={Statuses.danger} fixed={false} autohide={false}>
        Danger alert text
      </Alert>
    </>
  );
};

export default Alerts;
