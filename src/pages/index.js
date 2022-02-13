import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "@/components/Layouts";
import Seo from "@/components/seo";
import Styled from "@/styledComponents/index.styled";
import { DateCalendar, Tag } from "@/components/Atoms";

const IndexPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo title="Home" />
      <Styled.Posts>
        {edges.map(({ node }) => {
          const { title, description, date, tags } = node.frontmatter;
          console.log(tags);
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
                  {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
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
