import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export const AddTodos = (props) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input}></TextInput>
      <Button title="Додати" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
