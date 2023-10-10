import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import styled from "styled-components";
import CabinFilterOperatins from "./CabinFilterOpearations";

function CabinsHeader() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinFilterOperatins />
    </Row>
  );
}

export default CabinsHeader;
