import { AuthIcon } from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { Form, InputGroup } from "../../ui/form/Form.styled";
import { Input } from "../../ui/input/input.styled";
import { AuthWrapper, Heading } from "./Login.styled";

export const Login = () => {
  return (
    <AuthWrapper>
      <Heading>Log in</Heading>
      <Form>
        <InputGroup>
          <Input isCentered={false} placeholder="Enter login..." />
          <Input isCentered={false} placeholder="Enter password..." />
        </InputGroup>
        <IconButton buttonType="default">
          <AuthIcon />
          Sign in
        </IconButton>
      </Form>
    </AuthWrapper>
  );
};
