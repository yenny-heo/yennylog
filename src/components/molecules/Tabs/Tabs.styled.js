import styled from "styled-components";

const Container = styled.nav`
  margin: 0 0 30px 0;
`;

const Tab = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  padding: 2px 0;
  box-sizing: border-box;
  color: #424242;
  ${props =>
    props.active &&
    `
    border-bottom: 10px solid #ddd6f3;
    font-weight: bold;
  `}
  &+& {
    margin-left: 10px;
  }
`;
const Numbering = styled.span`
  color: #9c9c9c;
  font-weight: normal;
`;

const Styled = { Container, Tab, Numbering };

export default Styled;
