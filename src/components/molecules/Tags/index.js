import React from "react";
import { Tag } from "@/components";
import Styled from "./Tags.styled";
const Tags = ({ tags }) => {
  return (
    <div>
      <Styled.HashTag>#</Styled.HashTag>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
};
export default Tags;
