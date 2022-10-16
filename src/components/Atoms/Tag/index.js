import React from "react";
import Styled from "./Tag.styled";
import { navigate } from "gatsby";
import { useRecoilState } from "recoil";
import { tabState } from "@/state";

const Tag = ({ children, ...otherProps }) => {
  const [tab, setTab] = useRecoilState(tabState);

  const onClickTag = event => {
    const { name } = event.target;
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    navigate(`/?tag=${encodeURIComponent(name)}&tab=${tab || tabParam}`);
  };

  return (
    <Styled.Conatiner {...otherProps} onClick={onClickTag}>
      {children}
    </Styled.Conatiner>
  );
};
export default Tag;
