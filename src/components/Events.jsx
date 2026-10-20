import SectionTitle from './SectionTitle.jsx';
import EventCard from './EventCard.jsx';
import { events } from '../data/libraryData.js';

function Events() {
  return (
    <section id="events" className="section">
      <SectionTitle
        number="03"
        title="Upcoming Events"
        subtitle="All events are free and open to the public."
      />
      <ul className="event-list">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </ul>
    </section>
  );
}

export default Events;
