import PageLayout from "../ui/PageLayout";
import AddCabin from "../features/cabins/AddCabin";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinFilterOperatins from "../features/cabins/CabinFilterOpearations";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <PageLayout>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinFilterOperatins />
      </Row>
      <CabinTable />
      <AddCabin />
    </PageLayout>
  );
}

export default Cabins;
