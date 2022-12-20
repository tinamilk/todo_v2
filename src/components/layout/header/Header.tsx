import React from "react";
import { AppHeading, HeaderWrapper, PageHeading } from "./header.styles";
import { UserIcon } from "../../../assets/Icons";

type HeaderProps = {
  pageHeading: string;
};

export const Header = ({ pageHeading }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <AppHeading>To-Do</AppHeading>
      <PageHeading>{pageHeading}</PageHeading>
      <UserIcon />
    </HeaderWrapper>
  );
};
