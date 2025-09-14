import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUsersAPI,
  addUserAPI,
  deleteUserAPI,
  updateUserAPI,
  requestPasswordResetAPI,
  resetPasswordAPI,
} from "./userAPI";

// ✅ User CRUD
export const fetchUsers = createAsyncThunk("user/fetchUsers", fetchUsersAPI);
export const addUser = createAsyncThunk("user/addUser", addUserAPI);
export const deleteUser = createAsyncThunk("user/deleteUser", deleteUserAPI);
export const updateUser = createAsyncThunk("user/updateUser", updateUserAPI);
export const requestPasswordReset = createAsyncThunk(
  "user/requestPasswordReset",
  requestPasswordResetAPI
);
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  resetPasswordAPI
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    loading: false,
    error: null,
    userCreated: false,
    resetSuccess: null,
    resetError: null,
  },
  reducers: {
    resetUserCreatedValue: (state) => {
      state.userCreated = false;
    },
    clearResetStatus: (state) => {
      state.resetSuccess = null;
      state.resetError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add user
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.userCreated = true;
      })

      // Delete user
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload.id);
      })

      // Update user
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.loading = false;
        state.resetSuccess = action.payload.message;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetSuccess = action.payload.message;
      });
  },
});

export const { resetUserCreatedValue, clearResetStatus } = userSlice.actions;
export default userSlice.reducer;
