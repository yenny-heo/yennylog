import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Styled from "./header.styled";

const Header = ({ siteTitle }) => (
  <Styled.Container>
    <Styled.Header>
      <Styled.Title>
        <Link to="/">{siteTitle}</Link>
      </Styled.Title>
    </Styled.Header>
  </Styled.Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
