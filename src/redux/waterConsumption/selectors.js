export const selectWatersToday = state => state.water.today;

export const selectWatersPerMonth = state => state.water.itemsPerMonth;

export const selectLoading = state => state.water.isLoading;

export const selectError = state => state.water.error;
