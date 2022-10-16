import React from "react";
import Styled from "./PostContent.styled";
import { PostTags } from "@/components";
import { Disqus } from "gatsby-plugin-disqus";

const PostContent = ({ path, title, tags, type, date, html }) => {
  return (
    <div>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Desc>
        <Styled.Date>{date}</Styled.Date>
        <PostTags tags={tags} type={type} />
      </Styled.Desc>
      <Styled.Content
        id={"post-content"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Disqus
        config={{
          url: `https://yenny-heo.github.io/yennylog${path}`,
          identifier: path,
          title: title,
        }}
      />
    </div>
  );
};
export default PostContent;
