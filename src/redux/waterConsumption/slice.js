import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  deleteWaterThunk,
  getAllWaterForTodayThunk,
  updateWaterByIdThunk,
  getAllWaterForMonthThunk,
} from './operations';

const waterInitialState = {
  today: { dailyEntries: [] },
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
        state.today.dailyEntries.push(action.payload);
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today.dailyEntries = state.today.dailyEntries.filter(
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
        state.today.dailyEntries = action.payload;
      })
      .addCase(updateWaterByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const array = state.today.dailyWaterList;
        const idx = array.findIndex(item => item._id === action.payload._id);
        if (idx !== -1) {
          array[idx] = action.payload;
        }
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
