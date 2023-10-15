import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import { getFormattedDate } from "../../util/date";

export default function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: id });
  };

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressHandler}
    >
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amount}>
          <Text>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: colors.secondary,
    marginVertical: 6,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  description: {
    color: "#fff",
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
  },
  amount: {
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
