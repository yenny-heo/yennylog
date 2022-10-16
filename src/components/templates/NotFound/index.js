import * as React from "react";
import Styled from "./NotFound.styled";

const NotFoundPage = () => (
  <Styled.Container>
    <Styled.Title>404: Not Found</Styled.Title>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Styled.Container>
);

export default NotFoundPage;
