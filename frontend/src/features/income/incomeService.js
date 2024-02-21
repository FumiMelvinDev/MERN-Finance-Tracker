import axios from "axios";

const API_URL = "/api/income/";

// add new income
const addIncome = async (incomeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, incomeData, config);

  return response.data;
};

// get user incomes
const getIncome = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const incomeService = {
  addIncome,
  getIncome,
};

export default incomeService;
