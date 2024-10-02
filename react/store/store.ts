"use client";

import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json(); 
  return data.products; 
});

// Create a slice for handling data fetch state
const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state : any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state : any, action: any) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state : any, action : any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Configure the store
const store = configureStore({
  reducer: {
    data: fetchDataSlice.reducer, // Using the reducer directly from createSlice
  },
});

// Types for the Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
