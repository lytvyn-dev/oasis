import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$login ? "" : "2.4rem")};
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);

  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
