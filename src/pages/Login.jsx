import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledHeading as="h1">Log in to your account</StyledHeading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
