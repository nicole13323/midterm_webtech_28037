import SectionTitle from './SectionTitle.jsx';
import ServiceCard from './ServiceCard.jsx';
import { services } from '../data/libraryData.js';

function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle
        number="02"
        title="Services"
        subtitle="Free for all registered members."
      />
      <ul className="service-list">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index + 1} {...service} />
        ))}
      </ul>
    </section>
  );
}

export default Services;
