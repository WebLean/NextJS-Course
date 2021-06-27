import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={events}>All Events</EventList>
    </div>
  );
}

export default AllEventsPage;
