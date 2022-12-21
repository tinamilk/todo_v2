import { AuthIcon } from "../../../assets/Icons";
import { AuthLink } from "../../ui/auth-link/AuthLink.styled";
import { IconButton } from "../../ui/button/button.styled";
import { Form, InputGroup } from "../../ui/form/Form.styled";
import { Input } from "../../ui/input/input.styled";
import { AuthWrapper, Heading } from "./Login.styled";

type Props = {
  setAuthType: (type: string) => void;
};

export const Login = ({ setAuthType }: Props) => {
  return (
    <AuthWrapper>
      <Heading>Log in</Heading>
      <Form>
        <InputGroup height="60%">
          <Input isCentered={false} placeholder="Enter login..." />
          <Input isCentered={false} placeholder="Enter password..." />
          <AuthLink onClick={() => setAuthType("signup")}>Sign up</AuthLink>
        </InputGroup>
        <IconButton buttonType="default">
          <AuthIcon />
          Sign in
        </IconButton>
      </Form>
    </AuthWrapper>
  );
};
