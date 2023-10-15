import { createContext, useReducer } from "react";

const DummyExpenses = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 1500,
    date: new Date("2023-09-01"),
  },
  {
    id: "e2",
    description: "A Mobile Phone",
    amount: 20000,
    date: new Date("2023-08-05"),
  },
  {
    id: "e3",
    description: "Groceries",
    amount: 1000,
    date: new Date("2023-09-10"),
  },
  {
    id: "e4",
    description: "A Laptop",
    amount: 20000,
    date: new Date("2023-08-15"),
  },
  {
    id: "e5",
    description: "Groceries",
    amount: 1000,
    date: new Date("2023-09-17"),
  },
  {
    id: "e6",
    description: "Television",
    amount: 20000,
    date: new Date("2023-08-19"),
  },
  {
    id: "e7",
    description: "Groceries",
    amount: 1000,
    date: new Date("2023-09-24"),
  },
  {
    id: "e8",
    description: "Groceries",
    amount: 1000,
    date: new Date("2023-09-05"),
  },
  {
    id: "e9",
    description: "A Mobile Phone",
    amount: 20000,
    date: new Date("2023-08-20"),
  },
  {
    id: "e10",
    description: "Groceries",
    amount: 1000,
    date: new Date("2023-10-01"),
  },
  {
    id: "e11",
    description: "Groceries",
    amount: 500,
    date: new Date("2023-10-05"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, date, amount }) => {},
  updateExpense: (id) => {},
  deleteExpense: (id, { description, date, amount }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];

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
  const [expensesState, dispatch] = useReducer(expensesReducer, DummyExpenses);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
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
