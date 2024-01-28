import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addWaterThunk } from './operations';

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
      .addMatcher(isAnyOf(addWaterThunk.pending), handlePending)
      .addMatcher(isAnyOf(addWaterThunk.rejected), handleRejected),
});

export const waterReducer = waterSlice.reducer;
