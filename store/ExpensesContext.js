import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, date, amount }) => {},
  updateExpense: (id) => {},
  deleteExpense: (id, { description, date, amount }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":

    case "DELETE":

    case "UPDATE":

    default:
      return state;
  }
};

const expenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer);
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default expenseContextProvider;
