import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import myCountries from "./countryData";
import Searching from "../components/Searching";

jest.mock("axios");
const reducer = (
  state = {
    home: { home: myCountries },
  }
) => state;
const store = configureStore({ reducer });

it("Should filter values ", () => {
  axios.get.mockResolvedValue({ data: myCountries });
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={store}>
          <Searching myArray={myCountries} text="Tanzania" />
        </Provider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
