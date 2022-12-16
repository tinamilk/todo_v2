import React from "react";
import { AppHeading, HeaderWrapper, UserName } from "./header.styles";
import userIcon from "../../../assets/img/user-icon.svg";
import { UserIcon } from "../../../assets/Icons";

export const Header = () => {
  return (
    <HeaderWrapper>
      <AppHeading>To-Do</AppHeading>
      <UserName>UserName</UserName>
      <UserIcon />
    </HeaderWrapper>
  );
};
