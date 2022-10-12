import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Profile, Tag, Footer } from "@/components";
import Styled from "./Layout.styled";
import "@/css/global.css";
import { TableOfContents } from "../../atoms";

const Layout = ({ children, tableOfContents, tagsInfo = {} }) => {
  const { tagObjs, currentTag, onClickTag } = tagsInfo;
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
  const isMain = !!tagObjs;

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
              <Tag isActive={!currentTag} onClick={() => onClickTag("")}>
                전체
              </Tag>
              {tagObjs.map(({ name, count }) => (
                <Tag
                  isActive={name === currentTag}
                  key={name}
                  onClick={() => onClickTag(name)}
                >
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
