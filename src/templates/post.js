import React from "react";
import { graphql } from "gatsby";
import Layout from "@/components/Layouts";

const Post = ({ path, data }) => {
  const {
    frontmatter: { title, date, tags },
    html,
  } = data.markdownRemark;
  return (
    <Layout>
      <div>
        <div>Hello Blog</div>
        <div>
          <h1>{title}</h1>
          <div>{date}</div>
          <div>
            {tags.map(tag => (
              <span>{tag}</span>
            ))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
    }
  }
`;

export default Post;
