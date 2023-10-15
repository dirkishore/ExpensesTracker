import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
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

  let todayDate = new Date();

  let recentExpenses = DummyExpenses.filter(
    (d) =>
      d.date >=
      new Date(
        todayDate.getFullYear(),
        todayDate.getMonth(),
        todayDate.getDate() - 7
      )
  );

  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={
          expensesPeriod === "Last 7 Days" ? recentExpenses : DummyExpenses
        }
        periods={expensesPeriod}
      />
      <ExpensesList
        expenses={
          expensesPeriod === "Last 7 Days" ? recentExpenses : DummyExpenses
        }
      />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
});
