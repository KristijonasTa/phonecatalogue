import React from 'react';
import './Footer.scss';

export default function Footer() {
  const date = new Date();
  return <footer className="footer">&copy; {date.getFullYear()} by Kristijonas Tarutis</footer>;
}
