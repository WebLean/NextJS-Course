import Link from 'next/Link';

function EventItem({ item }) {
  const { title, image, date, location, id } = item;

  const humanReadableDate = new Date(date).toLocaleDateString('kr-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={'/' + image} alt={title} />

      <div>
        <div>
          <h2>Title</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
