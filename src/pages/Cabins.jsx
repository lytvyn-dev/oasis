import PageLayout from "../ui/PageLayout";

import CabinsHeader from "../features/cabins/CabinsHeader";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <PageLayout>
      <CabinsHeader />
      <CabinTable />
      <AddCabin />
    </PageLayout>
  );
}

export default Cabins;
