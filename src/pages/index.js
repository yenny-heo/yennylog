import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "@/components/Layouts";
import Seo from "@/components/seo";
import Styled from "@/styledComponents/index.styled";
import DateCalendar from "@/components/Atoms/DateCalendar/DateCalendar";

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Layout>
      <Seo title="Home" />
      <Styled.Posts>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <Styled.Container>
                <DateCalendar />
                <Styled.Post>
                  <Styled.PostTitle>{node.frontmatter.title}</Styled.PostTitle>
                  <Styled.PostDescription>
                    {node.frontmatter.description}
                  </Styled.PostDescription>
                </Styled.Post>
              </Styled.Container>
            </Link>
          </div>
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
