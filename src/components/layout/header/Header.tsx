import React from "react";
import { AppHeading, HeaderWrapper, PageHeading } from "./header.styles";
import { UserIcon } from "../../../assets/Icons";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  pageHeading: string;
};

export const Header = ({ pageHeading }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <AppHeading>To-Do</AppHeading>
      </NavLink>
      <PageHeading>{pageHeading}</PageHeading>
      <NavLink to="/settings">
        <UserIcon />
      </NavLink>
    </HeaderWrapper>
  );
};
