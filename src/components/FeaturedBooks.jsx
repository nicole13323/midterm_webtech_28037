import SectionTitle from './SectionTitle.jsx';
import BookCard from './BookCard.jsx';
import { books } from '../data/libraryData.js';

function FeaturedBooks() {
  return (
    <section id="books" className="section">
      <SectionTitle
        number="04"
        title="Featured Books"
        subtitle="This month's picks from our shelves."
      />
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedBooks;
