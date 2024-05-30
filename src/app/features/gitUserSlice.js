import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk(
  "gitUser",
  async (agrs, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.github.com/users");
      const result = response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.payload);
    }
  }
);

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  reducers: {},

  //2 way to write extra reducers

  //   extraReducers: {
  //     [getAllData.pending]: (state, action) => {
  //       state.loading = true;
  //     },

  //     [getAllData.fulfilled]: (state) => {
  //       state.loading = false;
  //       state.users = action.payload;
  //     },
  //     [getAllData.rejected]: (state) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     },
  //   },

  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default gitUser.reducer;
