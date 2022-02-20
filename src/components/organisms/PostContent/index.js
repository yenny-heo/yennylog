import React from "react";
import Styled from "./PostContent.styled";
import { Tag } from "@/components";

const PostContent = ({ title, tags, date, html }) => {
  return (
    <div>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Desc>
        <Styled.Date>{date}</Styled.Date>
        <div>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Styled.Desc>
      <Styled.Content
        id={"post-content"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
export default PostContent;
