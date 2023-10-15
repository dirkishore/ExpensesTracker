import React from "react";
import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  const renderExpenseItem = (ExpenseItems) => {
    return (
      <ExpenseItem
        id={ExpenseItems.id}
        description={ExpenseItems.description}
        date={ExpenseItems.date}
        amount={ExpenseItems.amount}
      />
    );
  };
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => renderExpenseItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
