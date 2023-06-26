import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight, FaAngleLeft } from 'react-icons/fa';
import styles from '../styles/DetailsPage.module.css';

const DetailsPage = () => {
  const location = useLocation();
  const { country } = location.state;
  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/">
        <FaAngleLeft />
      </NavLink>
      <div>
        <h2>{country.name.official}</h2>
        <p className={styles.flag}>{country.flag}</p>
        <div className={styles.details}>
          {country.capital[0] && (
            <p>
              Capital City
              <span>
                {country.capital[0]}
                {' '}
                <span>
                  <FaRegArrowAltCircleRight />
                </span>
              </span>
            </p>
          )}
          {country.continents && (
            <p>
              Continent
              <span>
                {country.continents}
                <span>
                  <FaRegArrowAltCircleRight />
                </span>
              </span>
            </p>
          )}
          {country.timezones && (
            <p>
              Timezone
              <span>
                {country.timezones[0]}
                <span>
                  <FaRegArrowAltCircleRight />
                </span>
              </span>
            </p>
          )}
          {country.population !== 0 && (
            <p>
              Population
              <span>
                {country.population}
                <span>
                  <FaRegArrowAltCircleRight />
                </span>
              </span>
            </p>
          )}
          {country.area && (
            <p>
              Area in square meters
              <span>
                {country.area}
                <span>
                  <FaRegArrowAltCircleRight />
                </span>
              </span>
            </p>
          )}
          {country.subreagion && (
            <p>
              Sub region
              <span>
                {country.subregion}
                <span>
                  <FaRegArrowAltCircleRight />
                </span>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
