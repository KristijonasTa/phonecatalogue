import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/phones" className="link">
        Phones
      </Link>
    </div>
  );
};

export default Header;
