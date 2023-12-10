import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

function ExpensesSummary({ expenses, periods }) {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  // let expensesSum = 0;
  // for (let i = 0; i < expenses.length; i++) {
  //   expensesSum += expenses[i].amount;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.periods}>{periods}</Text>
      <Text style={styles.total}>Rs.{expensesSum?.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    padding: 20,
    backgroundColor: colors.gray,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  periods: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
  },
  total: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default ExpensesSummary;
