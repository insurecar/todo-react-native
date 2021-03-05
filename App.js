import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodos } from "./src/AddTodos";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
