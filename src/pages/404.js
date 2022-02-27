import * as React from "react";

import { Layout } from "@/components";
import Seo from "@/components/seo";
import Styled from "@/styledComponents/404.styled";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Styled.Container>
      <Styled.Title>404: Not Found</Styled.Title>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Styled.Container>
  </Layout>
);

export default NotFoundPage;
