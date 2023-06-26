import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const DetailsPage = () => {
  const location = useLocation();
  const { country } = location.state;
  return (
    <div>
      <NavLink to="/"><FaAngleLeft /></NavLink>
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
    </div>
  );
};

export default DetailsPage;
