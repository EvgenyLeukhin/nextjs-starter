import { ReactTooltip } from '@/components/ui';

const Tooltips = () => {
  return (
    <section>
      <h2>Tooltips</h2>

      <div style={{ display: 'flex' }}>
        {/* tooltip-1 */}
        <ReactTooltip tooltipText='Tooltip text - 1'>
          <div style={{ marginRight: 35, cursor: 'pointer' }}>Hover me - 1</div>
        </ReactTooltip>

        {/* tooltip-2 */}
        <ReactTooltip tooltipText='Tooltip text - 2'>
          <div style={{ marginRight: 35, cursor: 'pointer' }}>Hover me - 2</div>
        </ReactTooltip>

        {/* tooltip-3 */}
        <ReactTooltip tooltipText='Tooltip text - 3'>
          <div style={{ cursor: 'pointer' }}>Hover me - 3</div>
        </ReactTooltip>
      </div>
    </section>
  );
};

export default Tooltips;
