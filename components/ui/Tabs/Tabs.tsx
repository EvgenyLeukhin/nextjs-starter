import { TTabsContent } from '@/types/common';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';
import TabsContent from './TabsContent/TabsContent';

type TProps = {
  tabsContent?: TTabsContent[];
};

const Tabs = ({ tabsContent }: TProps) => {
  const cnb = classNames.bind(styles);

  // active tab state
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.Tabs}>
      {/* tabs */}
      <div className={styles.Tabs__top}>
        {tabsContent?.map((item, index) => {
          const isActiveTab = activeTab === index;

          return (
            <div
              key={index}
              className={cnb(
                styles.Tabs__tab,
                isActiveTab && styles.isActiveTab,
              )}
              onClick={() => setActiveTab(index)}
            >
              {item.tab}
            </div>
          );
        })}
      </div>

      {/* content */}
      <TabsContent content={tabsContent![activeTab].content} />
    </div>
  );
};

export default Tabs;
