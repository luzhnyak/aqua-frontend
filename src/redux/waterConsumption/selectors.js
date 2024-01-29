export const selectWatersToday = state => state.water.items;

export const selectWatersperDay = state => state.water.itemsPerDay;

export const selectLoading = state => state.water.loading;

export const selectError = state => state.water.error;
