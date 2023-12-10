import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { ExpensesContext } from "../store/ExpensesContext";
import { fetchExpense } from "../util/http";
import { date7DaysAgo } from "../util/date";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpenses() {
      try {
        const response = await fetchExpense();
        expensesCtx.setExpenses(response);
      } catch (errorMessage) {
        setError("Could not fetch expenses!");
        console.log("recent", error);
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (error?.length > 0 && !isFetching) {
    return <ErrorOverlay ErrorMessage={error} />;
  }

  const today = new Date();
  const recentExpenses = expensesCtx.expenses?.filter(
    (d) => d.date >= date7DaysAgo() && d.date <= today
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
