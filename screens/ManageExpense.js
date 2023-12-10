import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import IconButton from "../UI/IconButton";
import { ExpensesContext } from "../store/ExpensesContext";
import Expenseform from "../components/ManageExpense/Expenseform";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

export default function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const selectedExpense = expenseCtx.expenses?.find(
    (expense) => expense.id === editedExpenseId
  );

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expenseCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setErrorMessage("Could not delete expense!");
      setIsSubmitting(false);
    }
  }

  let cancelHandler = () => {
    navigation.goBack();
  };

  let confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await updateExpense(expenseData, editedExpenseId);
        expenseCtx.updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setErrorMessage("Could not save expense - Please try again later!");
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  if (errorMessage?.length > 0 && !isSubmitting) {
    return <ErrorOverlay ErrorMessage={errorMessage} />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Expenseform
          defaultValues={selectedExpense}
          submitButtonLabel={isEditing === true ? "Update" : "Add"}
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
        />
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
    backgroundColor: "#190482",
    paddingHorizontal: 8,
  },
  trashContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopColor: colors.primary,
    borderTopWidth: 0.5,
    marginTop: 12,
  },
});
