import BookingTable from "../features/bookings/BookingTable";
import PageLayout from "../ui/PageLayout";
import Heading from "../ui/Heading";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import TableOperations from "../ui/TableOperations";
import Row from "../ui/Row";

function Bookings() {
  return (
    <PageLayout>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </PageLayout>
  );
}

export default Bookings;
