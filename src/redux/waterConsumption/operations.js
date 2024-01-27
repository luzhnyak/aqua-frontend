import { createAsyncThunk } from '@reduxjs/toolkit';

import { addWater } from 'services/waterApi';

export const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async (newWater, thunkApi) => {
    try {
      const response = await addWater(newWater);
      return response.dailyEntries;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
