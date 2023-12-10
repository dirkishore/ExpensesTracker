import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import colors from "../constants/colors";

const ErrorOverlay = ({ ErrorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occur</Text>
      <Text style={styles.text}>{ErrorMessage}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
