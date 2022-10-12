import React from "react";
import Styled from "./Tag.styled";
import { navigate } from "gatsby";

const Tag = ({ children, ...otherProps }) => {
  const onClickTag = event => {
    const { name } = event.target;
    navigate(`/?tag=${encodeURIComponent(name)}`);
  };
  return (
    <Styled.Conatiner {...otherProps} onClick={onClickTag}>
      {children}
    </Styled.Conatiner>
  );
};
export default Tag;
