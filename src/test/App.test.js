import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import myCountries from "./countryData";

jest.mock("axios");
const reducer = (
  state = {
    home: { home: myCountries },
  }
) => state;

const store = configureStore({ reducer });
describe("App component", () => {
  test("renders application", () => {
    axios.get.mockResolvedValue({ data: myCountries });
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
