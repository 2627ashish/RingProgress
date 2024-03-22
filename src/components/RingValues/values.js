import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Value = ({ label, value }) =>
  React.createElement(
    View,
    null,
    React.createElement(Text, { style: styles.label }, label),
    React.createElement(Text, { style: styles.value }, value),
  );

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: "#AFB3BE",
    fontWeight: "500",
  },
});

export default Value;
