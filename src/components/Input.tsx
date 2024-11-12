import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

type IInputProps = {
  icon: keyof typeof AntDesign.glyphMap;
  placeholder: string;
};

const Input = ({ icon, placeholder }: IInputProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={24} color="black" />
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
