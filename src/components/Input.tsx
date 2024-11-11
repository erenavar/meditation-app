import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    fontFamily: "bold",
  },
});
