import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import colors from "../constants/colors";

export default function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod={"All Expenses"} />
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
