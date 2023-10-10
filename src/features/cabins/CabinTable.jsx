import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";

import { useCabins } from "./useCabins";

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

const CabinTable = () => {
  const { data: cabins, isLoading } = useCabins();

  const [searchParams] = useSearchParams();
  const filterdParams = searchParams.get("discount");

  let filtredCabins;

  switch (filterdParams) {
    case "all":
      filtredCabins = cabins;
      break;
    case "no-discount":
      filtredCabins = cabins?.filter((cabin) => cabin.discount === 0);
      break;
    case "with-discount":
      filtredCabins = cabins?.filter((cabin) => cabin.discount > 0);
      break;

    default:
      filtredCabins = cabins;
  }

  //

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, directiion] = sortBy.split("-");
  // якщо нам потрібно у зростанні ? * 1 : * -1
  const modifier = directiion === "asc" ? 1 : -1;
  const sortedCabins = filtredCabins?.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
      <Table.Header>
        <div role="presentation"></div>
        <div>cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>discount</div>
        <div role="presentation"></div>
      </Table.Header>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Table.Body data={sortedCabins} render={(el) => <CabinRow key={el.id} data={el} />} />
      )}
    </Table>
  );
};

export default CabinTable;
