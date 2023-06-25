import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  home: [],
};

const options = {
  method: 'GET',
  url: 'https://rest-country-api.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'ff86c6343emsh602050387db329cp11bacfjsn1ca6719c841b',
    'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com',
  },
};

export const fetchCountries = createAsyncThunk('home/fetchCountries', async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
});
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchCountries.fulfilled, (state, action) => {
      action.payload.forEach((value) => (
        state.home.push(value)
        // console.log(value)
      ));
    });
  },
});

export default homeSlice.reducer;
