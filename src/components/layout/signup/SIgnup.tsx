import { AuthIcon } from "../../../assets/Icons";
import { AuthLink } from "../../ui/auth-link/AuthLink.styled";
import { IconButton } from "../../ui/button/button.styled";
import { Form, InputGroup } from "../../ui/form/Form.styled";
import { Input } from "../../ui/input/input.styled";
import { AuthWrapper, Heading } from "./Signup.styled";

type Props = {
  setAuthType: (type: string) => void;
};

export const Signup = ({ setAuthType }: Props) => {
  return (
    <AuthWrapper>
      <Heading>Sign up</Heading>
      <Form>
        <InputGroup height="80%">
          <Input isCentered={false} placeholder="Enter login..." />
          <Input isCentered={false} placeholder="Enter e-mail..." />
          <Input isCentered={false} placeholder="Enter password..." />
          <Input isCentered={false} placeholder="Enter password..." />
          <AuthLink onClick={() => setAuthType("login")}>Sign in</AuthLink>
        </InputGroup>
        <IconButton buttonType="default">
          <AuthIcon />
          Sign up
        </IconButton>
      </Form>
    </AuthWrapper>
  );
};
