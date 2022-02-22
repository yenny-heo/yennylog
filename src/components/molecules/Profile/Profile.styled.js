import styled from "styled-components";

const Container = styled.div`
  height: 400px;
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
  margin: 0 0 90px 0;
`;

const Title = styled.div`
  font-family: "pacifico";
  font-size: 27px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

const Description = styled.div`
  font-size: 15px;
`;

const Icons = styled.div`
  margin: 10px 0 0 0;
`;

const Icon = styled.a`
  display: inline-block;
  width: 17px;
  height: 17px;
  & + & {
    margin-left: 5px;
  }
`;

const Styled = {
  Container,
  ProfileImage,
  Profile,
  Title,
  Description,
  Icons,
  Icon,
};

export default Styled;
