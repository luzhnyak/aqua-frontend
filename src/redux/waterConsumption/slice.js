import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  deleteWaterThunk,
  getAllWaterForTodayThunk,
  updateWaterByIdThunk,
  getAllWaterForMonthThunk,
} from './operations';

const waterInitialState = {
  today: null,
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
        state.today = action.payload;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(getAllWaterForTodayThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(updateWaterByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(getAllWaterForMonthThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsPerMonth = action.payload;
      })
      .addMatcher(
        isAnyOf(
          addWaterThunk.pending,
          deleteWaterThunk.pending,
          getAllWaterForTodayThunk.pending,
          updateWaterByIdThunk.pending,
          getAllWaterForMonthThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          addWaterThunk.rejected,
          deleteWaterThunk.rejected,
          getAllWaterForTodayThunk.rejected,
          updateWaterByIdThunk.rejected,
          getAllWaterForMonthThunk.rejected
        ),
        handleRejected
      ),
});

export const waterReducer = waterSlice.reducer;
