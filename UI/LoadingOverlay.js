import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#190482",
    justifyContent: "center",
    alignItems: "center",
  },
});
