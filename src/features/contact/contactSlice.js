import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContactsAPI,
  addContactAPI,
  deleteContactAPI,
  updateContactAPI,
} from "./contactAPI";

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
    contactCreated: false,
  },
  reducers: {
    resetContactCreatedValue: (state) => {
      state.contactCreated = !state.contactCreated;
    },
  },
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
        state.list = [];
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contactCreated = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        const deletedId = action.payload.id;
        state.list = state.list.filter((contact) => contact.id !== deletedId);
      })

      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export const { resetContactCreatedValue } = contactSlice.actions;
export default contactSlice.reducer;
