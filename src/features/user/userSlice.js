import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUsersAPI,
  addUserAPI,
  deleteUserAPI,
  updateUserAPI,
} from "./userAPI";

export const fetchUsers = createAsyncThunk("user/fetchUsers", fetchUsersAPI);
export const addUser = createAsyncThunk("user/addUser", addUserAPI);
export const deleteUser = createAsyncThunk("user/deleteUser", deleteUserAPI);
export const updateUser = createAsyncThunk("user/updateUser", updateUserAPI);

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    loading: false,
    error: null,
    userCreated: false,
  },
  reducers: {
    resetUserCreatedValue: (state, action) => {
      state.userCreated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.userCreated = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload.id);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export const { resetUserCreatedValue } = userSlice.actions;
export default userSlice.reducer;
