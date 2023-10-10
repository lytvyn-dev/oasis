import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
// import Menus from "../../ui/Menus";

import { useBookings } from "./useBookings";
import useUrl from "../../hooks/useUrl";

function BookingTable() {
  const { bookings = [], isLoading } = useBookings();
  const { searchParams } = useUrl();

  let filtredBookinhs;
  switch (searchParams.get("status")) {
    case "checked-out":
      filtredBookinhs = filtredBookinhs = bookings.filter((el) => el.status === "checked-out");
      break;
    case "checked-in":
      filtredBookinhs = filtredBookinhs = bookings.filter((el) => el.status === "checked-in");
      break;
    case "unconfirmed":
      filtredBookinhs = filtredBookinhs = bookings.filter((el) => el.status === "unconfirmed");
      break;

    default:
      filtredBookinhs = bookings;
      break;
  }

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedBookings = filtredBookinhs.sort((a, b) => {
    return (new Date(a[field]) - new Date(b[field])) * modifier;
  });

  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      {isLoading && <Spinner />}
      {!isLoading && (
        <Table.Body
          resourceName="bookings"
          data={sortedBookings}
          render={(booking) => <BookingRow key={booking.id} booking={booking} />}
        />
      )}
    </Table>
  );
}

export default BookingTable;
