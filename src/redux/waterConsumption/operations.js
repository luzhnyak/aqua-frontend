import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addWater,
  deleteWaterById,
  getAllWaterForToday,
} from 'services/waterApi';

export const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async (newWater, thunkApi) => {
    try {
      const response = await addWater(newWater);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater',
  async (entryId, thunkApi) => {
    try {
      const response = await deleteWaterById(entryId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllWaterForTodayThunk = createAsyncThunk(
  'water/getTodayWater',
  async (_, thunkApi) => {
    try {
      const response = await getAllWaterForToday();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
