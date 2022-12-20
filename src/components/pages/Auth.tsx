import { Header } from "../layout/header/Header";
import { Login } from "../layout/login/Login";
import { ContentWrapper } from "../ui/content-wrapper/content-wrapper";
import { PageWrapper } from "../ui/page-wrapper/page-wrapper.styled";

export const Auth = () => {
  return (
    <PageWrapper>
      <Header pageHeading="userName" />
      <ContentWrapper>
        <Login />
      </ContentWrapper>
    </PageWrapper>
  );
};
