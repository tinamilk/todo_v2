import { ChangePassword } from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { Form, InputGroup } from "../../ui/form/Form.styled";
import { Input } from "../../ui/input/input.styled";
import { Heading, SecurityWrapper } from "./Security.styled";

export const Security = () => {
  return (
    <SecurityWrapper>
      <Heading>Edit Password</Heading>
      <Form>
        <InputGroup height="40%">
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
