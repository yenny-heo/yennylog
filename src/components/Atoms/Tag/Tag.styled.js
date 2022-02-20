import styled from "styled-components";

const Conatiner = styled.span`
  padding: 1px 5px;
  background: #ddd;
  font-family: sans-serif;
  font-size: 14px;
  color: #000;
  height: 20px;
  border-radius: 10px;
  & + & {
    margin-left: 5px;
  }
`;

const Styled = {
  Conatiner,
};

export default Styled;
