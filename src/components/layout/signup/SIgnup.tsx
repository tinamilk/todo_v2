import { AuthIcon } from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { Form, InputGroup } from "../../ui/form/Form.styled";
import { Input } from "../../ui/input/input.styled";
import { AuthWrapper, Heading } from "./Signup.styled";

export const Signup = () => {
  return (
    <AuthWrapper>
      <Heading>Sign up</Heading>
      <Form>
        <InputGroup height="70%">
          <Input isCentered={false} placeholder="Enter login..." />
          <Input isCentered={false} placeholder="Enter e-mail..." />
          <Input isCentered={false} placeholder="Enter password..." />
          <Input isCentered={false} placeholder="Enter password..." />
        </InputGroup>
        <IconButton buttonType="default">
          <AuthIcon />
          Sign up
        </IconButton>
      </Form>
    </AuthWrapper>
  );
};
