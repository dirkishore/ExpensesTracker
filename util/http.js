import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-app-6f2f1-default-rtdb.firebaseio.com";

export const storeExpense = async (expenses) => {
  const response = await axios.post(BACKEND_URL + "/expenses.json", expenses);
  const id = response.data.name;
  return id;
};

export const fetchExpense = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  let expenses = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }
  return expenses;
};

export const updateExpense = (expense, id) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expense);
};

export const deleteExpense = (id) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
