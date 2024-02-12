import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  incomes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const IncomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = IncomeSlice.actions;

export default IncomeSlice.reducer;
