import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './phones.scss';

const Phones = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/TGSL-DC/frontend-interview-api/master/brands.json'
        );
        const jsonData = await response.json();
        setBrands(jsonData.options);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhones();
  }, []);

  return (
    <ul className="brands-list">
      {brands.map((phone) => (
        <li key={phone.displayName}>
          <Link className="brands-list__link" to={`/phones/${phone.id.toLowerCase()}`}>
            <h2 className="brands-list__link-heading">{phone.displayName}</h2>
            <img src={phone.displayImageUrl} alt={phone.displayName + ' phone'} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Phones;
