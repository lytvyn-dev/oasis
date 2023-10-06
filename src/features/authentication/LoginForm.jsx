import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

function LoginForm() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("hesoyam123");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submited!");
  }

  return (
    <Form $login onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Div>
      <Div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Div>
      <Div>
        <Button size="large" variation="primary">
          Log in
        </Button>
      </Div>
    </Form>
  );
}

export default LoginForm;
