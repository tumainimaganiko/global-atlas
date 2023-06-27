import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import axios from 'axios';
import myCountries from './countryData';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('axios');
const reducer = (
    state = {
        home: {home: myCountries},
    }
) => state;

const store = configureStore({reducer})
describe('App component', () => {
  test('renders application', () => {
    axios.get.mockResolvedValue({data: myCountries})
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
        <HomePage />
      </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});