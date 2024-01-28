import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  deleteWaterThunk,
  getAllWaterForTodayThunk,
} from './operations';

const waterInitialState = {
  items: [],
  itemsPerMonth: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: waterInitialState,

  extraReducers: builder =>
    builder
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          entry => entry._id !== action.payload._id
        );
        //    const index = state.items.findIndex(
        //      entry => entry.id === action.payload.id
        //    );
        //    state.items.splice(index, 1);
      })
      .addCase(getAllWaterForTodayThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.dailyEntries;
      })
      .addMatcher(
        isAnyOf(addWaterThunk.pending, deleteWaterThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(addWaterThunk.rejected, deleteWaterThunk.rejected),
        handleRejected
      ),
});

export const waterReducer = waterSlice.reducer;
