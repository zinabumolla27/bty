import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContactsAPI,
  addContactAPI,
  deleteContactAPI,
  updateContactAPI,
} from "./contactAPI";

// Async Thunks for API calls
export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  fetchContactsAPI
);
export const addContact = createAsyncThunk("contact/addContact", addContactAPI);
export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  deleteContactAPI
);
export const updateContact = createAsyncThunk(
  "contact/updateContact",
  updateContactAPI
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add new contact to the list
      .addCase(addContact.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // Handle deletion
      .addCase(deleteContact.fulfilled, (state, action) => {
        const deletedId = action.payload; // Assuming payload is the deleted contact's ID
        state.list = state.list.filter((contact) => contact.id !== deletedId);
      })

      // Handle updating contact
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default contactSlice.reducer;
