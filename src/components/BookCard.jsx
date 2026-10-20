// Shows a cover image if one is provided, otherwise a simple coloured spine
function BookCard({ title, author, description, image, color }) {
  return (
    <article className="book">
      {image ? (
        <img className="book-cover" src={image} alt={`Cover of ${title}`} />
      ) : (
        <div
          className="book-cover"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          <span>{title}</span>
        </div>
      )}
      <div className="book-info">
        <h3>{title}</h3>
        <p className="book-author">{author}</p>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default BookCard;
