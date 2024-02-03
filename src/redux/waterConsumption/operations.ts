import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addWater,
  deleteWaterById,
  getAllWaterForToday,
  updateWaterById,
  getAllWaterForMonth,
} from "../../services/waterApi";
import { handleApiError } from "../../services/handleApiError";

import { RootState } from "../store";
import { IDdailyEntry } from "../../types";

export const addWaterThunk = createAsyncThunk(
  "water/addWater",
  async (water: IDdailyEntry, thunkApi) => {
    try {
      const newDate = new Date();
      const response = await addWater({
        water,
        date: `${newDate.getDate()} ${newDate.toLocaleString("en", {
          month: "long",
        })} ${newDate.getFullYear()}`,
      });
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  "water/deleteWater",
  async (entryId: string, thunkApi) => {
    const { water } = thunkApi.getState() as RootState;

    if (water.today === null) return;

    const _id: string = water.today._id;

    try {
      const response = await deleteWaterById(_id, entryId);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const updateWaterByIdThunk = createAsyncThunk(
  "water/updateEntryWater",
  async (data: { entryId: string; body: IDdailyEntry }, thunkApi) => {
    const { entryId, body } = data;

    const { water } = thunkApi.getState() as RootState;

    if (water.today === null) return;

    const _id: string = water.today._id;

    try {
      const response = await updateWaterById(_id, entryId, body);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const getAllWaterForTodayThunk = createAsyncThunk(
  "water/getTodayWater",
  async (_, thunkApi) => {
    try {
      const date = new Date();
      const response = await getAllWaterForToday(
        `${date.getDate()}-${date.toLocaleString("en", {
          month: "long",
        })}-${date.getFullYear()}`
      );
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const getAllWaterForMonthThunk = createAsyncThunk(
  "water/getMonthWater",
  async (data: { year: string; month: string }, thunkApi) => {
    const { year, month } = data;
    try {
      const response = await getAllWaterForMonth(year, month);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);
