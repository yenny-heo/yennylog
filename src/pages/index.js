import React, { useEffect, useState } from "react";
import { graphql, navigate } from "gatsby";

import { Layout, PostCard, Tabs } from "@/components";
import Seo from "@/components/seo";
import TabsHooks from "@/hooks/tabs.hooks";
import TagsHooks from "@/hooks/tags.hooks";
import withLocation from "@/hoc/withLocation";

const IndexPage = ({ data, location }) => {
  const { totalCount, edges, group } = data.allMarkdownRemark;
  const { tabs, tab, onChangeTab } = TabsHooks({ group, location });
  const { tags, tag, filteredEdges } = TagsHooks({ edges, tab, location });

  return (
    <Layout tagsInfo={{ tags, tag }}>
      <Seo title="Home" />
      <Tabs tabs={tabs} onChangeTab={onChangeTab} currentTab={tab} />
      {filteredEdges.map(({ node }) => (
        <PostCard key={node.id} node={node} />
      ))}
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

export default withLocation(IndexPage);
