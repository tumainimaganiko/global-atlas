import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from './Home/homeSlice'

const store = configureStore({
    reducer:{
        home: HomeReducer
    }
})

export default store;