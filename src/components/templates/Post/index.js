import React from "react";
import { graphql } from "gatsby";
import Seo from "@/components/seo";
import { Layout, PostContent } from "@/components";

const Post = ({ path, data }) => {
  const {
    frontmatter: { title, date, tags },
    html,
    tableOfContents,
  } = data.markdownRemark;
  return (
    <Layout tableOfContents={tableOfContents}>
      <Seo title="Post" />
      <PostContent
        path={path}
        title={title}
        date={date}
        tags={tags}
        html={html}
      />
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
