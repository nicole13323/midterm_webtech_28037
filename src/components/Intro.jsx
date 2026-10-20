import SectionTitle from './SectionTitle.jsx';

function Intro() {
  return (
    <section id="about" className="section">
      <SectionTitle number="01" title="Welcome" />
      <p className="lead">
        Welcome to Bright Future Library — a free, open space for children,
        students, parents and lifelong learners in our town.
      </p>
      <p>
        We offer a growing collection of books, quiet places to study, and free
        computers and internet. A library is more than shelves of books: it is
        where people prepare for exams, learn new skills, and meet their
        neighbours. By making knowledge available to everyone, we help build a
        stronger, better-educated community.
      </p>
    </section>
  );
}

export default Intro;
