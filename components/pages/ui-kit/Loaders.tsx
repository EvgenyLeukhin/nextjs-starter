import { Loader } from '@/components/ui';

const Alerts = () => {
  return (
    <section>
      <h2>Loader</h2>

      <Loader type='type-1' />
      <Loader type='type-2' />
      <Loader type='type-3' />
    </section>
  );
};

export default Alerts;
