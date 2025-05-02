// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
  },
});
