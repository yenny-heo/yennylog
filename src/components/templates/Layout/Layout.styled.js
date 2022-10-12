import styled, { keyframes } from "styled-components";

const fadein = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`;

const MainContainer = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 200px 1.0875rem 0;
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

const Panel = styled.aside`
  min-width: 200px;
  max-width: 200px;
  margin: 0 auto;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  button {
    margin: 0 0 5px 5px;
  }
`;

const Styled = { MainContainer, Content, Panel, Tags };

export default Styled;
