import React from "react";
import Styled from "./PostCard.styled";
import { DateCalendar, Tag } from "@/components";
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
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Styled.Post>
    </Styled.Container>
  );
};

export default PostCard;
