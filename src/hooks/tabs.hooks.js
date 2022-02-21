import { useState, useEffect } from "react";

const initializeTabs = tabs => {
  return tabs.map(item => ({ ...item, active: false }));
};

const TabsHooks = ({ group }) => {
  const [tabs, setTabs] = useState(
    initializeTabs(group).sort((a, b) => b.totalCount - a.totalCount)
  );
  const [currentTab, setCurrentTab] = useState(0);

  const onChangeTab = index => {
    let newTabs = initializeTabs([...tabs]);
    setTabs(newTabs);
    setCurrentTab(index);
  };

  return { tabs, onChangeTab, currentTab };
};
export default TabsHooks;
