import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight, FaAngleLeft } from 'react-icons/fa';
import styles from '../styles/DetailsPage.module.css';

const DetailsPage = () => {
  const location = useLocation();
  const country = location.state?.country;

  const renderDetail = (label, value) => (
    <p>
      {label}
      <span>
        {value}
        <span>
          <FaRegArrowAltCircleRight />
        </span>
      </span>
    </p>
  );

  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/">
        <FaAngleLeft />
      </NavLink>
      <div>
        {country && country.name && country.name.official && (
          <>
            <h2>{country.name.official}</h2>
            {country.flag && <p className={styles.flag}>{country.flag}</p>}
          </>
        )}

        <div className={styles.details}>
          {country && country.capital && country.capital[0] && renderDetail('Capital City', country.capital[0])}
          {country && country.continents && renderDetail('Continent', country.continents)}
          {country && country.timezones && renderDetail('Timezone', country.timezones[0])}
          {country && country.population !== 0 && renderDetail('Population', country.population)}
          {country && country.area && renderDetail('Area in square meters', country.area)}
          {country && country.subregion && renderDetail('Sub region', country.subregion)}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
