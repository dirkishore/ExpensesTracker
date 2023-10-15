import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Text } from "react-native";

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  let content = <Text style={styles.msg}>{fallBackText}</Text>;

  if (expenses.length >= 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periods={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  msg: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});
