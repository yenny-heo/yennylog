import React from "react";
import Styled from "./PostContent.styled";
import { Tags } from "@/components";
import { Disqus } from "gatsby-plugin-disqus";

const PostContent = ({ path, title, tags, date, html }) => {
  return (
    <div>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Desc>
        <Styled.Date>{date}</Styled.Date>
        <Tags tags={tags} />
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
