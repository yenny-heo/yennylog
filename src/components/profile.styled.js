import styled from "styled-components";

const Container = styled.div`
  background: #c3b2b8;
  background: -webkit-linear-gradient(to bottom, #636fa4, #ffffff);
  background: linear-gradient(to bottom, #636fa4, #ffffff);
  width: 200px;
  height: 500px;
  border-radius: 5px;
  padding: 25px;
`;

const ProfileImage = styled.div`
  img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 75px;
  }
`;

const Styled = { Container, ProfileImage };

export default Styled;
