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
        console.log(jsonData.options);
        setBrands(jsonData.options);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhones();
  }, []);

  return (
    <ul className="ul-style">
      {brands.map((phone) => (
        <li className="li-items" key={phone.displayName}>
          <Link className="link-to-brands" to={`/phones/${phone.id.toLowerCase()}`}>
            {phone.displayName}
            <img src={phone.displayImageUrl} alt="" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Phones;
