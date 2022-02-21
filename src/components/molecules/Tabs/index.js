import React from "react";
import Styled from "./Tabs.styled";

const Tabs = ({ tabs, onChangeTab, currentTab }) => {
  return (
    <Styled.Container>
      {tabs.map(({ tag, totalCount }, index) => (
        <Styled.Tab
          key={tag}
          active={currentTab === index}
          role="tab"
          onClick={() => onChangeTab(index)}
        >
          {tag}
          <Styled.Numbering>({totalCount})</Styled.Numbering>
        </Styled.Tab>
      ))}
    </Styled.Container>
  );
};
export default Tabs;
