import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 200px 1.0875rem 1.45rem;
  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding-top: 50px;
  }
`;

const Content = styled.main`
  width: 710px;
  @media only screen and (max-width: 710px) {
    width: auto;
  }
`;
const Panel = styled.span`
  min-width: 200px;
  max-width: 200px;
  margin: 0 auto;
`;

const Styled = { Container, Content, Panel };

export default Styled;
