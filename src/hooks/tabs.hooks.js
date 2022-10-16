import { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { useRecoilState } from "recoil";
import { tabState } from "@/state";

const initializeTabs = tabs => {
  return tabs.map(item => ({ ...item, active: false }));
};

const TabsHooks = ({ group, location }) => {
  const [tabs, setTabs] = useState(
    initializeTabs(group).sort((a, b) => b.totalCount - a.totalCount)
  );
  const [tab, setTab] = useRecoilState(tabState);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (!tabParam) return;
    setTab(tabParam);
  }, [location.search]);

  const onChangeTab = index => {
    let newTabs = initializeTabs([...tabs]);
    const selectedTab = newTabs[index].tag;
    setTabs(newTabs);
    setTab(selectedTab);
    navigate(`/?tab=${selectedTab}`);
  };

  return { tabs, tab, onChangeTab };
};

export default TabsHooks;
