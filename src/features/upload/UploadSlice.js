import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadFilesAPI, getUploadedFilesAPI, deleteNews } from "./fileUpload";
import { filterFile } from "../../util/uploadUitl";

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

// Fetch all uploaded files thunk
export const deletedUploadedNews = createAsyncThunk(
  "upload/deletedUploadedNews",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteNews(id);
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
    deleting: false,
    uploading: false,
  },
  reducers: {
    updateUploadList: (state, action) => {
      state.files = [...state.files, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload file
      .addCase(uploadFile.pending, (state) => {
        state.uploading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.uploading = false;
        state.files = [...state.files, action.payload]; // Add new file to state
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload;
      })
      .addCase(fetchUploadedFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUploadedFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.files = action.payload.data; // Set all files
      })
      .addCase(fetchUploadedFiles.rejected, (state, action) => {
        state.loading = false;
        state.files = [];
      })
      .addCase(deletedUploadedNews.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deletedUploadedNews.fulfilled, (state, action) => {
        state.deleting = false;
        state.files = filterFile(state.files, action.payload.data.id);
        console.log(state.files);
      })
      .addCase(deletedUploadedNews.rejected, (state, action) => {
        state.deleting = false;
      });
  },
});
export const { updateUploadList } = uploadSlice.actions;
export default uploadSlice.reducer;
