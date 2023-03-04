import { Tabs } from '@/components/ui';
import tabsContent from '@/consts/tabsContent';

const TabsExample = () => {
  return (
    <section>
      <h2>Tabs</h2>

      <Tabs tabsContent={tabsContent} />
    </section>
  );
};

export default TabsExample;
