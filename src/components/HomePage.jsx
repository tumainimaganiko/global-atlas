import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/HomePage.module.css';
import { fetchCountries } from '../redux/Home/homeSlice';

const HomePage = () => {
  const { home } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {home.map((item) => (
        <div>
          {console.log(item.capital)}
          <h2>Hnjmkm</h2>
          name:
          {' '}
          {item.name.official}
          Capital City:
          {' '}
          {item.capital[0]}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
