import { configureStore } from "@reduxjs/toolkit"
import expenditureReducer from "../Redux/expSlice"

export const store = configureStore({
    // reducerName
    reducer: {
        myExpenditure: expenditureReducer
    }
})