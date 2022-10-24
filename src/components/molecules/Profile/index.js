import * as React from "react";
import Styled from "./Profile.styled";
import profileImage from "@/assets/images/profile.jpg";
import { githubImage, linkedinImage } from "@/assets/images/icons";
import { Link } from "gatsby";

const links = [
  { name: "github", url: "https://github.com/yenny-heo", image: githubImage },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/yeeunheo/",
    image: linkedinImage,
  },
];

const Profile = ({ title }) => {
  return (
    <Styled.Container>
      <Styled.Profile>
        <Styled.ProfileImage src={profileImage} />
        <Styled.Title>
          <Link to="/">{title}</Link>
        </Styled.Title>
        <Styled.Description>Front-end Developer</Styled.Description>
        <Styled.Description>Simple is Best 😗</Styled.Description>
        <Styled.Icons>
          {links.map(link => (
            <Styled.Icon key={link.name} href={link.url} target="_blank">
              <img src={link.image} alt={link.name} />
            </Styled.Icon>
          ))}
        </Styled.Icons>
      </Styled.Profile>
    </Styled.Container>
  );
};

export default Profile;
