import { Tooltip } from '@/components/ui';

const Tooltips = () => {
  return (
    <section>
      <h2>Tooltips</h2>

      <ul style={{ display: 'flex' }}>
        <li style={{ marginRight: 35 }}>
          <Tooltip text='Tooltip text - 1'>Hover me - 1</Tooltip>
        </li>
        <li style={{ marginRight: 35 }}>
          <Tooltip text='Tooltip text - 2' variant='success'>
            Hover me - 2
          </Tooltip>
        </li>
        <li>
          <Tooltip text='Tooltip text - 3' variant='error'>
            Hover me - 3
          </Tooltip>
        </li>
      </ul>
    </section>
  );
};

export default Tooltips;
