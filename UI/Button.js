import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: colors.white,
    padding: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#000",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: "#fff",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.secondary,
    borderRadius: 4,
  },
});
