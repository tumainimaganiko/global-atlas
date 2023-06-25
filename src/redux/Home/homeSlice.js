import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
    {
      name: "Tanzania",
      views: 782,
      logo: "https://www.globalization-partners.com/wp-content/uploads/2015/03/globalpedia-hero-tanzania-1.jpg",
    },
  ],
};
const homeSlice = createSlice({
  name: home,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default homeSlice.reducer;