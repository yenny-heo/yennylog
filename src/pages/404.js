import * as React from "react";
import Layout from "@/layout";
import { NotFound } from "@/components";
import Seo from "@/components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
