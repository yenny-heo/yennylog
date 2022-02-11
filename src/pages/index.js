import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "@/components/Layouts";
import Seo from "@/components/seo";
import Styled from "@/styledComponents/index.styled";
import DateCalendar from "@/components/Atoms/DateCalendar/DateCalendar";

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo title="Home" />
      <Styled.Posts>
        {edges.map(({ node }) => {
          const { title, description, date } = node.frontmatter;
          return (
            <div key={node.id}>
              <Styled.PostContainer>
                <DateCalendar ddmmmyyyy={date} />
                <Styled.PostLink>
                  <Link to={node.fields.slug}>
                    <Styled.PostTitle>{title}</Styled.PostTitle>
                    <Styled.PostDescription>
                      {description}
                    </Styled.PostDescription>
                  </Link>
                </Styled.PostLink>
              </Styled.PostContainer>
            </div>
          );
        })}
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
