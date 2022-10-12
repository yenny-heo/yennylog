import React from "react";
import Styled from "./Tag.styled";
const Tag = ({ children, ...otherProps }) => {
  return <Styled.Conatiner {...otherProps}>{children}</Styled.Conatiner>;
};
export default Tag;
