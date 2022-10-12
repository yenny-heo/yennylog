import styled from "styled-components";

const Conatiner = styled.span`
  display: flex;
  align-self: center;
  width: fit-content;
  height: fit-content;
  padding: 3px 5px;
  background-color: #ddd;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1;
  color: #000;
  border-radius: 10px;
  white-space: nowrap;
  transition: background-color 0.5s;
  & + & {
    margin-left: 5px;
  }
  ${({ isActive }) =>
    isActive &&
    `
      background-color: #333;
      color: #ddd6f3;
    `}
`;

const Styled = {
  Conatiner,
};

export default Styled;
