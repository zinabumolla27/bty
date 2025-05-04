import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadFilesAPI, getUploadedFilesAPI } from "./fileUpload";

// Upload file thunk
export const uploadFile = createAsyncThunk(
  "upload/file",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await uploadFilesAPI(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch all uploaded files thunk
export const fetchUploadedFiles = createAsyncThunk(
  "upload/fetchFiles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUploadedFilesAPI();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const uploadSlice = createSlice({
  name: "uploadFile",
  initialState: {
    loading: false,
    error: null,
    files: [], // store fetched files
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload file
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.files.push(action.payload); // Add new file to state
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch uploaded files
      .addCase(fetchUploadedFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUploadedFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.files = action.payload; // Set all files
      })
      .addCase(fetchUploadedFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default uploadSlice.reducer;
