import React, { useEffect, useState } from "react";
import { graphql, navigate } from "gatsby";

import { Layout, PostCard, Tabs } from "@/components";
import Seo from "@/components/seo";
import TabsHooks from "@/hooks/tabs.hooks";
import withLocation from "@/hoc/withLocation";

const IndexPage = ({ data, location }) => {
  const { totalCount, edges, group } = data.allMarkdownRemark;
  const { tabs, onChangeTab, currentTab } = TabsHooks({ group });
  const [currentEdges, setCurrentEdges] = useState([]);
  const [tagObjs, setTagObjs] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setCurrentTag(params.get("tag"));
  }, [location.search]);

  useEffect(() => {
    const newTags = [];
    const filteredByTab = edges.filter(edge => {
      const { type } = edge.node.frontmatter;
      return type === tabs[currentTab]?.tag;
    });
    const filteredByTag = filteredByTab.filter(edge => {
      const { tags } = edge.node.frontmatter;
      newTags.push(...tags);
      return !currentTag || tags.includes(currentTag);
    });
    const tagNameSet = [...new Set(newTags)];
    const tagObjs = [];
    tagNameSet.forEach(tagName => {
      const tagCount = newTags.filter(newTag => tagName === newTag).length;
      tagObjs.push({
        name: tagName,
        count: tagCount,
      });
    });

    setCurrentEdges(filteredByTag);
    setTagObjs(tagObjs);
  }, [currentTab, currentTag]);

  return (
    <Layout tagsInfo={{ tagObjs, currentTag }}>
      <Seo title="Home" />
      <Tabs tabs={tabs} onChangeTab={onChangeTab} currentTab={currentTab} />
      {currentEdges.map(({ node }) => (
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
