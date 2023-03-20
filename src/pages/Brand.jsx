import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Brand.scss';

const Brand = () => {
  const { brand } = useParams();
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhoneInfo = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/TGSL-DC/frontend-interview-api/master/phones.json'
        );
        const data = await response.json();

        const filteredPhonesByBrand = data.filter((phone) => {
          return phone.brand.toLowerCase() === brand.toLowerCase();
        });

        setPhones(filteredPhonesByBrand);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhoneInfo();
  }, [brand]);

  return (
    <ul className="brand-list">
      {phones.map((phone) => (
        <li key={phone.contentKey}>
          <div className="information-about-phone">
            <h2>{phone.displayName}</h2>
            <img src={phone.imgUrl} alt={phone.displayName} />

            {phone.colorOptions && (
              <div className="information-about-phone__color-wrapper">
                {phone.colorOptions.map((color, index) => (
                  <span
                    className="information-about-phone__color"
                    key={index}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  ></span>
                ))}
              </div>
            )}

            {phone.internalMemoryGB && (
              <div className="information-about-phone__memory">
                {phone.internalMemoryGB.map((internalMemory, index) => (
                  <span key={index} className="information-about-phone__memory__gb">
                    {internalMemory} GB
                  </span>
                ))}
              </div>
            )}

            {phone.networkTechnology && (
              <div className="information-about-phone__network">
                {phone.networkTechnology.map((network, index) => (
                  <span className="information-about-phone__network__span" key={index}>
                    {network}
                  </span>
                ))}
              </div>
            )}

            <div className="information-about-phone__dual-SIM-wrapper">
              {phone.dualSIM && (
                <div className="information-about-phone__dual-SIM-wrapper__dual-SIM">Dual SIM</div>
              )}
            </div>

            <div className="information-about-phone__price-container">
              <strong>
                {phone.pricePrefix} {phone.price} {phone.priceSuffix}
              </strong>
            </div>
            <button type="button" className="information-about-phone__add-button">
              Add to chart
            </button>
            <button type="button" className="information-about-phone__remove-button">
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Brand;
