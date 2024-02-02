import { RootState } from "../store";

export const selectWatersToday = (state: RootState) => state.water.today;

export const selectWatersPerMonth = (state: RootState) =>
  state.water.itemsPerMonth;

export const selectLoading = (state: RootState) => state.water.isLoading;

export const selectError = (state: RootState) => state.water.error;
