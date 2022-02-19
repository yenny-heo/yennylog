import React from "react";
import Styled from "./TableOfContents.styled";
import HeadingObserverHook from "@/hooks/headingObserver.hooks";

const TableOfContents = ({ tableOfContents }) => {
  HeadingObserverHook();

  return (
    <Styled.Container id={"table-of-contents"}>
      <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
    </Styled.Container>
  );
};
export default TableOfContents;
