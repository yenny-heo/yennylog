import { useState, useEffect } from "react";

const TagsHooks = ({ edges, tab, location }) => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [filteredEdges, setFilteredEdges] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tagParam = params.get("tag");
    setTag(tagParam || "");
  }, [location.search]);

  useEffect(() => {
    const newTags = [];
    const filteredByTab = edges.filter(edge => {
      const { type } = edge.node.frontmatter;
      return type === tab;
    });
    const filteredByTag = filteredByTab.filter(edge => {
      const { tags } = edge.node.frontmatter;
      newTags.push(...tags);
      return !tag || tags.includes(tag);
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
    setFilteredEdges(filteredByTag);
    setTags(tagObjs);
  }, [edges, tab, tag]);

  return { tags, tag, filteredEdges };
};

export default TagsHooks;
