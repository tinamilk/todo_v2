import React from "react";
import { FilterMenu } from "../layout/filter-menu/FilterMenu";
import { Header } from "../layout/header/Header";
import { Tasks } from "../layout/tasks/Tasks";
import { ContentWrapper } from "../ui/content-wrapper/content-wrapper";
import { PageWrapper } from "../ui/page-wrapper/page-wrapper.styled";

export const MainPage = () => {
  return (
    <PageWrapper>
      <Header pageHeading="userName" />
      <ContentWrapper>
        <FilterMenu />
        <Tasks />
      </ContentWrapper>
    </PageWrapper>
  );
};
