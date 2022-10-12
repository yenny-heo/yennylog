import React from "react";
import { Tag } from "@/components";
import Styled from "./PostTags.styled";
const PostTags = ({ tags }) => {
  return (
    <Styled.Container>
      <Styled.HashTag>#</Styled.HashTag>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Styled.Container>
  );
};
export default PostTags;
