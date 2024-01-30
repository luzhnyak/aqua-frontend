import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addWater,
  deleteWaterById,
  getAllWaterForToday,
  updateWaterById,
  getAllWaterForMonth,
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
  async ({ dayId, entryId }, thunkApi) => {
    try {
      const response = await deleteWaterById(dayId, entryId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateWaterByIdThunk = createAsyncThunk(
  'water/updateEntryWater',
  async ({ dayId, entryId, body }, thunkApi) => {
    try {
      const response = await updateWaterById(dayId, entryId, body);
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

export const getAllWaterForMonthThunk = createAsyncThunk(
  'water/getMonthWater',
  async ({ year, month }, thunkApi) => {
    try {
      const response = await getAllWaterForMonth(year, month);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
