import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, date, amount }) => {},
  setExpenses: (expenses) => {},
  updateExpense: (id) => {},
  deleteExpense: (id, { description, date, amount }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "SET":
      const inverted = action.payload?.reverse();
      return inverted;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    case "UPDATE":
      const expenseIndexToUpdate = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[expenseIndexToUpdate];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndexToUpdate] = updatedItem;

      return updatedExpenses;
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    setExpenses,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
