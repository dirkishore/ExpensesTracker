import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ExpenseInputForm from "./ExpenseInputForm";
import IconButton from "../../UI/IconButton";
import Button from "../../UI/Button";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function Expenseform({
  onCancel,
  submitButtonLabel,
  onSubmit,
  defaultValues,
}) {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description.toString() : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function handleSubmit() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (amountIsValid && dateIsValid & descriptionIsValid) {
      onSubmit(expenseData);
    } else {
      setInputs((preInput) => {
        return {
          amount: { value: preInput.amount.value, isValid: amountIsValid },
          date: { value: preInput.date.value, isValid: dateIsValid },
          description: {
            value: preInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Add Expense</Text>
      <View style={styles.inputContainer}>
        <ExpenseInputForm
          style={styles.rowInput}
          label={"Amount"}
          inValid={!inputs.amount.isValid}
          inputTextConfig={{
            keyboardType: "decimal-pad",
            maxLength: 6,
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <ExpenseInputForm
          style={styles.rowInput}
          label={"Date"}
          inValid={!inputs.date.isValid}
          inputTextConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <ExpenseInputForm
        label={"Description"}
        inValid={!inputs.description.isValid}
        inputTextConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />

      {formIsInvalid && (
        <Text style={styles.errorText}>Please Check the entered value</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
