import React from "react";
import Styled from "./PostCard.styled";
import { DateCalendar, PostTags } from "@/components";
import { Link } from "gatsby";

const PostCard = ({ node }) => {
  const { title, description, date, tags } = node.frontmatter;
  return (
    <Styled.Container>
      <DateCalendar ddmmmyyyy={date} />
      <Styled.Post>
        <Link to={node.fields.slug}>
          <Styled.PostTitle>{title}</Styled.PostTitle>
          <Styled.PostDescription>{description}</Styled.PostDescription>
        </Link>
        <PostTags tags={tags} />
      </Styled.Post>
    </Styled.Container>
  );
};

export default PostCard;
