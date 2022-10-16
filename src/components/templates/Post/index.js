import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Seo from "@/components/seo";
import { Layout, PostContent } from "@/components";
import { useRecoilState } from "recoil";
import { tabState } from "@/state";

const Post = ({ path, data }) => {
  const [tab, setTab] = useRecoilState(tabState);

  const {
    frontmatter: { title, date, tags, type },
    html,
    tableOfContents,
  } = data.markdownRemark;

  useEffect(() => {
    setTab(type);
  }, []);

  return (
    <Layout tableOfContents={tableOfContents}>
      <Seo title="Post" />
      <PostContent
        path={path}
        title={title}
        date={date}
        tags={tags}
        html={html}
        type={type}
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
        type
      }
      tableOfContents
    }
  }
`;

export default Post;
