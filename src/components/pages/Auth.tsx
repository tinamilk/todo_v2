import { useState } from "react";
import { Header } from "../layout/header/Header";
import { Login } from "../layout/login/Login";
import { Signup } from "../layout/signup/SIgnup";
import { ContentWrapper } from "../ui/content-wrapper/content-wrapper";
import { PageWrapper } from "../ui/page-wrapper/page-wrapper.styled";

export const Auth = () => {
  const [authType, setAuthType] = useState("login");

  const handleAuthTypeChange = (type: string) => setAuthType(type);
  return (
    <PageWrapper>
      <Header pageHeading="userName" />
      <ContentWrapper>
        {authType === "login" ? (
          <Login setAuthType={handleAuthTypeChange} />
        ) : (
          <Signup setAuthType={handleAuthTypeChange} />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};
