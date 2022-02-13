import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 100px;
  height: 500px;
  @media only screen and (max-width: 700px) {
    position: relative;
    top: 0px;
    height: 400px;
  }
`;

const Profile = styled.div`
  display: block;
  width: 150px;
  margin: 0 auto;
  text-align: right;
  color: #000;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 0 0 100px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 15px;
`;

const Styled = { Container, ProfileImage, Profile, Title, Description };

export default Styled;
