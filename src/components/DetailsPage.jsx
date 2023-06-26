import React from 'react';
import { useLocation } from 'react-router';

const DetailsPage = () => {
  const location = useLocation();
  const { country } = location.state;
  return (
    <div>
      Capital City:
      {' '}
      {country.capital[0]}
      {' '}
      <br />
      Continent:
      {' '}
      {country.continents}
      {' '}
      <br />
      Flag:
      {' '}
      {country.flag}
      {' '}
      <br />
      Languages:
      {' '}
      {country.languages.eng}
      {' '}
      <br />
      Population:
      {' '}
      {country.population}
    </div>
  );
};

export default DetailsPage;
