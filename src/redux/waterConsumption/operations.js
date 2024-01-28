import { createAsyncThunk } from '@reduxjs/toolkit';

import { addWater, deleteWaterById } from 'services/waterApi';

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

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater',
  async (entryId, thunkApi) => {
    try {
      //   const response = await deleteWaterById(entryId);
      //   return response;
      await deleteWaterById(entryId);
      return entryId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
