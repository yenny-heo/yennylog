import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-item: center;
  height: 30px;
`;

const HashTag = styled.span`
  color: #c4bae6;
  padding: 0 4px 0 0;
`;

const Tags = styled.span`
  position: relative;
  height: fit-content;
`;

const Styled = {
  Container,
  HashTag,
  Tags,
};

export default Styled;
