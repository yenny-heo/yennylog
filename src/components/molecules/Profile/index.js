import * as React from "react";
import Styled from "./Profile.styled";
import profileSrc from "@/images/profile.jpg";
import { Link } from "gatsby";

const Profile = ({ title }) => {
  return (
    <Styled.Container>
      <Styled.Profile>
        <Styled.ProfileImage src={profileSrc} />
        <Styled.Title>
          <Link to="/">{title}</Link>
        </Styled.Title>
        <Styled.Description>Frontend Developer</Styled.Description>
        <Styled.Description>Simple is Best 😗</Styled.Description>
      </Styled.Profile>
    </Styled.Container>
  );
};

export default Profile;
