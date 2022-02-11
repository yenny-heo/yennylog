import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Profile from "./Profile";
import Styled from "./Layout.styled";
import "@/css/global.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title = "Yennylog" } = data.site.siteMetadata;
  return (
    <Styled.Container>
      <Styled.Content>{children}</Styled.Content>
      <Profile title={title} />
    </Styled.Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
