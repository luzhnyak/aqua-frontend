import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addWaterThunk,
  deleteWaterThunk,
  getAllWaterForTodayThunk,
  updateWaterByIdThunk,
  getAllWaterForMonthThunk,
} from "./operations";
import { IWater } from "../../types";

export interface IWaterInitialState {
  today: IWater | null;
  itemsPerMonth: IWater[];
  isLoading: boolean;
  error: Error | any;
}

const waterInitialState: IWaterInitialState = {
  today: null,
  itemsPerMonth: [],
  isLoading: false,
  error: null,
};

// const handlePending = (state: IWaterInitialState): void => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (
//   state: IWaterInitialState,
//   action: PayloadAction<any>
// ): void => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const waterSlice = createSlice({
  name: "water",
  initialState: waterInitialState,
  reducers: {
    // redusers
  },
  extraReducers: (builder) =>
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

        //    const index = state.items.findIndex(
        //      entry => entry.id === action.payload.id
        //    );
        //    state.items.splice(index, 1);
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
        // handlePending
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addWaterThunk.rejected,
          deleteWaterThunk.rejected,
          getAllWaterForTodayThunk.rejected,
          updateWaterByIdThunk.rejected,
          getAllWaterForMonthThunk.rejected
        ),
        // handleRejected
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const waterReducer = waterSlice.reducer;
