import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import incomeService from "./incomeService";

const initialState = {
  incomes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// add income
export const addIncome = createAsyncThunk(
  "incomes/add",
  async (incomeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await incomeService.addIncome(incomeData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.tosString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get incomes
export const getIncome = createAsyncThunk(
  "incomes/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await incomeService.getIncome(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.tosString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //   add income
      .addCase(addIncome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.incomes.push(action.payload);
      })
      .addCase(addIncome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //   get income
      .addCase(getIncome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.incomes = action.payload;
      })
      .addCase(getIncome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = incomeSlice.actions;

export default incomeSlice.reducer;
