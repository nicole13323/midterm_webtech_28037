import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Intro from './components/Intro.jsx';
import Services from './components/Services.jsx';
import Events from './components/Events.jsx';
import FeaturedBooks from './components/FeaturedBooks.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="page">
        <Intro />
        <Services />
        <Events />
        <FeaturedBooks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
