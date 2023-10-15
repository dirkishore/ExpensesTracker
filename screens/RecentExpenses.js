import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod={"Last 7 Days"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
