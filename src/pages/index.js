import * as React from "react";
import { graphql } from "gatsby";

import { Layout, PostCard } from "@/components";
import Seo from "@/components/seo";
import Styled from "@/styledComponents/index.styled";

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo title="Home" />
      <Styled.Posts>
        {edges.map(({ node }) => (
          <PostCard key={node.id} node={node} />
        ))}
      </Styled.Posts>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            description
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
