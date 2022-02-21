import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import { Layout, PostCard, Tabs } from "@/components";
import Seo from "@/components/seo";
import Styled from "@/styledComponents/index.styled";
import TabsHooks from "@/hooks/tabs.hooks";

const IndexPage = ({ data }) => {
  const { totalCount, edges, group } = data.allMarkdownRemark;
  const { tabs, onChangeTab, currentTab } = TabsHooks({ group });
  const [currentEdges, setCurrentEdges] = useState([]);
  useEffect(() => {
    const newEdges = edges.filter(
      edge => edge.node.frontmatter.type === tabs[currentTab]?.tag
    );
    setCurrentEdges(newEdges);
  }, [currentTab]);
  return (
    <Layout>
      <Seo title="Home" />
      <Styled.Posts>
        <Tabs tabs={tabs} onChangeTab={onChangeTab} currentTab={currentTab} />
        {currentEdges.map(({ node }) => (
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
            type
          }
          fields {
            slug
          }
          excerpt
          tableOfContents
        }
      }
      group(field: frontmatter___type) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default IndexPage;
