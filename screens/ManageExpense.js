import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../UI/Button";
import colors from "../constants/colors";
import IconButton from "../UI/IconButton";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log("delete");
    navigation.goBack();
  }

  let cancelHandler = () => {
    navigation.goBack();
  };

  let confirmHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>{editedExpenseId}</Text>
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.trashContainer}>
          <IconButton
            icon={"trash"}
            size={28}
            color={"red"}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 18,
  },
  trashContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopColor: colors.white,
    borderTopWidth: 0.5,
    marginTop: 12,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
  },
});
