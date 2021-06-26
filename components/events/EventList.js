import EventItem from './EventItem';

function EventList({ items }) {
  return (
    <ul>
      {items.map(event => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
}

export default EventList;
