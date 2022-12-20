import React, { useState } from "react";
import { Header } from "../layout/header/Header";
import { Security } from "../layout/security/Security";
import { SettingsMenu } from "../layout/settings-menu/SettingsMenu";
import { Tasks } from "../layout/tasks/Tasks";
import { ContentWrapper } from "../ui/content-wrapper/content-wrapper";
import { PageWrapper } from "../ui/page-wrapper/page-wrapper.styled";

export const Settings = () => {
  const [settingsType, setSettingsType] = useState("profile");
  const handleChangeSettingsType = (type: string) => setSettingsType(type);
  return (
    <PageWrapper>
      <Header pageHeading="Settings" />
      <ContentWrapper>
        <SettingsMenu
          changeType={handleChangeSettingsType}
          currentType={settingsType}
        />
        <Security />
      </ContentWrapper>
    </PageWrapper>
  );
};
