import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 1rem 1rem;
  border: 1px solid
    ${(props) => (props.type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)")};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const Select = () => {
  return (
    <StyledSelect type="white">
      <option>Sort by name (A-Z)</option>
      <option>Sort by name (Z-A)</option>
      <option>Sort by price (low first)</option>
      <option>Sort by price (high first)</option>
      <option>Sort by capacity (low first)</option>
      <option>Sort by capacity (high first)</option>
    </StyledSelect>
  );
};

export default Select;
