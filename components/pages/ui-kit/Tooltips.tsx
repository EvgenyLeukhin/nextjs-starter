// import { ReactTooltip } from '@/components/ui';

const Tooltips = () => {
  return (
    <section>
      <h2>Tooltips</h2>

      <ul style={{ display: 'flex' }}>
        {/* tooltip-1 */}
        <li style={{ marginRight: 35 }}>
          {/* <ReactTooltip anchor='tooltip-1' text='Tooltip text - 1'>
            Hover me - 1
          </ReactTooltip> */}
        </li>

        {/* tooltip-2 */}
        <li style={{ marginRight: 35 }}>
          {/* <ReactTooltip
            anchor='tooltip-2'
            text='Tooltip text - 2'
            variant='success'
          >
            Hover me - 2
          </ReactTooltip> */}
        </li>

        {/* tooltip-3 */}
        <li>
          {/* <ReactTooltip
            anchor='tooltip-3'
            text='Tooltip text - 3'
            variant='error'
          >
            Hover me - 3
          </ReactTooltip> */}
        </li>
      </ul>
    </section>
  );
};

export default Tooltips;
