import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../utils/slices/CartSlice'
export const store = configureStore({
    reducer : {
        Cart : CartReducer
    }
})