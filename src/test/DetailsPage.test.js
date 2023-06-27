import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import myCountries from './countryData';
import DetailsPage from '../components/DetailsPage';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('axios');
const reducer = (
    state = {
        home: {home: myCountries},
    }
) => state;
const store = configureStore({reducer})

it('Should Render Country details', () => {
    axios.get.mockResolvedValue({data: myCountries})
    const tree = renderer.create(
        <MemoryRouter>
            <Provider store={store}>
                <DetailsPage />
            </Provider>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})