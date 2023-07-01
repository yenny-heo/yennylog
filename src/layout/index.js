import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Profile, Tag, TableOfContents, Footer } from "@/components";
import Styled from "./Layout.styled";
import "@/css/global.css";

// code highlighting
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ children, tableOfContents, tagsInfo = {} }) => {
  const { tags, tag } = tagsInfo;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const isPost = !!tableOfContents;
  const isMain = !!tags;

  const { title = "Yennylog" } = data.site.siteMetadata;

  return (
    <>
      <Styled.MainContainer>
        <Styled.Content>{children}</Styled.Content>
        <Styled.Panel>
          <Profile title={title} />
          {isPost && <TableOfContents tableOfContents={tableOfContents} />}
          {isMain && (
            <Styled.Tags>
              <Tag isActive={!tag} name="">
                전체
              </Tag>
              {tags.map(({ name, count }) => (
                <Tag isActive={name === tag} key={name} name={name}>
                  {name} ({count})
                </Tag>
              ))}
            </Styled.Tags>
          )}
        </Styled.Panel>
      </Styled.MainContainer>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
