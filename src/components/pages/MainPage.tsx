import React from "react";
import { Header } from "../layout/header/Header";
import { Tasks } from "../layout/tasks/Tasks";
import { PageWrapper } from "../ui/page-wrapper/page-wrapper.styled";

export const MainPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Tasks />
      </PageWrapper>
    </>
  );
};
