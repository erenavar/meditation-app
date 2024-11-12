import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";

const Input = ({ icon, placeholder }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FontAwesome6 name={icon} size={20} color="black" />
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 17,
    marginLeft: 10,
  },
});
