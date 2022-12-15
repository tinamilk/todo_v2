import React from "react";
import { AppHeading, HeaderWrapper, UserIcon, UserName } from "./header.styles";
import userIcon from "../../../assets/img/user-icon.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <AppHeading>To-do</AppHeading>
      <UserName>UserName</UserName>
      <UserIcon srcSet={userIcon} />
    </HeaderWrapper>
  );
};
