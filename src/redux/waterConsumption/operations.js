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
  async (entryId, thunkApi) => {
    const state = thunkApi.getState();
    const {
      water: {
        today: { _id },
      },
    } = state;

    try {
      const response = await deleteWaterById(_id, entryId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateWaterByIdThunk = createAsyncThunk(
  'water/updateEntryWater',
  async ({ entryId, body }, thunkApi) => {
    const state = thunkApi.getState();
    const {
      water: {
        today: { _id },
      },
    } = state;
    try {
      const response = await updateWaterById(_id, entryId, body);
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
