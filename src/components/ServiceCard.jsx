function ServiceCard({ index, title, description }) {
  return (
    <li className="service-item">
      <span className="service-index">{String(index).padStart(2, '0')}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ServiceCard;
