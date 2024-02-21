import axios from "axios";

const API_URL = "/api/expense/";

// add new expense
const addExpense = async (expenseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, expenseData, config);

  return response.data;
};

// get user expenses
const getExpenses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const expenseService = {
  addExpense,
  getExpenses,
};

export default expenseService;
