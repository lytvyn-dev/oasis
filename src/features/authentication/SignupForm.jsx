import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import ButtonGroup from "../../ui/ButtonGroup";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const Group = styled(ButtonGroup)`
  grid-column: 3;
`;

function SignupForm() {
  return (
    <Form>
      <FormRow type="row" label="Full name" error={""}>
        <Input type="text" id="fullName" />
      </FormRow>

      <FormRow type="row" label="Email address" error={""}>
        <Input type="email" id="email" />
      </FormRow>

      <FormRow type="row" label="Password (min 8 characters)" error={""}>
        <Input type="password" id="password" />
      </FormRow>

      <FormRow type="row" label="Repeat password" error={""}>
        <Input type="password" id="passwordConfirm" />
      </FormRow>

      <FormRow type="row">
        <Group>
          <Button size="medium" variation="secondary" type="reset">
            Cancel
          </Button>
          <Button size="medium" variation="primary">
            Create new user
          </Button>
        </Group>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
