import styled from "styled-components";

const ButtonText = styled.button`
  /* color: var(--color-brand-600); */
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-50);
    background-color: var(--color-brand-700);
  }
`;

export default ButtonText;
