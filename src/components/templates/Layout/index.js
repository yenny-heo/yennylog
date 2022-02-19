import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Profile } from "@/components";
import Styled from "./Layout.styled";
import "@/css/global.css";
import { TableOfContents } from "../../atoms";

const Layout = ({ children, tableOfContents }) => {
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
  const { title = "Yennylog" } = data.site.siteMetadata;
  return (
    <Styled.Container>
      <Styled.Content>{children}</Styled.Content>
      <Styled.Panel>
        <Profile title={title} />
        {isPost && <TableOfContents tableOfContents={tableOfContents} />}
      </Styled.Panel>
    </Styled.Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
