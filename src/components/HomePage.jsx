import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid4 from "uuid4";
import { NavLink } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import styles from "../styles/HomePage.module.css";
import { fetchCountries } from "../redux/Home/homeSlice";

const HomePage = () => {
  const { home } = useSelector((store) => store.home);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <>
      <div className={styles.home}>
        <h1>Global Atlas</h1>
        <h2>Explore and Discover</h2>
        <input
          type="search"
          name="search"
          value={text}
          onChange={handleSearch}
          placeholder="search by country name"
        />
      </div>
      <div className={styles.container}>
        {text.length <= 0
          ? home.map((item) => (
              <div key={uuid4()}>
                <NavLink
                  to="details"
                  state={{ country: item }}
                  className={styles.link}
                >
                  <FaRegArrowAltCircleRight />{" "}
                  <p>
                    {item.name.official} <br />
                    {item.population} people
                  </p>
                </NavLink>
              </div>
            ))
          : home
              .filter((test) => {
                const ans = test.name.official.toLowerCase();

                if (ans.includes(text.toLowerCase())) {
                  return ans;
                }
                return null;
              })
              .map((item) => (
                <div key={uuid4()}>
                  <NavLink
                    to="details"
                    state={{ country: item }}
                    className={styles.link}
                  >
                    <FaRegArrowAltCircleRight />
                    <p>
                      {item.name.official}
                      <br />
                      {item.population} people
                    </p>
                  </NavLink>
                </div>
              ))}
      </div>
    </>
  );
};

export default HomePage;
