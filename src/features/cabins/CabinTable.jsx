import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";

import { useCabins } from "./useCabins";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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
    <Table role="table">
      <TableHeader role="row">
        <div role="presentation"></div>
        <p>cabin</p>
        <p>capacity</p>
        <p>price</p>
        <p>discount</p>
        <div role="presentation"></div>
      </TableHeader>
      {isLoading && <Spinner />}
      {!isLoading &&
        sortedCabins?.map((el) => {
          return <CabinRow key={el.id} data={el} />;
        })}
    </Table>
  );
};

export default CabinTable;
