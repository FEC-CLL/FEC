import React from 'react';
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
    </nav>
  );
}
