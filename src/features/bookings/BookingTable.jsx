import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
// import Menus from "../../ui/Menus";

import { useBookings } from "./useBookings";

function BookingTable() {
  // const bookings = [];
  const { bookings = [], isLoading } = useBookings();

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
          data={bookings}
          render={(booking) => <BookingRow key={booking.id} booking={booking} />}
        />
      )}
    </Table>
  );
}

export default BookingTable;
