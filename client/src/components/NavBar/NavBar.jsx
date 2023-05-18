import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NavBar() {
  return (
    <nav className="navBar">
      <div>
        <form>
          <input type="text" placeholder="Search here..." />
          <button type="submit">
            <img src="/assets/icons/search.png" alt="search icon" />
          </button>
        </form>
      </div>
      <ul>
        <li>
          <Link to="/products/40351">YEasy 350</Link>
        </li>
        <li>
          <Link to="/products/40344">Camo Onesie</Link>
        </li>
      </ul>
    </nav>
  );
}
