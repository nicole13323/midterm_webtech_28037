import { useState } from 'react';
import { navLinks } from '../data/libraryData.js';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="wrap nav-list">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeLink === link.id ? 'active' : ''}
              onClick={() => setActiveLink(link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
