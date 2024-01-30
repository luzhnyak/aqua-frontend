export const selectWatersToday = state => state.water.today;

export const selectDailyEntries = state => state.water.today.dailyEntries;

export const selectWatersPerMonth = state => state.water.itemsPerMonth;

export const selectLoading = state => state.water.loading;

export const selectError = state => state.water.error;
