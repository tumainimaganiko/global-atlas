import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import uuid4 from 'uuid4';
import styles from '../styles/Searching.module.css';

const Searching = ({ myArray, text }) => (
  <div className={styles.container}>
    {
            myArray.filter((item) => {
              const ans = item.name.common.toLowerCase();
              if (ans.includes(text.toLowerCase())) {
                return ans;
              }
              return null;
            }).map((item) => (
              <div key={uuid4()}>
                <NavLink
                  to="details"
                  state={{ country: item }}
                  className={styles.link}
                >
                  <FaRegArrowAltCircleRight />
                  <p>
                    {item.name.common}
                    <br />
                    {item.population}
                    {' '}
                    people
                  </p>
                </NavLink>
              </div>
            ))
}
  </div>
);

export default Searching;

Searching.propTypes = PropTypes.shape({
  myArray: PropTypes.arrayOf(string),
  text: PropTypes.string,
}).isRequired;
