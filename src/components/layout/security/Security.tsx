import { ChangePassword } from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { Input } from "../../ui/input/input.styled";
import { Form, Heading, InputGroup, SecurityWrapper } from "./Security.styled";

export const Security = () => {
  return (
    <SecurityWrapper>
      <Heading>Edit Password</Heading>
      <Form>
        <InputGroup>
          <Input isCentered={false} placeholder="Enter new password" />
          <Input isCentered={false} placeholder="Confirm password" />
        </InputGroup>

        <IconButton buttonType="default">
          <ChangePassword />
          Change password
        </IconButton>
      </Form>
    </SecurityWrapper>
  );
};
