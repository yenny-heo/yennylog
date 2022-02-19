import React from "react";
import { graphql } from "gatsby";
import Seo from "@/components/seo";
import { Layout, TableOfContents } from "@/components";
import Styled from "./Post.styled";

const Post = ({ path, data }) => {
  const {
    frontmatter: { title, date, tags },
    html,
    tableOfContents,
  } = data.markdownRemark;
  return (
    <Layout tableOfContents={tableOfContents}>
      <Seo title="Post" />
      <div>
        <div>
          <Styled.Title>{title}</Styled.Title>
          <div>{date}</div>
          <div>
            {tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Styled.Content
            id={"post-content"}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
      tableOfContents
    }
  }
`;

export default Post;
