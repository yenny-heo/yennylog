import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Profile from "../components/profile";
import Styled from "../styledComponents/index.styled";

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo title="Home" />
      <Styled.Container>
        <Profile />
        <Styled.Posts>
          {edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </Styled.Posts>
      </Styled.Container>
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
            date(formatString: "DD MMMM YYYY")
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
