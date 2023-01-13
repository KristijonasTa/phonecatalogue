import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/phones" className="header__link ">
        Phones
      </Link>
    </header>
  );
};

export default Header;
