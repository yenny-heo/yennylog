import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Styled from "./profile.styled";

const Profile = () => {
  return (
    <Styled.Container>
      <Styled.ProfileImage>
        <StaticImage src={"../images/gatsby-astronaut.png"} />
      </Styled.ProfileImage>
    </Styled.Container>
  );
};

export default Profile;
