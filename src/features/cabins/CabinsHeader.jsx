import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Select from "../../ui/SortBy";
import ButtonText from "../../ui/ButtonText";

import styled from "styled-components";
import CabinFilterOperatins from "./CabinFilterOpearations";

const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Div = styled.div`
  display: flex;
  background-color: var(--color-grey-0);
  padding: 0.4rem;
  gap: 0.4rem;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-100);
`;

function CabinsHeader() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinFilterOperatins />
    </Row>
  );
}

export default CabinsHeader;
