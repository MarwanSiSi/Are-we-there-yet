import { TransportationBookingList } from "../../components/BookingLists/TransportationBookingList";

export function TransportationBookings() {
  return (
    <div className="mx-7 flex flex-col gap-4">
      {/* This is the main content */}
      <div className="mb-16 flex h-fit w-full flex-col rounded-lg border-2 border-borders-primary">
        <TransportationBookingList />
      </div>
    </div>
  );
}
