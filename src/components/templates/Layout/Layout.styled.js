import styled, { keyframes } from "styled-components";

const fadein = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`;

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
  animation: ${fadein} 0.5s 1 linear;
`;

const Content = styled.main`
  width: calc(100% - 200px);
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
