import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import inventoryReducer from "./slices/inventorySlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        inventory: inventoryReducer
    },
})