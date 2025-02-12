import styled from "styled-components";
import Profile from "@/assets/icons/profile/Profile.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const IconWrapper = styled(Profile)<IconProps>`
  width: ${(props) => (props.size === "small" ? "50px" : props.size === "medium" ? "100px" : "150px")};
  height: ${(props) => (props.size === "small" ? "50px" : props.size === "medium" ? "100px" : "150px")};

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: ${(props) => (props.size === "small" ? "60px" : props.size === "medium" ? "120px" : "180px")};
    height: ${(props) => (props.size === "small" ? "60px" : props.size === "medium" ? "120px" : "180px")};
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    width: ${(props) => (props.size === "small" ? "70px" : props.size === "medium" ? "140px" : "210px")};
    height: ${(props) => (props.size === "small" ? "70px" : props.size === "medium" ? "140px" : "210px")};
  }
`;

const ProfileIcon = ({ size = "medium", className }: IconProps) => {
  return <IconWrapper className={className} size={size} />;
};

export default ProfileIcon;
