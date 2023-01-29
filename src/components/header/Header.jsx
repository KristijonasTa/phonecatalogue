import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to="/phones" className="header__link">
        Phones
      </Link>
    </header>
  );
}
