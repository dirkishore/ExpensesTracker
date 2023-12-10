import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../constants/colors";

export default function ExpenseInputForm({
  label,
  inValid,
  inputTextConfig,
  style,
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.inputLabel, inValid && styles.errorLabel]}>
        {label}
      </Text>
      <View>
        <TextInput
          style={
            inputTextConfig.multiline === true
              ? [
                  styles.inputStyle,
                  styles.multilineInput,
                  inValid && styles.errorInput,
                ]
              : [styles.inputStyle, inValid && styles.errorInput]
          }
          {...inputTextConfig}
          placeholderTextColor={"#b0b0b0"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
  },
  inputStyle: {
    fontSize: 18,
    color: "black",
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 5,
  },
  inputLabel: {
    color: colors.white,
    fontSize: 12,
    marginBottom: 10,
  },
  errorLabel: {
    color: "red",
  },
  errorInput: {
    backgroundColor: "#FF1700",
  },
  multilineInput: {
    height: 90,
    textAlignVertical: "top",
  },
});
