// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import contactReducer from "../features/contact/contactSlice";
import uploadReducer from "../features/upload/UploadSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
    uploadFile: uploadReducer,
  },
});
