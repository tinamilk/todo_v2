import React from "react";
import { AppHeading, HeaderWrapper, PageHeading } from "./header.styles";
import { UserIcon } from "../../../assets/Icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDefault } from "../../../redux/filters/filters";

type HeaderProps = {
  pageHeading: string;
};

export const Header = ({ pageHeading }: HeaderProps) => {
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <AppHeading onClick={() => dispatch(setDefault())}>To-Do</AppHeading>
      </NavLink>
      <PageHeading>{pageHeading}</PageHeading>
      <NavLink to="/settings">
        <UserIcon />
      </NavLink>
    </HeaderWrapper>
  );
};
