import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import colors from "../constants/colors";
import { ExpensesContext } from "../store/ExpensesContext";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod={"All Expenses"}
        fallBackText={"No Expenses"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingBottom: 0,
    backgroundColor: colors.primary,
  },
});
