import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 100px;
  height: auto;
  ul {
    list-style: none;
    padding-left: 15px;
    p {
      margin: 0;
    }
  }
  & > ul > li {
    padding: 5px 0;
  }
  ul li ul {
    padding-left: 7px;
    margin-left: 7px;
    border-left: 2px solid #c4c4c4;
  }

  @media only screen and (max-width: 700px) {
    position: relative;
    display: none;
  }

  a {
    font-size: 14px;
    color: #3b3b3b;
    padding: 2px 3px;
    border-radius: 2px;
    transition: background-color 0.5s;
    &.active {
      background-color: #ddd6f3;
      color: #3b3b3b;
    }
  }
`;

const Styled = { Container };

export default Styled;
