function EventCard({ title, date, time, description }) {
  const eventDate = new Date(date + 'T00:00:00');
  const shortDate = eventDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
  const weekday = eventDate.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <li className="event-item">
      <time className="event-date" dateTime={date}>
        <strong>{shortDate}</strong>
        <span>{weekday}</span>
      </time>
      <div>
        <h3>{title}</h3>
        <p className="event-time">{time}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default EventCard;
