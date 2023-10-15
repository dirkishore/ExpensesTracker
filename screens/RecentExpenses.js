import React, { useContext } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { ExpensesContext } from "../store/ExpensesContext";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  let todayDate = new Date();

  let recentExpenses = expensesCtx.expenses.filter(
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
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod={"Last 7 Days"}
        fallBackText={"No Recent Expenses"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
